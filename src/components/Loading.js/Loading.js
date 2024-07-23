import React, { useEffect } from 'react';
import './Loading.css'; 

function Loading({ onFinish }) {
  useEffect(() => {
    // Simulate a loading delay (e.g., 2 seconds)
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loading-container">
      <div className="loader"></div>
      <h2>WELCOME TO MY DASHBOARD</h2>
    </div>
  );
}

export default Loading;