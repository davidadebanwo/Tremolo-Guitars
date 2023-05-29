import React from 'react';
import './about.css';
import transparentGuitar from '../../assets/transparent guitar.png'
import guitarist from '../../assets/guitarist rocking.jpg'
import guitarist1 from '../../assets/guitarist1.jpg'
import guitarist2 from '../../assets/guitarist2.jpg'
import guitarist3 from '../../assets/guitarist3.jpg'

const About = () => {
  return (
    <div id='about' className='about__container'>
      <div className='about__container-content'>
        <div className="about__container-content-title">
          <h1>Why tremolo guitars?</h1>
          <img src={transparentGuitar} alt="Guitar" />
        </div>
      <div className="about__container-content-no2">
        <div className="about__container-content-paragraph">
          <p>Tremolo guitars was founded by Harry Wilson in 1958. We were immediately given recognition has the best guitar makers. Due to the high quality of our instruments many famous musicians are known to use our guitars for their music. Here at Tremolo we don't obsese over making profit, our slogan is quality over quantity and pride over profit. This is beacause we believe that <span>Music is life</span></p>
        </div>
        <div className="about__container-content-guitarist">
          <img className='guitarist' src={guitarist} alt="" />
          <img className='guitarist1'  src={guitarist1} alt='guitarist'/>
          <img className='guitarist2'  src={guitarist2} alt='guitarist'/>
          <img className='guitarist3'  src={guitarist3} alt='guitarist'/>
        </div>
      </div>
        
      </div>
    </div>
  )
}

export default About