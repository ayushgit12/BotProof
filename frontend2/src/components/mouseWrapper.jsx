import React from "react";
import { useLocation } from "react-router-dom";
import GlobalMouseTracker from "./globalMouseData.jsx";

const MouseTrackerWrapper = () => {
  const location = useLocation();
  console.log("Location: ", location);
  // // Render the GlobalMouseTracker only on the signup page
  return location.pathname === "/signup" ? <GlobalMouseTracker /> : null;

  <GlobalMouseTracker />;
};

export default MouseTrackerWrapper;
