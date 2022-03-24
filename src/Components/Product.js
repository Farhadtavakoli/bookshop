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
          bookTitle="Express.js"
          author="Tony Lavandson"
          bookInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nisi et mollitia, repellat, dolores magni sunt numq"
        />
        <ProductItem
          bookTitle="Node.js"
          author="Ebrahim Mirzaie"
          bookInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis n"
        />
        <ProductItem
          bookTitle="SQL server"
          author="Farhad Tavakoli"
          bookInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis n"
        />
        <ProductItem
          bookTitle="C#"
          author="Farhad"
          bookInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis n"
        />
        <ProductItem
          bookTitle="Git"
          author="Farhad"
          bookInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis n"
        />
      </div>
    </div>
  );
}

export default Product;
