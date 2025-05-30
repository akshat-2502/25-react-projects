import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  const handleRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") handleRgbColor();
    else handleHexColor();
  }, [typeOfColor]);

  return (
    <div>
      <h1>
        <h1 className="text-4xl flex justify-center mb-10">
          Randon Background Color
        </h1>
      </h1>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
          padding: "0px",
          margin: "0px",
        }}
      >
        <div className="flex justify-center">
          <button
            onClick={() => setTypeOfColor("hex")}
            className="text-black px-4 py-2 m-2 cursor-pointer bg-gray-300"
          >
            Create HEX Color
          </button>
          <button
            onClick={() => setTypeOfColor("rgb")}
            className="text-black px-4 py-2 m-2 cursor-pointer bg-gray-300"
          >
            Create RGB Color
          </button>
          <button
            onClick={typeOfColor === "hex" ? handleHexColor : handleRgbColor}
            className="text-black px-4 py-2 m-2 cursor-pointer bg-gray-300"
          >
            Generate Random Color
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "60px",
            marginTop: "50px",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </div>
  );
}
