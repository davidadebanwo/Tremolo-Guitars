import React from 'react'
import './guitar-types.css';
import acoustic from'../../assets/acoustic guitar.png'
import electric from'../../assets/electric guitar.png'
import bass from'../../assets/bass guitar.png'
import amp from '../../assets/amp.png'
import ampsandaccessories from '../../assets/guitar amps and accessories.png'


const GuitarTypes = () => {
  return (
    <div id='products' className='guitarTypes__container-div'>
      <h1>What we offer</h1>
      <div className='guitarTypes__container'>
          <a href='#acoustic'><div className="guitarTypes__container-acousticGuitar">
            <h2>Acoustic Guitar</h2>
            <img src={acoustic} alt="" />
          </div></a>
          <a href='#electric'><div className="guitarTypes__container-electricGuitar">
            <h2>Electric Guitar</h2>
            <img src={electric} alt="" />
          </div></a>
          <a href='#bass'><div className="guitarTypes__container-bassGuitar">
            <h2>Bass</h2>
            <img src={bass} alt="" />
          </div></a>
          <a href='#amp'><div className="guitarTypes__container-amp">
            <h2>Guitar amp</h2>
            <img src={amp} alt="" />
          </div></a>
          <a href='#accessories'><div className="guitarTypes__container-accessories">
            <h2>Guitar accesaries</h2>
            <img src={ampsandaccessories} alt="" />
          </div></a>
      </div>
    </div>
  )
}

export default GuitarTypes