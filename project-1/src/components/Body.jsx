import React from 'react';

const Body = () => {
  return (
    <main className='body container'>
      <div className="body-content">
        <h1>YOUR FEET DESRVE THE BEST</h1>

        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

        <div className="btn">
            <button>Shop Now</button>
            <button className='secondary-btn'>Category</button>
        </div>

        <div className="shopping-links">
            <p>Also available on</p>
            <div className="brand-icons">
                <img src="/images/amazon.png" alt="amazon-logo" />
                <img src="/images/flipkart.png" alt="flipkart-logo" />
            </div>
        </div>
      </div>
      <div className="body-image">
        <img src="/images/shoe_image.png" alt="shoe-image" />
      </div>
    </main>
  )
}

export default Body
