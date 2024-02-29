import React,{useState, useEffect} from "react";
import './hyrdolist.css'

const HydroList = ({text,intro,absolute}) => {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const [isHovered, setIsHovered] = useState(null)

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 865);

    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 865);
       
      };
  
      // Add event listener for window resize
      window.addEventListener("resize", handleResize);
  
      // Initial check when the component mounts
      handleResize();
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);



    const handleMouseEnter = (index) => {
        setIsHovered(index)
    }

    const handleMouseLeave = () => {
        setIsHovered(null)
    }

    const handleContentClick = (index) => {
       if(index === expandedIndex){
        setExpandedIndex(null)
       }
       else{
        setExpandedIndex(index)
       }   
      };


      const hydroStyle = (index) => {
        const hovered = isHovered === index

        return (
            {
                backgroundColor: hovered ? 'rgba(48, 115, 160)' : null,
               
                transition: 'all 0.3s ease-in',
                borderBottom: hovered ? null : '2px solid rgb(22, 8, 103)',
                border: hovered? '2px solid rgb(22, 8, 103)' : null,

            }
        )
      }



    const contentStyle = (index) => {

      
      const isExpanded =   expandedIndex === index;
      
        return {
          height: isExpanded ? '230px' : '0',
          transition: isExpanded
            ? 'height 0.5s ease-in, opacity 0.5s ease-in'
            : 'height 0.3s ease-in, opacity 0.5s ease-in 0.3s',
          overflow: isExpanded ? 'scroll' : 'hidden',
        //   opacity: isExpanded ? '1' : '0',
        
        };
      };
      
      console.log(text)
      

    return (
        <>
        <div className="hydro-wrapper"
             style={{
                    
                      
              marginTop:absolute ? '5rem' : '0'
            }}
>

<h2 style={{
    marginLeft:'1rem',
    color:'white'
}}>{intro.title}</h2>

              <p className="docs-intro"
              style={{
                fontSize: absolute? '1.4rem' : 'auto'
              }}>
            {intro.description}

        </p>
   
        <div className="hydrolist-container">

            <div className="hydro-list"
               >
               {text.map((text,index) => (
                <div className="hydro-element"
                key={index}
                onClick={()=>handleContentClick(index)}
                style={hydroStyle(index)}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave()}
                >

<div className="name-logo-box">
              <h2>{text.name}</h2>
              <div className="plus-minus">
              
              <div
                className={`hydro-line ${expandedIndex === (index) ? "clicked" : ""}`}
              />
                 <div
                className={`hydro-line ${expandedIndex === (index)  ? "clicked" : ""}`}
             />
              
              </div>
            </div>

            

     
                     
<section className="hydro-expanded"
 style={contentStyle(index)}>


                  <p
                  className=""
                 
                >
                    {text.description}
                  </p>
                 
                  </section>
                       

                             
                  
                    </div>

               ))}



            </div>
        </div>
        </div>
        </>
    )
}

export default HydroList