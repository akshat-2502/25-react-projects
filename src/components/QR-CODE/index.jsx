import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  return (
    <div>
      <h1>QR COde Generator</h1>
      <div>
        <input type="text" placeholder="Enter Your Value" />
        <button>Generate</button>
      </div>
      <div>
        <QRCode id="qr-code-value" size={400} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
