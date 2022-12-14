import React from 'react'
import './PartC.scss'
import frame from './img/frame.png'

function PartC() {
  return (
    <div className='partC-wrapper'>
      <div className="partC__head">
        <div className="partC__head-txt">
          <h1>
            Price Table
          </h1>
        </div>
        <div className="partC__head-txt">
          <p>We offer competitive price</p>
        </div>
        <div className="partC__head-cards">
          <div className="partC__head-cards-first card">
            <h1>
              Free
            </h1>
            <p>Brief price description</p>
            <div className="price">
              <h1>0</h1>
              <div className="price2">
                <span>$</span>
                <p>Per / month</p>
              </div>
            </div>
            <h3>Only 2 Op erators</h3>
            <h3>Notifications</h3>
            <h3>Landing Pages</h3>
            <button>Order Now</button>
          </div>
          <div className="partC__head-cards-second card">
            <h1>
              Standart
            </h1>
            <p>Brief price description</p>
            <div className="price">
              <h1>5</h1>
              <div className="price2">
                <span>$</span>
                <p>Per / month</p>
              </div>
            </div> 
            <h3>5+ Operators</h3>
            <h3>Notifications</h3>
            <h3>Landing Pages</h3>
            <button>Order Now</button>
          </div>
          <div className="partC__head-cards-third card">
            <h1>
              Premium
            </h1>
            <p>Brief price description</p>
            <div className="price">
              <h1>10</h1>
              <div className="price2">
                <span>$</span>
                <p>Per / month</p>
              </div>
            </div> 
            <h3>10+ Operators</h3>
            <h3>Notifications</h3>
            <h3>Landing Pages</h3>
            <button>Order Now</button>
          </div>
        </div>
      </div>
      <div className="partC__center">
        <div className="partC__center-bg">
          <div className="partC__center-left">
            <h1>
              Join 100 Compannies who boost their business with Product
            </h1>
            <button className='button'>Get This</button>
          </div>
          <div className="partC__center-right">
            <img src={frame} alt="frame" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartC