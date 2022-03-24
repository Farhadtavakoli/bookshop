import React from "react";
import ProductItem from "./Product_Item";
import "../Stylings/Product_Item.css";

function Product() {
  return (
    <div className="producr_Container">
      <div className="items">
        <ProductItem
          bookTitle="JavaScript"
          author="Farhad"
          bookInfo="Modern JavaScript to have a greate understanding of programming"
        />
        <ProductItem
          bookTitle="JavaScript"
          author="Farhad"
          bookInfo="Modern JavaScript to have a greate understanding of programming"
        />
        <ProductItem
          bookTitle="JavaScript"
          author="Farhad"
          bookInfo="Modern JavaScript to have a greate understanding of programming"
        />
        <ProductItem
          bookTitle="JavaScript"
          author="Farhad"
          bookInfo="Modern JavaScript to have a greate understanding of programming"
        />
        <ProductItem
          bookTitle="JavaScript"
          author="Farhad"
          bookInfo="Modern JavaScript to have a greate understanding of programming"
        />
        <ProductItem
          bookTitle="JavaScript"
          author="Farhad"
          bookInfo="Modern JavaScript to have a greate understanding of programming"
        />
      </div>
    </div>
  );
}

export default Product;
