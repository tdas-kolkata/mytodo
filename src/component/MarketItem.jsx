import React from "react";
import css from "./marketitem.module.css";

export default function MarketItem(props) {
  const style = { height: "25rem" };
  const imgstyle = { width: "80%", height: "50%" };
  return (
    <div
      className="card m-1 col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xm-8 col-11"
      style={style}
    >
      <img
        src={props.product.image}
        alt=""
        className="card-img-top mx-auto"
        style={imgstyle}
      />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{props.product.category}</h6>
        <p className="card-text">
          <span>&#x20B9;</span>
          {props.product.price}
        </p>
        <a href="" className={`btn ${css.customBtn}`}>
          Add to Cart
        </a>
      </div>
    </div>
  );
}
