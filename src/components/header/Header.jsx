import React from 'react'
import './header.css'
import '../../assets/guitar.jpg'

const Header = () => {
  return (
    <div className='section__padding header__container'>
      <div className="header__container-content">
        <div className='header__container-welcome'>
        <h2>Welcome to <span>TREMOLO</span> guitar store</h2>
        <h4>Home of the highest quality guitars in town</h4>
        </div>

        <div className='header__container-cta'>
        <div className='header__container-cta-rock'>
            <h2>Come on in! Let's Rock together.</h2><h3> You can choose from a selection of high quality guitars. </h3>
        </div>
        <div className='header__container-cta-button'>
           <h4><a href='#about'>Learn More</a></h4> 
        </div>
        </div>
        </div>
    </div>
  )
}

export default Header