import React from 'react'
import OredrBtn from '../buttons/PrimaryBtn';
export default function SingleProduct(props) {
    const {image, title, price} = props;
  return (
    <div className="col-lg-3 col-md-6">
        <div className="single-unique-product">
            <img className="img-fluid" src={image} alt="Image" />
            <div className="desc">
                <h4>{title}</h4>
                <h6>{price}</h6>
                <OredrBtn className="text-uppercase primary-btn" buttonTxt="Pre Order" />
            </div>
        </div>
    </div>
  )
}
