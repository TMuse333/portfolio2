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
            rev={true}
           customText={<HydroList
           text={designAdvantages2}/>
           }/>

           <BigContent
           image={campaign1}
           id='big-1'
           />

            <BigContent
           image={campaig2}
           id='big-1'
           />



            
        </div>
    )
}

export default Homepage





