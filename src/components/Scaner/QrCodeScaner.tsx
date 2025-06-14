import { Scanner } from "@yudiel/react-qr-scanner";
import css from "./QrCodeScaner.module.css";
import { useState } from "react";
import type { IDetectedBarcode } from "@yudiel/react-qr-scanner";
import { SCAN_DATA } from "../../constants";

export const QrCodeScaner = () => {
  const [scanned, setScanned] = useState("");

  const scanHandler = (result: IDetectedBarcode[]) => {
    setScanned(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

    console.log("prevData", prevData);

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    );
  };

  return (
    <div className={css.container}>
      <Scanner
        allowMultiple={false}
        components={{
          zoom: true,
          finder: false,
        }}
        onScan={scanHandler}
        styles={{
          container: { width: 200 },
        }}
      />
      <p className={css.scanitem}>{scanned}</p>
    </div>
  );
};
