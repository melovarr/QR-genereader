import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import css from "./QrCodeGenerator.module.css";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [showQr, setShowQr] = useState("");

  const onClickHandler = (event) => {
    // console.log("testing once more", event);
    setShowQr(value);
    setValue("");
  };

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
    setShowQr("");
  };
  console.log(showQr);

  return (
    <div className={css.container}>
      <input
        className={css.input}
        type="text"
        value={value}
        placeholder="Enter your text..."
        onChange={inputChangeHandler}
      />
      <button className={css.btn} type="button" onClick={onClickHandler}>
        Generate QR
      </button>
      {showQr !== "" && <QRCodeSVG value={showQr} size={200} />}
    </div>
  );
};
