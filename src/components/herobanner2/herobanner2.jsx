import React from "react";
import fullBody from '../../media/smiley-tom-half-min.webp'
import './herobanner2.css'
const Herobanner2 = () => {

    

    return (
        <div className="herobanner2-container">

            <div className="hero2-content-box">
                <div className="hero2-text-box">
                 <h2>Hello, I'm Thomas.</h2>
                 <h1 >A Front end Developer</h1>
                 <p>
                 I take a disciplined and focused approach to creating unique,
                 interactive and functional applications.
                 </p>
                 {/* <button>
                Learn More
            </button> */}
                </div>
                <img className="hero2-image"
                src={fullBody}/>
            </div>
   
            
        </div>
    )
}

export default Herobanner2