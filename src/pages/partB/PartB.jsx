import React, { useRef } from 'react'
import './PartB.scss'
import blue from './img/blue.png'
import comp from './img/comp.png'
import docs from './img/docs.png'
import gallery from './img/gallery.png'
import red from './img/red.png'
import yellow from './img/yellow.png'

import ava1 from './img/ava1.png'
import ava2 from './img/ava2.png'
import ava3 from './img/ava3.png'
import ava4 from './img/ava4.png'

import card1 from './img/card1.png'
import card2 from './img/card2.png'
import card3 from './img/card3.png'

function PartB() {
  const r1 = useRef()
  const r2 = useRef()
  const r3 = useRef()

  const value = useRef()
  const value2 = useRef()
  const value3 = useRef()
  function click(){
    value.current.style.color = '#02897A'
    r1.current.style.background = '#02897A'
    r2.current.style.background = '#22343D'
    r3.current.style.background = '#22343D'
    value2.current.style.color = '#22343D'
    value3.current.style.color = '#22343D'
  }
  function click1(){
    value2.current.style.color = '#02897A'
    r2.current.style.background = '#02897A'
    r1.current.style.background = '#22343D'
    r3.current.style.background = '#22343D'
    value.current.style.color = '#22343D'
    value3.current.style.color = '#22343D'
  }
  function click2(){
    value3.current.style.color = '#02897A'
    r3.current.style.background = '#02897A'
    r2.current.style.background = '#22343D'
    r1.current.style.background = '#22343D'
    value.current.style.color = '#22343D'
    value2.current.style.color = '#22343D'
  }
  return (
    <div className='partB-wrapper'>
      <div className="partB__head">
        <div className="partB__head-first">
          <div className="partB__head-first-txt">
            <h2>
              Effortless Validation for
            </h2>
            <h1>
              Management
            </h1>
            <h2 className='margin'>
              Accessory makers
            </h2>
            <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
            <h2 className='margin2'>
              Alterationists
            </h2>
            <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
          </div>
          <div className="partB__head-first-img">
            <img src={docs} alt="docx" />
          </div>
        </div>
        <div className="partB__head-second">
          <div className="partB__head-second-img">
            <img src={comp} alt="comp" />
          </div>
          <div className="partB__head-second-txt">
            <h2>
              Easier decision making for
            </h2>
            <h1>
              Customer Support
            </h1>
            <p>
              The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person.
            </p>
            <div className="display">
              <img src={yellow} alt="yellow" /><p>Never worry about overpaying for your energy again.</p>
            </div>
            <div className="display">
              <img src={red} alt="red" /><p>We will only switch you to energy companies that we trust and will treat you right.</p>
            </div>
            <div className="display">
              <img src={blue} alt="blue" /><p>We track the markets daily and know where the savings are.</p>
            </div>  
          </div>
        </div>
        <div className="partB__head-third">
          <div className="partB__head-third-txt">
            <h2>
              Optimisation for
            </h2>
            <h1>
              Collaborative
            </h1>
            <p>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. </p>
            <h2 className='margin'>
              Accessory makers
            </h2>
            <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
            <h2>
              Alterationists
            </h2>
            <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
          </div>
          <div className="partB__head-third-img">
            <img src={gallery} alt="gallery" />
          </div>
        </div>
      </div>

      {/* center */}

      <div className="partB__center">
        <div className="partB__center-txt">
          <h1>
            Quick & Easy Process
          </h1>
        </div>
        <div className="partB__center-txt">
          <p>
              Do you require some help for your project: Conception workshop,prototyping, marketing strategy, landing page, Ux/UI?
          </p>
        </div>
        <div className="partB__center-first">
          <div className="partB__center-first-left">
            <img src={ava1} alt="ava1" />
            <p>I can take care of your pitch</p>
          </div>
          <div className="partB__center-first-right">
            <p>I can prototype your app</p>
            <img src={ava2} alt="ava2" />
          </div>
        </div>
        <div className="partB__center-second">
          <div className="partB__center-second-left">
            <p>I can design you website</p>
            <img src={ava3} alt="ava4" />
          </div>
          <div className="partB__center-second-right">
            <img src={ava4} alt="ava4" />
            <p>I can help marketing strategy</p>
          </div>
        </div>
        <div className="button">
          <button>Contact our expert</button>
        </div>
      </div>

      {/* footer */}

      <div className="partB__foot">
        <div className="partB__foot-txt">
          <h1>Contents Strategies</h1>
          <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>
        </div>
        <div className="partB__foot-cards">
          <div className="partB__foot-cards-first">
            <img className='img' src={card1} alt="card1" />
            <div className="partB__foot-cards-txt">
                <p>By <span>Wahid Ari</span> | 03 March 2019</p>
                <h1 ref={value}>Increasing Prosperity With Positive Thinking</h1>
            </div>
          </div>
          <div className="partB__foot-cards-second">
            <img src={card2} alt="card2" />
            <div className="partB__foot-cards-txt">
                <p>By <span>Wahid Ari</span> | 03 March 2019</p>
                <h1 ref={value2}>Motivation Is The First Step To Success</h1>
            </div>
          </div>
          <div className="partB__foot-cards-third">
            <img src={card3} alt="card3" />
            <div className="partB__foot-cards-txt">
                <p>By <span>Wahid Ari</span> | 03 March 2019</p> 
                <h1 ref={value3}>Success Steps For Your Personal Or Business</h1>
            </div>
          </div>
        </div>
        <div className="rounds">
          <div ref={r1} className="first__round mrg" onClick={click}>

          </div>
          <div ref={r2} className="second__round mrg" onClick={click1}>

          </div>
          <div ref={r3} className="third__round mrg" onClick={click2}>

          </div>
        </div>
      </div>


    </div>
  )
}

export default PartB