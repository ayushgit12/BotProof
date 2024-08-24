import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const CombinedVerificationDemo = () => {
  const [trail, setTrail] = useState([]);
  const [trackedData, setTrackedData] = useState([]);
  const scrollRef = useRef(null);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;

    setTrail((prevTrail) => [
      ...prevTrail,
      { x: clientX, y: clientY, timestamp: Date.now() },
    ]);
    setTrail((prevTrail) =>
      prevTrail.filter((point) => Date.now() - point.timestamp < 1000)
    );

    setTrackedData((prevData) => [
      ...prevData,
      { type: "mouseMove", position: { x: clientX, y: clientY } },
    ]);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [trackedData]);

  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={2}>
        {/* Mouse Trail Visualization Section */}
        <Grid item xs={8}>
          <Paper
            sx={{
              border: "1px solid #ccc",
              padding: 2,
              height: "400px",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseMove={handleMouseMove}
          >
            <Typography variant="h6">Mouse Trail Area</Typography>
            <svg
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              {trail.map((point, index) => (
                <circle
                  key={index}
                  cx={point.x}
                  cy={point.y}
                  r="3"
                  fill="rgba(0, 150, 255, 0.5)"
                />
              ))}
            </svg>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper
            ref={scrollRef}
            sx={{
              border: "1px solid #ccc",
              padding: 2,
              height: "400px",
              overflowY: "auto",
            }}
          >
            <Typography variant="h6">Mouse Coordinates</Typography>
            <ul>
              {trackedData.map((data, index) => (
                <li key={index}>
                  {data.type} - Position: (X: {data.position.x}, Y:{" "}
                  {data.position.y})
                </li>
              ))}
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CombinedVerificationDemo;
