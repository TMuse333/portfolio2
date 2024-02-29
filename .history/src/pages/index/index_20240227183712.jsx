import react from 'react'

import FullScreenSlide from '../../components/fullScreenSlide/fullScreenSlide'
import q3 from '../../media/q3-video.mp4'
import Herobanner2 from '../../components/herobanner2/herobanner2'
import Navbar from '../../components/navbar/navbar'
import {designAdvantages,
    designAdvantages2,
project1,
project2,
hydrolistIntro1,
hydrolistIntro2,cardGameIntro,
,cardGameDesc} from '../../data/data'
import Content from '../../components/content/content'
import HydroList from '../../components/hyrdrolist/hydrolist'
import BigContent from '../../components/bigContent/bigContent'
import campaign1 from '../../media/campaign-2021.jpg'
import campaign2 from '../../media/campaign-2.jpg'
import TextFormat1 from '../../components/textFormat1/textFormat1'
import TextFormat2 from '../../components/textFormat2/textFormat2'
import cards from '../../media/full-screen-quantum-cards.mp4'
import code2 from '../../media/code-snippet2.png'
import code3 from '../../media/code-snippet3.png'
import Booking from '../../components/booking/booking'
import q2 from '../../media/quantum-card-2.mp4'
import reactLogo from '../../media/react.png'
import q3logo from '../../media/q3-visuals-logo.png'



const Homepage = () => {

    return (
        <div className='layout'>
            <Navbar/>

            <Herobanner2/>

            <FullScreenSlide
            video={q2}
            id='full-video-1'
            text={project1}
            navId='projects'
            />

<HydroList
           text={cardGameDesc}
           intro={cardGameIntro}/>


              <FullScreenSlide
            video={q3}
            id='full-video-2'
            text={project2}
            />

            <Content
            hasTilt={true}
         id='skills'
            image={reactLogo}
            rev={true}
            imageId='react-logo'
           customText={<HydroList
           text={designAdvantages}
           intro={hydrolistIntro1}/>
           }/>

            <Content
            image={q3logo}
            hasAnimation={true}
           customText={<HydroList
           text={designAdvantages2}
           intro={hydrolistIntro2}/>
           }/>

           <h1>Other Experiences</h1>

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





