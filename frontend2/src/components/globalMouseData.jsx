import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://127.0.0.1:5000', {
  transports: ['websocket'], // Use WebSocket transport
  withCredentials: true,     // Send credentials (cookies) with requests
});

const GlobalMouseTracker = () => {

  const [responseData, setResponseData] = React.useState("")

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const mouseData = { x: clientX, y: clientY, timestamp: Date.now() };

      console.log('Mouse Data: ', mouseData);
      
      // Send data to the Socket.io server
      socket.emit('mouse_data', mouseData);


      socket.on('response', (data) => {
        console.log('Data received from server:', data);
        setResponseData(data.data); // Store the received data in state
        localStorage.setItem('responseData', data?.prediction); // Store the received data in local storage
        
      });

    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default GlobalMouseTracker;
