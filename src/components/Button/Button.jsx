import React from "react";
import "./Button.css"

const Button = ({content, style, onClick}) => {
  return (
    <button className="dynamic-btn" type="submit" style={style} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
