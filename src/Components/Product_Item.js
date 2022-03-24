import React from "react";
import "../Stylings/Product_Item.css";

function ProductItem(props) {
  return (
    <>
      <div className="item">
        <div className="bookTitle">
          <h3>{props.bookTitle}</h3>
        </div>
        <div className="author">
          <h5>{props.author}</h5>
        </div>
        <div className="bookInfo">
          <p>{props.bookInfo}</p>
        </div>

        <button className="btn">Add to cart</button>
      </div>
    </>
  );
}

export default ProductItem;
