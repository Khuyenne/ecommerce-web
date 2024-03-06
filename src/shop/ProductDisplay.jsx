import React, { useState } from 'react';
const desc = "Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources applicatons emerging psd template."

const ProductDisplay = ({item}) => {
    // console.log(item);
    const {name, id, price, seller, ratingsCount, quantity}= item;
    const [prequantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select Size");
    const [color, setColor]= useState("Select Color");
    const handleSizeChange = (e) => {
      setSize(e.target.value);
    }

    const handleColorChange = (e) => {
      setColor(e.target.value);
    }

  return (
    <div>
        <div>
            <h4>{name}</h4>
            <p className="rating">
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <span>{ratingsCount} review</span>
            </p>
            <h4>${price}</h4>
            <h6>{seller}</h6>
            <p>{desc}</p>
        </div>

        {/** cart compoments */}
        <div>
          <form>
            {/** size */}
            <div className="select-product size">
              <select value={size} onChange={handleSizeChange}>
                <option>Select Size</option>
                <option>SM</option>
                <option>MD</option>
                <option>LG</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
              <i className="icofont-rounded-down"></i>
            </div>

            {/** color */}
            <div className="select-product color">
              <select value={color} onChange={handleColorChange}>
                <option>Select Color</option>
                <option>Pink</option>
                <option>Ash</option>
                <option>Red</option>
                <option>White</option>
                <option>Blue</option>
                <option>Black</option>
              </select>
              <i className="icofont-rounded-down"></i>
            </div>

            {/** cart plus minus */}
            <div className="cart-plus-minus">
              <div>-</div>
              <input type="text"  name='qtybutton' id='qtybutton' value={prequantity}/>
              <div>+</div>
            </div>
          </form>
        </div>
    </div>
  )
}

export default ProductDisplay