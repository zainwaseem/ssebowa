import React from "react";

const Item = (props) => {
  return (
    <>
      <div className="items-styles">{props.children}</div>
    </>
  );
};

export default Item;
