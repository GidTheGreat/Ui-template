import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const options = [
  "dark_blue",
  "dark_white",
  "dark_orange",
  "dark_green",
  "light_dark",
  "light_blue",
  "purple_blue"
];

export default function ThemeSelector() {
  const { mode, setMode } = useContext(ThemeContext);

  return (
    <select value={mode} onChange={(e) => setMode(e.target.value)}>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}