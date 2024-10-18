import React from 'react'
import "./Reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"

const Reasons = () => {
    return (
        <>
            <div className="reasons" id="reasons">
                <div className="left-r">
                    <img src={image1} alt="image1" />
                    <img src={image2} alt="image2" />
                    <img src={image3} alt="image3" />
                    <img src={image4} alt="image4" />
                </div>
                <div className="right-r">
                    <span>Some Reasons</span>
                    <div className='why-us'>
                        <span className='stroke-text'>Why </span>
                        <span>Choose Us?</span>
                    </div>
                    <div className="points" id="points">
                        <div>
                            <img src={tick} alt=""></img>
                            <span>over 140+ expert coaches</span>
                        </div>
                        <div>
                            <img src={tick} alt="" />
                            <span>train smarter and faster than before</span>
                        </div>
                        <div>
                            <img src={tick} alt="" />
                            <span>1 free program for new members</span>
                        </div>
                        <div>
                            <img src={tick} alt="" />
                            <span>reliable partners</span>
                        </div>
                    </div>
                    <div className="partners">
                        <span>our partners</span>
                        <div>
                            <img src={nb} alt="New-Balance" />
                            <img src={adidas} alt="Adidas" />
                            <img src={nike} alt="Nike" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reasons