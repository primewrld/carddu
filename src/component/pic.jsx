import React from "react";
import Images from "../assets/cats-removebg-preview.png";
import "../App.css"
const CatPic = () => {
    return (
        <div className="cat">
            <img src={Images} alt="cat" />
            <div className="dott"> 
        
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