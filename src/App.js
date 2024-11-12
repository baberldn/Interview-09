import React, { useEffect, useState } from "react";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
      <GrowingButton />
    </div>
  );
}

const GrowingButton = () => {
  const [size, setSize] = useState(100); 
  const [isGrowing, setIsGrowing] = useState(true);

  const MIN_SIZE = 100; 
  const MAX_SIZE = 200; 
  const GROWTH_RATE = 2; 

 
  useEffect(() => {
    const interval = setInterval(() => {
      setSize((prevSize) => {
        if (isGrowing && prevSize < MAX_SIZE) {
          return prevSize + GROWTH_RATE;
        } else if (!isGrowing && prevSize > MIN_SIZE) {
          return prevSize - GROWTH_RATE;
        }
        return prevSize; 
      });
    }, 50);

    return () => clearInterval(interval); 
  }, [isGrowing]);

  
  const toggleGrowth = () => {
    setIsGrowing((pre) => !pre);
  };

  return (
    <button
      onClick={toggleGrowth}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fontSize: "16px",
        transition: "width 0.05s, height 0.05s",
        backgroundColor: "red",
        color: "white",

      }}
    >
      {isGrowing ? "Küçült" : "Büyüt"}
    </button>
  );
};

export default App;
