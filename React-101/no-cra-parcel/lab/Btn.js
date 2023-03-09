import React from "react";

const Btn = ({ arry }) => {
  return (
    <div className="button">
      <div className="icon">
        <i className={`fa fa-${arry.toLowerCase()}`}></i>
      </div>
      <span>{arry}</span>
    </div>
  );
};

export default Btn;
