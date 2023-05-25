import React from "react";
import img4 from "../Image/Mask Group 72.png";
import img6 from "../Image/Mask Group 87.png";

import "../styles/RelatedProductList.css";

export default function RelatedProductList() {
  return (
    <div className="Product-div">
      <div className="paragraph">
        <h1>Others You Might Like</h1>
        <h3>We have topnotch products according to your taste.</h3>
        <p>So it will help you according to your desire.</p>
      </div>

      <div className="Product-image">
        <div className="image4">
          <img src={img4} alt="Image4" />
        </div>
        <div className="image6">
          <img src={img6} alt="Image6" />
        </div>
        <div className="image6">
          <img src={img6} alt="Image6" />
        </div>
        <div className="image6">
          <img src={img4} alt="Image4" />
        </div>
      </div>
      <div className="previous-next">
        <p>PREVIOUS -------</p>
        <p>-------- NEXT</p>
      </div>
      <div className="btn">
        <h1>Be inspired, sign up now</h1>
        <p>
          Never miss the latest offers from Evig, tips and demos, <br />
          news and invites to local events.
        </p>
        <button>SUBSCRIBE NOW</button>
      </div>
    </div>
  );
}


