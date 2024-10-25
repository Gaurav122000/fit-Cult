import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import Heart from "../../assets/heart.png"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import calories from "../../assets/calories.png"
import { motion } from "framer-motion"


const Hero = () => {

    const transition = { type: 'spring', duration: 3 }

    const mobile = window.innerWidth <= 768 ? true : false ;


    return (
        <>
            <div className="hero" id='home'>
                <div className="blur hero-blur"></div>
                <div className="left-h">
                    <Header />

                    {/* the best add */}

                    <div className="the-best-ad">
                        <motion.div
                            initial={{ left:mobile ? "138px":"205px" }}
                            whileInView={{ left: "8px" }}
                            transition={{ ...transition, type: "tween" }}
                        >
                        </motion.div>

                        <span>The Best Fitness Club in Town</span>
                    </div>

                    {/* hero heading */}

                    <div className="hero-text">
                        <div>
                            <span className='stroke-text'>Shape </span>
                            <span>Your</span>
                        </div>
                        <div>
                            <span>Ideal Body</span>
                        </div>
                        <div>
                            <span>
                                In here we will help you to shape and build your ideal body and live your life to fullest
                            </span>
                        </div>
                    </div>

                    {/* figures */}

                    <div className="figures">
                        <div>
                            <span>+100</span>
                            <span>expert coaches</span>
                        </div>

                        <div>
                            <span>+999</span>
                            <span>members</span>
                        </div>
                        <div>
                            <span>+99</span>
                            <span>fitness program</span>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <button className='btn'>Get Started</button>
                        <button className="btn">Learn More</button>
                    </div>

                </div>
                <div className="right-h">
                    <button className='btn'>Join Now</button>
                    <motion.div
                        initial={{ right: "1rem" }}
                        transition={transition}
                        whileInView={{ right: "4rem" }}
                        className="heart-rate">
                        <img src={Heart} alt="" />
                        <span>Heart Rate</span>
                        <span>116 ppm</span>
                    </motion.div>
                    <img src={hero_image} alt="" className='hero-image' />
                    <motion.img
                    transition={transition}
                    initial={{right:"11rem"}}
                    whileInView={{right:"20rem"}}
                    src={hero_image_back}
                    alt="" className='hero-image-back' />

                    {/* clories */}

                    <motion.div
                        initial={{ right: "37rem" }}
                        transition={transition}
                        whileInView={{right:"27.5rem"}}
                        className="calories">
                        <img src={calories} alt="" />
                        <div>
                            <span>Calories Burned</span>
                            <span>220 kcal</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Hero