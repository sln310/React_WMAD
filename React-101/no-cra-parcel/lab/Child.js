import React from "react";
import Btn from "./Btn";

const Child = () => {
  const arry = [
    "Instagram",
    "Facebook",
    "Twitter",
    "LinkedIn",
    "YouTube",
    "Github",
  ];
  return (
    <section>
      <div className="wrapper">
        {arry.map((arry) => (
          <Btn arry={arry} />
        ))}
      </div>
    </section>
  );
};

export default Child;
