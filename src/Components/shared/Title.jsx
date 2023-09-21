import React from "react";

const Title = ({ head, text = null, color = "#242424", center='center' }) => {
  return (
    <div>
      <h1 className="title" style={{ color , textAlign: center}}>
        {head}
      </h1>
      <p className="text-sm" style={{ color, textAlign: center }}>
        {text ??
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      </p>
    </div>
  );
};

export default Title;
