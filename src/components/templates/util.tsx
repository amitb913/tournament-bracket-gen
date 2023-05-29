import React from "react";
import trophy from "../../assets/trophy.png";

export const line = (x1: string, x2: string, y1: string, y2: string) => {
  return (
    <line
      x1={x1}
      x2={x2}
      y1={y1}
      y2={y2}
      style={{ stroke: "black", strokeWidth: 2 }}
    />
  );
};

export const WinnerBox = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      width: 200,
      height: 140,
      border: "2px solid black",
      borderRadius: 10,
      marginLeft: 5,
      paddingLeft: 10,
      paddingRight: 10,
    }}
  >
    <h3 style={{ margin: 0 }}>Winner</h3>
    <img src={trophy} />
  </div>
);
