


export const designAdvantages = [
      {
   
        name: 'Designing Reuseable Components',
        description: `I have created about reuseable components
        during my time in react that are ready to be used at anytime.
        In fact, everything on this website was made during other projects
        and simply imported to make this portfolio.`,
      },
      {

        name: 'Visually Appealing Interfaces',
        description: `I have scoured the internet to find some of the nicest
        websites and emulate them with my own style and combing other
        components from multiple websites with each other
       along with years of drawing experience to make websites that stand out among the rest.`,
      },
      {
  
        name: 'Hooks',
        description: `Through out my projects, especially my card game, I had to learn how to
        use useState, useEffect and useContext thoroughly to ensure my applications worked properly.
        This included keeping track of the score and time in my card game, knowing where a specific element
        is relative to the viewport to enable an animation and 
        knowing where the text was relative to the video
        to enable and disable overflow to hidden on the component
        that has the video showcasing my coding projects.`,
      },
      {

        name: 'Customizable Components',
        description: `Within the components I've made, some of them have alternate attributes and qualities so they can look different while still being from the same component, increasing efficiency and diversity of the page.\n
        An example of this is this component you're viewing right now. Both the tilting feature and animation can be toggled on and off by simply putting two props to false, and this list that you are viewing right now can be any form a text you want, you can put it into the customText prop to have customizable text or a regular p tag.`,
      },
      {

        name: 'Conditional Rendering',
        description: `My knowledge in conditional rendering is one of the biggest
        factors in creating these dynamic interfaces, the text you are reading right now
        has been dynamically rendered itself. I have a great grasp
        of how to use conditionals in return statements and on style consts
        to rendering certain pieces based if another condition is true, like the 
        custom text, make a container of height 0 when it is not clicked on
        and height of 200 when clicked and much more.`,
      },
      {
        name: 'CSS',
        description: `Through out my javascript development my css has improved a lot as well,
        throughout my projects I learned how to use grid and flex layouts to display the cards properly
        in my card game, do responsive web, especially going from flex direction column for mobile
        and then row for desktop, and adding hover effects.\n\n This also includes advanced selectors like .class1 .class2 for
        precise element targeting and using the "id" tag
        to overwrite general css when a specific element needs specific editing`,
      },
    ]


    export const designAdvantages2 = [
      {
        name:"Very focused and disciplined lifestyle",
        description:`Since September 2021 I have made a very strong effort to improve my ability to focus on a single task for many hours a day, everyday.
        I live a lifestyle that is based around me being able to produce my best work and to have a high attention span which can be quite difficult in todays world.
        Everyday I code for 4 hours after I wake up by setting a timer for generally 4 1 hour sessions and going for 10 minute walks in between.
        I have been doing this with react js exclusively for since july 2023 so I have amassed a lot of experience in react.
        Outside of coding hours I engage in other high qualities that require focus
        as well such as mediation, gym and reading everyday.
        I also highly limit activities that would hinder my focus such as
        watching lots of short form content or social media, which I limit to
        approximately an hour a day.`
      },
      {
        name:'Strong self learner',
        description:`Due to my focus, discipline and the internet, I've been able to learn quite
        a lot on my own by having a tenacious approach to whatever I do, I just keep putting in the hours until
        I make it happen. I am also quite well read for my age having read approximately
        50 books (most of them more than once) on various subjects such as 
        habit cultivation, living a focused lifestyle, psychology and a lot more.
        All of this has given me the necessary tools to progress well coding.
        `
      },
      {
        name:'Team Player',
        description:`During elementary until the end of high school, I played competitive basketball every year, even going to places
        like New York and Boston to play. Years of high level basketball taught me how to work well in team environments and communicate
        with others effectively and how to plan to win. It also taught me how to preform under pressure and stay commited
        to getting better a one thing year after year after year. Another thing it taught me was how
        to be a coachable player by taking instructions then implementing them.
        I will certainly take all of these qualities into my coding career and am ready
        to learn whatever you need me to learn so the company
        can perform well.`
      },
      {
  
        name: 'General design skills',
        description: `I have been into design since I was
        young and before coding I have years of experience drawing
        things and creating content through drawing, making videos and
        animations. I have keen visual intelligence so I understand
        how to make appealing and unique user interfaces.`,
      },
        {
     
          name: 'Java',
          description: `I have taken 4 courses in Java over 2
          years at Dalhousie where I learned object orientated programming,
          data structures and algorithms. `,
        },
        {
  
          name: 'C',
          description: `I have made arraylists, linked lists, stacks, queues
          binary search trees and heaps all in C. This gave me a thorough understanding of
          low level programming and data structures`,
        },
   
        
        
       
      ]

      export const cardGameIntro = {
        title:'The Quantum Card Game',
        description:'This was my first full stack project where I used React js for the frontend and mongodb for the backend. '+
        'The objective of the game is to memorize the backside of each card and match it with the image at the top of the screen, '+
        'which changes every turn. This project was great for learning how to manage a lot of states and using mongodb.'+
        ' Here are some of the big concepts I learned while making this project.'
      }


     export const cardGameDesc = [
        {
          name:'UseState management',
          description:'In this card game there are many states that one cycle of play has, so I got a very thoroug'+
           ' understanding of how to think about each state and how they relate to one another what what operations to perform based on which state, and making sure each state is updated properly'
        },
        {
          name:'Using context file',
          description:'There are different components in this game like the set'+
          ' of cards and the scoreboard that rely on the same useState variable like if the game has started or not.'+
          ' I had to create a context file to handle operations and logic that had to be shared throughout multiple files to ensure each file knows what is going on. '+
          'Most of the underlying game logic is also performed throughout this file'
        },
        {
          name:'Conditional Rendering',
          description:'There are multiple components shown on the card game, like the result screen, '+
          'instructions, the card display and the leader board. '+
          'These components are all put on a single page but are rendered conditionally based on '+
          'What state the game is in. The cards are also given a different color glow based if you have the selected the correct card or not'
        },
        {
          name:'Backend work',
          description:'I used mongodb for the backend of this project. '+
          'I had to learn to use node js to connect the database and how to make '+
          'api requests to send the data to the database and retrieve it to display on the leader board.'
        }
      ]


      export const project1 =
      {
        subtitle:'My first full stack project',
        title:'The Quantum Card Game',
        description:`This is my first full stack card game which uses react js and mongodb to keep track of the leader board. This project taught me a lot about context and state management in react. Some big concepts I learned were...\n
        How to make a context file and use a useState variable across different files\n
        Conditional rendering to display different screens in the game like the leader board, results screen and card display\n
        Applying useInterval and setTimeout to refresh every turn\n
        A lot of game logic\n
        Making a mongodb server and then using node js to make api requests to send the scores to the database and retrieve it to display it on the leader board`,
        link:'https://quantumcardgame2.netlify.app',
        github:'https://github.com/TMuse333/card-game-2',
        poster:'../../media/card-game2.png'
        
       
      }

      export const project2 = {
        subtitle:'My freelancing website',
        title:'Q3 Designs',
        description:"This is where I offer freelancing for unique and visually appealing websites. "+
        'In this project I learned a lot about how to make unique and visually appealing interfaces '+
        'and make reuseable components',
        link:'https://q3designs.netlify.app',
        github:'https://github.com/TMuse333/quantumDesigns',
        poster:'../../media/q3-screenshot.png'
      }

     export const hydrolistIntro1 = {
        title:'My Primary Skill',
        description:`Currently my I am most competent in react JS
        with over 550 hours since July 2023 (Approximately 4 hours of coding a day everyday). Here are some of my skills within react,
        which include html and css knowledge as well`,
        github:'https://github.com/TMuse333/card-game',
        link:'https://quantumcardgame.netlify.app'
      }

      export const hydrolistIntro2 = {
        title:'My secondary skills and personal attributes',
        description:'Besides react js I have two years of computer science at Dalhousie University, here'+
        ' are some other skills and personal qualities I have'
      }
  

      export const q3Intro = {
        name:'Q3 Designs Freelancing',
        description:'This is where I offer my react js services to clients, where I have made a website for a '+
        'digital marketing company. This project was mainly focused on creating designs that standout from the rest. '+
        'Some tactics I used to stand out were:'
      }

      export const q3
    
  


