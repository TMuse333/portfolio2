import react, {useState, useEffect} from 'react'



const ProjectDescription = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 500)


    return (
        <div className='project-desc-container'>
            <div className='project-info'>
            <h2>The Quantum Card Game</h2>
            {!isMobile && (
    <div className='buttons'>
    <button>
        Play Game
    </button>
    <button>
        View Github
    </button>
</div>
            )}
            This is a card game 
        
            </div>
            
        </div>
    )
}