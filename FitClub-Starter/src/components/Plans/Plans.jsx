import React from 'react'
import './Plans.css'
import { plansData } from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"
import rightArrow from "../../assets/rightArrow.png"

const Plans = () => {
    return (
        <>
            <div className="plans" id='plans'>
                <div className="blur plans-blur-1">
                </div>
                <div className="blur plans-blur-2">
                </div>
                <div className="plans-col-1">
                    <span className='stroke-text'>ready to start </span>
                    <span>your journey </span>
                    <span className='stroke-text'>now withus</span>
                </div>

                {/* plans card */}

                <div className="plans-card">
                    {plansData.map((plan, i) => (
                        <div className="plan" key={i}>
                            {plan.icon}
                            <span>{plan.name}</span>
                            <span>Rs.{plan.price}</span>
                            <div className="features">
                                {plan.features.map((feature, i) => (
                                    <div className="feature">
                                        <img src={whiteTick} alt="" />
                                        <span key={i}>{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <span>
                                    See more Benfits
                                </span>
                                <img src={rightArrow} alt="" />
                            </div>
                            <button className='btn'> Join Now </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Plans