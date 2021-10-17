import React from "react";
import "../../css/Product.css";

function Pcard(props) {
  let productData = props.productList.map((product) => {
    return (
      <div
        className="Pbox"
        style={{ border: "0.1px solid black" }}
        key={product.idx}
      >
        <div className="title">
          <h3>{product.appName}</h3>
        </div>
        <br />
        <div>
          About Our App
          <br />
          {product.about}
          <br />
          {product.hashTag}
          <br />
          <br />
          Main Developer
          <br />
          {product.mainDeveloper}
          <br />
          <br />
          Project Duration
          <br />
          {product.projectDuration}
          <br />
          <button> Go To Project Page</button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <br />
      <center>
        <h1>OUR PRODUCT</h1>
      </center>
      <br />
      <div className="cardArea">{productData}</div>
    </div>
  );
}
export default Pcard;
