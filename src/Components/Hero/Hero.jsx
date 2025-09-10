import React from 'react'
import './Hero.css'
import HeroImage from '../../assets/Hero.png'

const Hero = () => {
  return (
    <section>
      <div className="hero-section flex">
        <div className="hero-content">
            <span className="sub-text">Hello, there!</span>
            <h1>
                <span className='green-text'>I'm Rahma,</span>
                Front-End Developer & UX/UI Designer
            </h1>
            <p className='para'>
                Passionate about developing high-performance web and mobile applications, proficient in modern technologies such as React.js and Vue.js for front-end, Flutter for mobile development.
            </p>
            <div>
                <a href="#" className="btn">View My works</a>
                <a href="#" className="btn border-btn">View My works</a>
            </div>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="Hero" />
        </div>
      </div>
    </section>
  )
}

export default Hero