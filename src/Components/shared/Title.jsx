import React from "react";

const Title = ({ head, color = "#1A3553", center='center' }) => {
  return (
    <div className="ohidden">
      <h1 className="title text-[41px] py-6" style={{ color , textAlign: center}}>
        {head}
      </h1>
      <h1 className="text-sm leading-7 " style={{ color, textAlign: center }}>
      Build responsive, mobile-first projects on the web with the world's most popular <br /> frontend components library
      </h1>
    </div>
  );
};

export default Title;
