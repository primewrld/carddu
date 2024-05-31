import React from "react";
import images from "./path/to/your/images/cats-removebg-preview.png"
import "../App.css"
const CatPic = () => {
    return (
        <div className="cat">
            <img src={images} alt="cat" />
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