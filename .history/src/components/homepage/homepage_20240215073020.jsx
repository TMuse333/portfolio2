import react from 'react'
import code from '../../media/code-background1.png'
import FullScreenSlide from '../fullScreenSlide/fullScreenSlide'
import q3 from '../../media/q3-video.mp4'
import Herobanner2 from '../herobanner2/herobanner2'
import Navbar from '../navbar/navbar'
import {designAdvantages,designAdvantages2} from '../../data/data'
import Content from '../content/content'
import HydroList from '../hyrdrolist/hydrolist'
import BigContent from '../bigContent/bigContent'
import campaign1 from '../../media/campaign-2021.jpg'
import campaign2 from '../../media/campaign-2.jpg'
import TextFormat1 from '../textFormat1/textFormat1'
import TextFormat2 from '../textFormat2/textFormat2'


const Homepage = () => {


    return (
        <div className='layout'>
            <Navbar/>

            <Herobanner2/>
            
            <FullScreenSlide
            video={q3}
            id='full-video-1'
            />
              <FullScreenSlide
            video={q3}
            id='full-video-2'
            />

            <Content
            image={code}
            rev={true}
           customText={<HydroList
           text={designAdvantages}/>
           }/>

<Content
            image={code}
          
           customText={<HydroList
           text={designAdvantages2}/>
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



            
        </div>
    )
}

export default Homepage





