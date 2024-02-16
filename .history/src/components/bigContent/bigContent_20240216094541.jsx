import React,{useState,useEffect} from "react";

// import TextFormat from "../textFormat";
import './bigContent.css'
import { motion } from "framer-motion";
import { useRef } from "react";



const BigContent = ({reverse,id,image,
customText}) => {

    const [isAnimated, setIsAnimated] = useState(false)

    const ref = useRef()

    useEffect(() => {
        const handleScroll = () => {
            const contentElement = ref.current;
            const elementTop = contentElement.getBoundingClientRect().top;
         
            const windowHeight = window.innerHeight;
    
            const offset = 350;
    
            if (elementTop < windowHeight - offset) {
                setIsAnimated(true);
             
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [id]);


    const animations = {
        initial:{
            x: reverse ? -50 : 50,
            opacity:0
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                opacity: '0.3s ease-in'
            }
        }

    }


    return (
        <div className="big-content-container"
        ref={ref}
        id={id}>
                <div className={`content-text-container ${reverse ? 'reverse-container' : ''}`}>
                    <div 
                    className={!reverse ? 'text-container' : 'reverse-text'}>
                        {customText ? (
                            <>
                             <motion.div
        initial={{ opacity: 0 }}
        animate={isAnimated ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
    >
        {customText}
    </motion.div>
                            </>
                        ):(
                            <>
                        
                            <h2 className="title-text">
                            2021 Campaign Worker
                         </h2>
                         <p className="description-text">
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quas minima sapiente unde ipsam inventore enim ducimus.
                         </p>
                         <ul>
                             <li>4 courses in Java</li>
                             <li>Studies</li>
                             <li>Info</li>
                             <li>Data</li>
                             <li>Infographics</li>
                         </ul>
                         </>
                        )}
                      
 

                    </div>
                    <div className={!reverse ? 'image-container' : 'image-container reverse-image' }>
                            <motion.img src={image}
                            initial={animations.initial}
                            animate={isAnimated ? animations.animate : animations.initial}
                            />
                    </div>

                </div>
        </div>
    )
}

export default BigContent