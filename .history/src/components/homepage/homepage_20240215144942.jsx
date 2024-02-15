import react from 'react'

import FullScreenSlide from '../fullScreenSlide/fullScreenSlide'
import q3 from '../../media/q3-video.mp4'
import Herobanner2 from '../herobanner2/herobanner2'
import Navbar from '../navbar/navbar'
import {designAdvantages,
    designAdvantages2,
project1,
project2,
hydrolistIntro1,
hydrolistIntro2} from '../../data/data'
import Content from '../content/content'
import HydroList from '../hyrdrolist/hydrolist'
import BigContent from '../bigContent/bigContent'
import campaign1 from '../../media/campaign-2021.jpg'
import campaign2 from '../../media/campaign-2.jpg'
import TextFormat1 from '../textFormat1/textFormat1'
import TextFormat2 from '../textFormat2/textFormat2'
import cards from '../../media/full-screen-quantum-cards.mp4'
import code2 from '../../media/code-snippet2.png'
import code3 from '../../media/code-snippet3.png'
import Booking from '../booking/booking'



const Homepage = () => {

    return (
        <div className='layout'>
            {/* <Navbar/> */}

            <Herobanner2/>

            <FullScreenSlide
            video={cards}
            id='full-video-1'
            text={project1}
            />
              <FullScreenSlide
            video={q3}
            id='full-video-2'
            text={project2}
            />

            <Content
            hasTilt={true}
         
            image={code3}
            rev={true}
           customText={<HydroList
           text={designAdvantages}
           intro={hydrolistIntro1}/>
           }/>

            <Content
            image={code2}
            hasAnimation={true}
           customText={<HydroList
           text={designAdvantages2}
           intro={hydrolistIntro2}/>
           }/>

           <BigContent
           image={campaign1}
           id='big-1'
           customText={<TextFormat1/>}
           />

            <BigContent
           image={campaign2}
           id='big-2'
           reverse={true}
           customText={<TextFormat2/>}
           />

           <Booking/>



            
        </div>
    )
}

export default Homepage





