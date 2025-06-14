import { QrCodeGenerator } from "../Generator/QrCodeGenerator";
import { GenHistory } from "../GenHistory/GenHistory";
import { Navigation } from "../Navigation/Navigation";
import { QrCodeScaner } from "../Scaner/QrCodeScaner";
import { Routes, Route } from "react-router";
import { ScanHistory } from "../ScanHistory/ScanHistory";

export const Layout = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        {/* <Route path="/" element={<Navigation />} /> */}
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/scan" element={<QrCodeScaner />} />
        <Route path="/genstory" element={<GenHistory />} />
        <Route path="/scanstory" element={<ScanHistory />} />
      </Routes>
    </div>
  );
};
