import css from "./Navigation.module.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className={css.container}>
      <Link to="/generate">Generate QR-code</Link>
      <Link to="/scan">Scan QR-code</Link>
      <Link to="/genstory">Generating history</Link>
      <Link to="/scanstory">Scanning history</Link>
    </nav>
  );
};
