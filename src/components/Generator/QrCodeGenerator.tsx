import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import css from "./QrCodeGenerator.module.css";
import { GENERATE_DATA } from "../../constants";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [showQr, setShowQr] = useState("");

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event);
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

    console.log("prevData", prevData);

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));
    setShowQr(value);
    setValue("");
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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
