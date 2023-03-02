import React from "react";
import HomeImg from "../imges/Home.png";
export default function Home() {
  return (
    <div>
      <img src={HomeImg} style={{ padding: "20px 33%", height: "280px" }} />
      {/* <h1 style={{ padding: "20px 46%", color: "#fff" }}>Home</h1> */}
    </div>
  );
}
