import { GENERATE_DATA } from "../../constants";
import { QRCodeSVG } from "qrcode.react";

export const GenHistory = () => {
  const genData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

  return (
    <div>
      {genData.map((text: string) => (
        <p key={text}>
          {text}
          <QRCodeSVG value={text} size={50} />
        </p>
      ))}
    </div>
  );
};
