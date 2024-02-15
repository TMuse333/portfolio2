import React, { useRef, useEffect, useState } from 'react';
import './fullScreenSlide.css';



const FullScreenSlide = ({ video, image, id,text }) => {
  const videoRef = useRef();
  const textRef = useRef();
  const elementRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false);

  const [topReached, setTopReached] = useState(false);
  const [textPosition, setTextPosition] = useState(40);


  const [bottomReached, setBottomReached] = useState(false)
  const [scrollPower, setScrollPower ] = useState(0)
  const [videoOpacity, setVideoOpacity] = useState(0.5)

  const [relativePosition, setRelativePosition] = useState('below'); // 'above', 'below', 'atTop', 'atBottom'

  const [textAtTop, setTextAtTop] = useState(false)

  const [isReturning, setIsReturning] = useState(false)

  const [isLocked,setIsLocked] = useState(false)

  const [videoScale, setVideoScale] = useState(1);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 700)

  const [isElementInView, setIsElementInView] = useState(false)


  useEffect(() => {
    const observerCallback = (entries) => {
      const [entry] = entries;
      setIsElementInView(entry.isIntersecting);
      if (entry.isIntersecting) {
        // console.log('video is In view!',id)
        setIsElementInView(true); 
        // Set isElementInView to true when the element is in view
        // Start observing wheel events when the element is in view
      
      } else {
        setIsElementInView(false);
      
        // Stop observing wheel events when the element is out of view
       
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.5,
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      observer.disconnect();
    };
  }, [/* add dependencies as needed */]);



  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      // Check if the screen width is 700px or wider
      if (screenWidth < 700) {
        // Your action or logic when the screen width is 700px or wider
        setIsDesktop(false)
      }

   
     
    };

    // Attach the event listener for resize
    window.addEventListener('resize', handleResize);

    // Initial check when the component mounts
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsDesktop]); 



  useEffect(() => {

    
    const handleWheel = (event) => {



      if(isDesktop && isElementInView){

      setIsLocked(document.body.style.overflow === 'hidden');
      const contentElement = videoRef.current;
      const elementRect = contentElement.getBoundingClientRect();
      const elementTop = elementRect.top;
      const twentyPercentThreshold = elementRect.height * 0.2;
      const isTwentyPercentInView = elementTop < twentyPercentThreshold;
     

    

    
  
      const textElement = textRef.current;
      const textRect = textElement.getBoundingClientRect();
  
      const windowHeight = window.innerHeight;


      const textHeightLimit = 95

      // const elementAtBottom = Math.abs(elementBottom - windowHeight) < 1;

  
      // Check if 40 percent of the top of the element is in view
      const threshold = elementRect.height * 0.4;
      const is40PercentInView = elementTop < threshold;
  
      const scrollDirection = event.deltaY > 0 ? 'down' : 'up';
      const scrollMagnitude = Math.abs(event.deltaY);

      const elementBottom = elementRect.bottom;

    //   if (isTwentyPercentInView && scrollDirection === 'up') {
    //     // Reset all states to their original positions
    //     setTextPosition(40);
    //     setVideoOpacity(0.5);
    //     setTextAtTop(false);
    //     setIsReturning(false);
    //     setIsLocked(false);
    //     console.log('reset!!')
    //     // Add more reset statements as needed
  
    //     // Reset overflow to auto
    //     document.body.style.overflow = 'auto';
    //   }




      // console.log('bottom',elementTop,elementBottom)
  
      // Check if at the top and scrolling up, set scroll power to 0
      if (textAtTop && scrollDirection === 'up') {
        setScrollPower(0);
        document.body.style.overflow = 'auto'; // Set overflow to auto when at the top and scrolling up
      } else {
        // Only apply scroll power if 40 percent is in view
        setScrollPower(
            // is40PercentInView ?
             (scrollDirection === 'up' ? -scrollMagnitude/20 : scrollMagnitude/20) 
            //  : 0
             );
      }
  
      setTextPosition((prevTextPosition) => {
        // Calculate the new text position without clamping
        let newTextPosition = prevTextPosition + scrollPower ;
  
        // Check if the new text position is within the valid range
        if (newTextPosition >= 40 && newTextPosition <= textHeightLimit) {

          if (scrollDirection === 'down') {
          
            if (newTextPosition >= 70) {
              const opacityChange = 0.005 * (newTextPosition - 70); // Adjust the rate of opacity change
              setVideoOpacity((prevOpacity) => Math.max(0, prevOpacity - opacityChange));
            }
          } else {
          
            const opacityChange = 0.005 * (90 - newTextPosition); // Adjust the rate of opacity change
            setVideoOpacity((prevOpacity) => Math.min(0.5, prevOpacity + opacityChange));
          }


          // If within range, update the text position
          return newTextPosition;
        } else {
          // If outside the range, clamp the value
          return Math.min(Math.max(newTextPosition, 40), textHeightLimit);
        }
      });
  
      // Check if the top of the element reaches the top of the viewport
      if (elementTop -3 <= 0) {
        setTopReached(true);
        if (textPosition < 95) {
          document.body.style.overflow = 'hidden';
        }
      }
  
      // Check if the text position hits 90 and reset overflow to auto
      if (textPosition >= textHeightLimit) {
        document.body.style.overflow = 'auto';
        setTextAtTop(true)
      }

      if(elementBottom < windowHeight && scrollDirection === 'up'){
        setIsReturning(true)
        console.log('return initiated')
      }

      if(isReturning && elementBottom >= 750){
        document.body.style.overflow = 'hidden'
        setTextAtTop(false)
      }

      if(textPosition === 40 && scrollDirection === 'up'){
        document.body.style.overflow = 'auto'
        setIsReturning(false)
      }

      if( scrollPower > 1 && isReturning){
        document.body.style.overflow = 'auto'
        setIsReturning(false)
        console.log('return complete')
      }

      let newVideoScale;
     
        // Adjust video scale based on the distance from the bottom of the viewport
        newVideoScale = Math.min(1, Math.max(0.5, 1 - ((windowHeight - elementBottom) / 5000)));
     
      
      setVideoScale(newVideoScale);
 
   
    }

    else{
      document.body.style.overflow = 'auto'
    }

   

 
 
    };
  
    document.addEventListener('wheel', handleWheel);
  
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [setScrollPower, scrollPower, setTextPosition, setBottomReached, textPosition, textAtTop, setTextAtTop,setIsReturning,isLocked,setVideoScale,isElementInView]);


  //[setScrollPower, scrollPower, setTextPosition, setBottomReached, textPosition, textAtTop, setTextAtTop,setIsReturning,isLocked,setVideoScale]);


  useEffect(() => {

    

  }, [isLocked,isReturning,textAtTop,textPosition]);
  

  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${videoOpacity})`,
    transition: 'opacity 0.3s ease-in', // Adjust the duration here
  };

  const textStyle = {
    position: 'absolute',
    left:'50%',
    transform:'translateX(-50%)',

  }

  return (
    <>
    <div ref={elementRef}
    className="full-slide-container">
      {!isDesktop && (
        <div
          ref={textRef}
          className="full-slide-text"
        >
          <h3>{text.subtitle}</h3>
          <h1>{text.title}</h1>
        </div>
      )}
  
      <video
        ref={videoRef}
        id={id}
        className={`full-slide-video ${isDesktop ? 'desktop' : ''}`}
        controls
        autoPlay={isPlaying}
        muted
        loop
        style={textAtTop && isDesktop ? { transform: `scale(${videoScale})` } : null}
      >
        <source src={video} type="video/mp4" />
      </video>
  
      {isDesktop && (
        <div className="overlay" style={overlayStyle}>
          <div
            ref={textRef}
            style={{
              bottom: `${textPosition}%`,
              ...textStyle
            }}
            className="full-slide-text"
          >
<h3>{text.subtitle}</h3>
          <h1>{text.title}</h1>
          </div>
        </div>
      )}
  
      <div className='full-slide-description'>
        <h2 style={{
            color:'black'
        }}>
          {text.title}
        </h2>
        <p>
        {text.description}
          <br/><button>button</button>
        </p>
      </div>
    </div>
  </>
  
  );
};

export default FullScreenSlide;