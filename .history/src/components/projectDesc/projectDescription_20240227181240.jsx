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
            <p>


            This is a card game where you can test your memory and reaction time while viewing some quality art.
            Each card has a backside and the objective of the game
            is to match the backside with the card at the top of screen as quickly as possible.

            Creating this game taught me many things about react.
            </p>
            </div>
            <div className='concepts-list'>
                
            </div>
            
        </div>
    )
}