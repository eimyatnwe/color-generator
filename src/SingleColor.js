import React, { useState, useEffect } from "react";
import rgbToHex from "./Utils";
const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  let bcg = rgb.join(",");
  const hexColorValue = `#${hexColor}`;
  console.log(bcg, rgb);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`color`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexColorValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColorValue}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
