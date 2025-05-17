import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        padding: "0px",
        margin: "0px",
      }}
    >
      <button className="text-black px-4 py-2 m-2 cursor-pointer bg-gray-300">
        Create HEX Color
      </button>
      <button className="text-black px-4 py-2 m-2 cursor-pointer bg-gray-300">
        Create RGB Color
      </button>
      <button className="text-black px-4 py-2 m-2 cursor-pointer bg-gray-300">
        Generate Random Color
      </button>
    </div>
  );
}
