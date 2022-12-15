import './PartA.scss'
import logo from './img/logo.png'
import product from './img/product.png'
import dark from './img/dark.png'
import right from './img/right.png'
import three from './img/three.png'
import cursor from './img/cursor.png'
import water from './img/water.png'
import like from './img/like.png'
import time from './img/time.png'
import menu from './img/menu.png'
import { useState } from 'react'

function PartA() {
  const [use, setUse] = useState()

  function btn(){

  }
  return (
    <div className='partA__wrapper'>
      <div className="partA__head" >
        <div className="partA__head-left">
          <a href="/"><img src={logo} alt="Logo" /></a>
          <a href="/"><img src={product} alt="Product" /></a>
        </div>
        <div className="partA__head-right">
          <a href="/">Product</a>
          <a href="/">Customers</a>
          <a href="/">Pricing</a>
          <a href="/">Resources</a>
          <button className='button1'>Sign In</button>
          <button className='button2'>Sign Up</button>
          <a href="/#"><img src={dark} alt="Mode" className='mode'/></a>
        </div>
        <div className="hamburger">
          <a href="/" onClick={btn}><img src={menu} alt="hamburgerBtn" className='menuBtn'/></a>
        </div>
      </div>
      {/* center */}
      <div className="partA__center">
        <div className="partA__center-left">
          <h1>
            Work at the speed of thought
          </h1>
          <p>
            Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.
          </p>
          <button className='button1'>Get Started</button>
          <button className='button2'><img src={three} alt="W" /> Watch the video</button>
        </div>
        <div className="partA__center-right">
          <img src={right} alt="" />
        </div>
      </div>
      
      {/* footer */}

      <div className="partA__footer">
        <div className="partA__footer-h1">
          <h1>
            Product  was Built Specifically for You
          </h1>
        </div>
        <div className="partA__foot">
          <div className="partA__foot-first">
            <img src={cursor} alt="cursor" />
            <h1>
              First click tests
            </h1>
            <p>
              While most people enjoy casino gambling,
            </p>
          </div>
          <div className="partA__foot-second">
            <img src={water} alt="water" />
            <h1>
              Design surveys
            </h1>
            <p>
              Sports betting, lottery and bingo playing for the fun
            </p>
          </div>
          <div className="partA__foot-third">
            <img src={like} alt="like" />
              <h1>
                Preference tests
              </h1>
              <p>
                The Myspace page defines the individual.
              </p>
          </div>
          <div className="partA__foot-fourth">
            <img src={time} alt="time" />
              <h1>
                Five second tests
              </h1>
              <p>
                Personal choices and the overall personality of the person. 
              </p>
          </div>
        </div>
        <div className="partA__footer-button">
          <button>SIGN UP NOW</button>
        </div>
      </div>
    </div>
  )
}

export default PartA