import React, { useEffect, useState } from "react";
import { sendMouseDataToAPI } from "../utils/api.js";

const GlobalMouseTracker = () => {
  const [mouseTrail, setMouseTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const mouseData = { x: clientX, y: clientY, timestamp: Date.now() };

      setMouseTrail((prevTrail) => [...prevTrail, mouseData]);

      sendMouseDataToAPI(mouseData);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default GlobalMouseTracker;
