import React from "react";

const Main = () => {
  return (
    <>
      <main>
        <div className="content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="main-btn">
            <button>Shop Now</button>
            <button className="white">Category</button>
          </div>
          <p>Also Available On</p>
          <div className="footer-logo">
            <img src="/images/flipkart.png" alt="Flipkart Logo" />
            <img src="/images/amazon.png" alt="Amazon Logo" />
          </div>
        </div>
        <div className="img">
            <img src="/images/shoe_image.png" alt="Shoe" />
        </div>
      </main>
    </>
  );
};

export default Main;
