import React from "react";
import images from "./images/cats-removebg-preview.png"
import "../App.css"
const CatPic = () => {
    return (
        <div className="cat">
            <img src={images}alt="cat" />
            <div className="dott"> 
        <box-icon type="solid" color="grey" name="grey"></box-icon>
        <box-icon type="solid" name="square" color="grey"></box-icon>
        <box-icon type="solid" name="square" color="grey"></box-icon>
        <box-icon type="solid" name="square" color="grey"></box-icon>
        <box-icon type="solid" name="square" color="grey"></box-icon>
        <box-icon type="solid" name="square" color="grey"></box-icon>

      </div>
        </div>
    )
}

export default CatPic;