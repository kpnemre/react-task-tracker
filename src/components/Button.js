import React from "react";

const Button = ({ color, text, onClick}) => {
  console.log("Button: rendering")
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        className="btn"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default React.memo(Button);
