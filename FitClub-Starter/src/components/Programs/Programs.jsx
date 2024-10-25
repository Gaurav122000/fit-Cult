import React from "react";
import './Programs.css'
import rightArrow from "../../assets/rightArrow.png"
import { programsData } from "../../data/programsData";


const Programs = () => {
    return (
        <>
            <div className="program" id="programs">
                <div className="col-1">
                    <span className="stroke-text">explore our</span>
                    <span>programs</span>
                    <span className="stroke-text">to shape you</span>
                </div>
                <div className="programs-categories">
                    {programsData.map((program) => (
                        <div className="program-card">
                            {program.image}
                            <span>{program.heading}</span>
                            <span>{program.details}</span>
                            <div className="card-end">
                                <span>Join Now</span>
                                <img src={rightArrow} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default Programs;