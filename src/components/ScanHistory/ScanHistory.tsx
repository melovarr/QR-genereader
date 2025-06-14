import { SCAN_DATA } from "../../constants";
import { QRCodeSVG } from "qrcode.react";

export const ScanHistory = () => {
  const scanData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

  return (
    <div>
      {scanData.map((text: string) => (
        <p key={text}>
          {text}
          <QRCodeSVG value={text} size={50} />
        </p>
      ))}
    </div>
  );
};
