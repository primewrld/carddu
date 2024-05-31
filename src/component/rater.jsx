import React from "react";
import "../App.css";
import CatPic from "./pic";
const Rater = () => {
  return (
    <div className="rater">
      <h4>
        <em>soft fleece cat sweater</em>
      </h4>
      <div>
      <box-icon color="cyan" type="solid" name="star"></box-icon>
      <box-icon color="cyan" type="solid" name="star"></box-icon>
      <box-icon color="cyan" type="solid" name="star"></box-icon>

      <box-icon color="cyan" type="solid" name="star"></box-icon>
      <box-icon color="cyan" type="solid" name="star-half"></box-icon></div>
      <div className="color">
        <p>color:</p>
        <box-icon type="solid" name="square"></box-icon>
        <box-icon type="solid" color="blue" name="square"></box-icon>
        <box-icon type="solid" name="square" color="pink"></box-icon>
        <box-icon type="solid" name="square" color="yellow"></box-icon>
        <box-icon type="solid" name="square" color="green"></box-icon>
      </div>
      <div className="Size">
        <p>size:</p>
        <div>S</div>
        <div>L</div>
        <div>M</div>
        <div>XL</div>
      </div>
      <strong>$ 14.99</strong>
        <div className="order">
      <button>order now</button>
      <div className="love">
        <box-icon type="solid" name="heart" color="green"></box-icon>
      </div>
      </div>
    </div>
    
  );
};

export default Rater;
