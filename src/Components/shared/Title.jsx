import React from "react";

const Title = ({ head, color = "#242424", center='center' }) => {
  return (
    <div>
      <h1 className="title text-[41px]" style={{ color , textAlign: center}}>
        {head}
      </h1>
      <p className="text-sm leading-7  " style={{ color, textAlign: center }}>
      Build responsive, mobile-first projects on the web with the world's most popular <br /> frontend components library
      </p>
    </div>
  );
};

export default Title;
