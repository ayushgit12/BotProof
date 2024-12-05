import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Header } from "../components/header";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Testimonials } from "../components/testimonials";
import landingPageData from "../data/data.json";

export const LandingPage = () => {
  const socket = io("http://127.0.0.1:5000", {
    transports: ["websocket"], // Use WebSocket transport
    withCredentials: true, // Send credentials (cookies) with requests
  });
  
  const [responseData, setResponseData] = useState(null);
  const [prediction, setPrediction] = useState(localStorage.getItem("prediction") || null);
  const [showPopup, setShowPopup] = useState(false); // Track popup visibility
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const mouseData = { x: clientX, y: clientY, timestamp: Date.now() };

      console.log("Mouse Data: ", mouseData);

      // Send data to the Socket.io server
      socket.emit("mouse_data", mouseData);

      socket.on("response1", (data) => {
        setResponseData(data.data); // Store the received data in state
        setPrediction(data?.prediction);
        localStorage.setItem("prediction", data?.prediction); // Store the received data in local storage
      });
    };


    const handleReload = () => {

     // Send reload data to the server
     socket.emit("mouse_data", "reload");
   };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("load", handleReload); // Send "reload" event on load
    window.addEventListener("beforeunload", handleReload); // Trigger before page unload


    return () => {
     window.removeEventListener("mousemove", handleMouseMove);
     window.removeEventListener("load", handleReload);
     window.removeEventListener("beforeunload", handleReload);
    };
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup); // Toggle popup visibility
  };

  return (
    <div>
      {/* Prediction Display */}
      <p
        className="z-50 text-red-500 text-xl fixed right-16 top-32 cursor-pointer"
        onClick={togglePopup} // Show popup on click
      >
        Prediction: <br />
        {prediction}
      </p>

      {/* Popup */}
      {showPopup && (
        <div className="fixed right-20 top-48 bg-gray-800 text-white p-4 rounded shadow-lg z-50">
          <p>
            The prediction is changing in real-time based on your cursor
            movements.
          </p>
          <button
            className="mt-2 px-4 py-2 bg-red-500 rounded hover:bg-red-600"
            onClick={togglePopup} // Close popup on button click
          >
            Close
          </button>
        </div>
      )}

      {/* Other Components */}
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
    </div>
  );
};
