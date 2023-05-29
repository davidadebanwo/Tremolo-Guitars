import React from 'react'
import './pricing.css'
import acousticguitar1 from '../../assets/acousticguitar1.png'
import acousticguitar2 from '../../assets/acousticguitar2.png'
import acousticguitar3 from '../../assets/acousticguitar3.png'
import acousticguitar4 from '../../assets/acousticguitar4.png'
import acousticguitar5 from '../../assets/acousticguitar5.png'
import acousticguitar6 from '../../assets/acousticguitar6.png'
import acousticguitar7 from '../../assets/acousticguitar7.png'
import acousticguitar8 from '../../assets/acousticguitar8.png'
import acousticguitar9 from '../../assets/acousticguitar9.png'
// import acousticguitar10 from '../../assets/acousticguitar10.png'

import electricguitar1 from '../../assets/electricguitar1.png'
import electricguitar2 from '../../assets/electricguitar2.png'
import electricguitar3 from '../../assets/electricguitar3.png'
import electricguitar4 from '../../assets/electricguitar4.png'
import electricguitar5 from '../../assets/electricguitar5.png'
import electricguitar6 from '../../assets/electricguitar6.png'
import electricguitar7 from '../../assets/electricguitar7.png'
import electricguitar8 from '../../assets/electricguitar8.png'
import electricguitar9 from '../../assets/electricguitar9.png'
import electricguitar10 from '../../assets/electricguitar10.png'

import bassguitar1 from '../../assets/bassguitar1.png'
import bassguitar2 from '../../assets/bassguitar2.png'
import bassguitar3 from '../../assets/bassguitar3.png'
import bassguitar4 from '../../assets/bassguitar4.png'
import bassguitar5 from '../../assets/bassguitar5.png'
import bassguitar6 from '../../assets/bassguitar6.png'
import bassguitar7 from '../../assets/bassguitar7.png'
import bassguitar8 from '../../assets/bassguitar8.png'
import bassguitar9 from '../../assets/bassguitar9.png'


import amp1 from '../../assets/amp1.png'
import amp2 from '../../assets/amp2.png'
import amp3 from '../../assets/amp3.jpg'
import amp4 from '../../assets/amp4.jpg'
import amp5 from '../../assets/amp5.png'
import amp6 from '../../assets/amp6.jpg'
import amp7 from '../../assets/amp7.jpg'


import accessories1 from '../../assets/accessories1.png'
import accessories2 from '../../assets/accessories2.png'
import accessories3 from '../../assets/accessories3.png'
import accessories4 from '../../assets/accessories4.png'
import accessories5 from '../../assets/accessories5.png'
import accessories6 from '../../assets/accessories6.png'
import accessories7 from '../../assets/accessories7.png'
// import accessories8 from '../../assets/accessories8.png'


const Pricing = () => {
    const data=[
        {
            guitarimg:acousticguitar1,
            guitarname:'American Acoustasonic Stratocaster',
            aboutguitar:'',
            price:'$200'
        },
        {
            guitarimg:acousticguitar2,
            guitarname:'American Acoustasonic® Telecaster®',
            aboutguitar:'',
            price:'$170'
        },
        {
            guitarimg:acousticguitar3,
            guitarname:'Redondo Player',
            aboutguitar:'',
            price:'$185'
        },
        {
            guitarimg:acousticguitar4,
            guitarname:'Malibu Player',
            aboutguitar:'',
            price:'$150'
        },
        {
            guitarimg:acousticguitar5,
            guitarname:'Newporter Player',
            aboutguitar:'',
            price:'$210'
        },
        {
            guitarimg:acousticguitar6,
            guitarname:'Redondo Classic',
            aboutguitar:'',
            price:'$300'
        },
        {
            guitarimg:acousticguitar7,
            guitarname:'FA-125CE Dreadnought',
            aboutguitar:'',
            price:'$400'
        },
        {
            guitarimg:acousticguitar8,
            guitarname:'Malibu Special Mahogany',
            aboutguitar:'',
            price:'$325'
        },
        {
            guitarimg:acousticguitar9,
            guitarname:'CD-60 All Mahogany with Case',
            aboutguitar:'',
            price:'$260'
        }
    ]

    const elecdata=[
        {
            guitarimg:electricguitar1,
            guitarname:'American Professional II Stratocaster®',
            aboutguitar:'',
            price:'$200'
        },
        {
            guitarimg:electricguitar2,
            guitarname:'American Professional II Stratocaster® HSS',
            aboutguitar:'',
            price:'$170'
        },
        {
            guitarimg:electricguitar3,
            guitarname:'American Professional II Stratocaster® Left-Hand',
            aboutguitar:'',
            price:'$185'
        },
        {
            guitarimg:electricguitar4,
            guitarname:'American Professional II Telecaster®',
            aboutguitar:'',
            price:'$150'
        },
        {
            guitarimg:electricguitar5,
            guitarname:'American Professional II Telecaster® Deluxe',
            aboutguitar:'',
            price:'$210'
        },
        {
            guitarimg:electricguitar6,
            guitarname:'American Professional II Telecaster® Left-Hand',
            aboutguitar:'',
            price:'$300'
        },
        {
            guitarimg:electricguitar7,
            guitarname:'American Professional II Jazzmaster® Left-Hand',
            aboutguitar:'',
            price:'$400'
        },
        {
            guitarimg:electricguitar8,
            guitarname:'American Professional II Jazzmaster®',
            aboutguitar:'',
            price:'$325'
        },
        {
            guitarimg:electricguitar9,
            guitarname:'Brent Mason Telecaster®',
            aboutguitar:'',
            price:'$260'
        },
        {
            guitarimg:electricguitar10,
            guitarname:'American Ultra Stratocaster®',
            aboutguitar:'',
            price:'$260'
        }
    ]

    const bassdata=[
        {
            guitarimg:bassguitar1,
            guitarname:'American Professional II Precision Bass®',
            aboutguitar:'',
            price:'$230'
        },
        {
            guitarimg:bassguitar2,
            guitarname:'American Professional II Jazz Bass® V',
            aboutguitar:'',
            price:'$190'
        },
        {
            guitarimg:bassguitar3,
            guitarname:'American Professional II Jazz Bass® Left-Hand',
            aboutguitar:'',
            price:'$200'
        },
        {
            guitarimg:bassguitar4,
            guitarname:'American Professional II Jazz Bass® Fretless',
            aboutguitar:'',
            price:'$250'
        },
        {
            guitarimg:bassguitar5,
            guitarname:'American Ultra Precision Bass®',
            aboutguitar:'',
            price:'$310'
        },
        {
            guitarimg:bassguitar6,
            guitarname:'American Ultra Jazz Bass®',
            aboutguitar:'',
            price:'$270'
        },
        {
            guitarimg:bassguitar7,
            guitarname:'American Ultra Jazz Bass® V',
            aboutguitar:'',
            price:'$400'
        },
        {
            guitarimg:bassguitar8,
            guitarname:'American Performer Precision Bass®',
            aboutguitar:'',
            price:'$425'
        }
        // {
        //     guitarimg:bassguitar9,
        //     guitarname:'Brent Mason Telecaster®',
        //     aboutguitar:'',
        //     price:'$260'
        // }
    ]


    const ampdata=[
        {
            guitarimg:amp1,
            guitarname:'Hot Rod DeVille™ 212 IV',
            aboutguitar:'',
            price:'$200'
        },
        {
            guitarimg:amp2,
            guitarname:'Hot Rod Deluxe™ IV',
            aboutguitar:'',
            price:'$170'
        },
        {
            guitarimg:amp3,
            guitarname:'Pro Junior™ IV',
            aboutguitar:'',
            price:'$185'
        },
        {
            guitarimg:amp4,
            guitarname:'Blues Junior™ IV',
            aboutguitar:'',
            price:'$150'
        },
        {
            guitarimg:amp5,
            guitarname:'Tone Master® Princeton® Reverb',
            aboutguitar:'',
            price:'$210'
        },
        {
            guitarimg:amp6,
            guitarname:'Frontman® 20G',
            aboutguitar:'',
            price:'$300'
        },
        {
            guitarimg:amp7,
            guitarname:'Tone Master® Super Reverb®',
            aboutguitar:'',
            price:'$400'
        }
    ]


    const accessoriesdata=[
        {
            guitarimg:accessories1,
            guitarname:'George Harrison Rocky Instrument Cable',
            aboutguitar:'',
            price:'$20'
        },
        {
            guitarimg:accessories2,
            guitarname:'Paramount Acoustic Instrument Cables',
            aboutguitar:'',
            price:'$15'
        },
        {
            guitarimg:accessories3,
            guitarname:'Ombré Instrument Cables',
            aboutguitar:'',
            price:'$18'
        },
        {
            guitarimg:accessories4,
            guitarname:'Laurel Acoustic Capo',
            aboutguitar:'',
            price:'$8'
        },
        {
            guitarimg:accessories5,
            guitarname:'Fender® FT-004 Clip-On Chromatic Tuner',
            aboutguitar:'',
            price:'$10'
        },
        {
            guitarimg:accessories6,
            guitarname:'Material Medley Picks, 351 Shape - 6 Pack',
            aboutguitar:'',
            price:'$20'
        },
        {
            guitarimg:accessories7,
            guitarname:'Adjustable Guitar Stand',
            aboutguitar:'',
            price:'$25'
        }
        // {
        //     guitarimg:accessories8,
        //     guitarname:'Adjustable Guitar Stand',
        //     aboutguitar:'',
        //     price:'$25'
        // }
    ]


  return (
    <div className='pricing__container'>
        <div className="pricing__container-acoustic" id='acoustic'>
            <h1>Acoustic Guitars</h1>
            <div className="pricing__container-acoustic-content">
            {data.map(({guitarimg,guitarname,aboutguitar,price},index)=>{
                return(
                    
            <div className="pricing__container-acoustic-each">
                <div className="pricing__container-acoustic-each-image">
                    <img src={guitarimg} alt="" />
                </div>
                <div className="pricing__container-acoustic-each-info">
                    <h2>{guitarname}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, exercitationem.</p>
                    <h3>{price}</h3>
                </div>
            </div>
                )
            }
            )}
            </div>
            </div>

            <div className="pricing__container-acoustic" id='electric'>
            <h1>Electric Guitars</h1>
            <div className="pricing__container-acoustic-content">
            {elecdata.map(({guitarimg,guitarname,aboutguitar,price},index)=>{
                return(
                    
                    <div className="pricing__container-acoustic-each">
                <div className="pricing__container-acoustic-each-image">
                    <img src={guitarimg} alt="" />
                </div>
                <div className="pricing__container-acoustic-each-info">
                    <h2>{guitarname}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, exercitationem.</p>
                    <h3>{price}</h3>
                </div>
            </div>
                )
            }
            )
        }
            </div>
            </div>

            <div className="pricing__container-acoustic" id='bass'>
            <h1>Bass Guitars</h1>
            <div className="pricing__container-acoustic-content">
            {bassdata.map(({guitarimg,guitarname,aboutguitar,price},index)=>{
                return(
                    
                    <div className="pricing__container-acoustic-each">
                <div className="pricing__container-acoustic-each-image">
                    <img src={guitarimg} alt="" />
                </div>
                <div className="pricing__container-acoustic-each-info">
                    <h2>{guitarname}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, exercitationem.</p>
                    <h3>{price}</h3>
                </div>
            </div>
                )
            }
            )
        }
            </div>
            </div>


            <div className="pricing__container-acoustic" id='amp'>
            <h1>Amplifiers</h1>
            <div className="pricing__container-acoustic-content">
            {ampdata.map(({guitarimg,guitarname,aboutguitar,price},index)=>{
                return(
                    
                    <div className="pricing__container-acoustic-each">
                <div className="pricing__container-amp-each-image">
                    <img src={guitarimg} alt="" />
                </div>
                <div className="pricing__container-acoustic-each-info">
                    <h2>{guitarname}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, exercitationem.</p>
                    <h3>{price}</h3>
                </div>
            </div>
                )
            }
            )
        }
            </div>
            </div>


            <div className="pricing__container-acoustic" id='accessories'>
            <h1>Accessories</h1>
            <div className="pricing__container-acoustic-content">
            {accessoriesdata.map(({guitarimg,guitarname,aboutguitar,price},index)=>{
                return(
                    
                    <div className="pricing__container-acoustic-each">
                <div className="pricing__container-amp-each-image">
                    <img src={guitarimg} alt="" />
                </div>
                <div className="pricing__container-acoustic-each-info">
                    <h2>{guitarname}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, exercitationem.</p>
                    <h3>{price}</h3>
                </div>
            </div>
                )
            }
            )
        }
            </div>
            </div>

            

    </div>
  )
}

export default Pricing