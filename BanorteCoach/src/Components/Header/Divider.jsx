import React from 'react';

function VerticalLineDivider() {
  const dividerStyle = {
    height: '7vh',          // Set the height to span the container
    borderRight: '1px solid #ffffff', // Define the vertical line
    margin: '0 20px',        // Optional margin for spacing
  };

  return (
    <div style={dividerStyle}></div>
  );
}

export default VerticalLineDivider;