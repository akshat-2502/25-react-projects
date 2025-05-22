import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

const QRCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleGenerateqr = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div className="qr-code-container">
      <h1>QR Code Generator</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Your Value"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateqr}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
