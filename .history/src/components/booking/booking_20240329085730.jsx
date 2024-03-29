import React, { useState, useRef,useEffect } from 'react';
import './booking.css';
import emailjs from '@emailjs/browser';





const Booking = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'service_32u1f5x';
    const templateId = 'template_ubgz5ef';
    const userId = 'CN_-9JmkFRgjxgmrg';

    emailjs
      .sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  useEffect(() => {
    // Scroll to the top when the "submitted" state changes
    if (submitted) {
      window.scrollTo(0, 0);
    }
  }, [submitted]);

  useEffect(() =>{
    window.scrollTo(0,0)
  })

  const links = [
    {
      dest:'/',
      name:'Home'
    },
    {
        dest:'/why-us',
        name:'Why Us',

  
    },
    {
      dest:'/about',
      name:'About Us'
    },
  
]
  return (
    <>


 
    <div className='booking-container'
    id='booking'>
      



<div className='booking-contents'>




<div className='small'>




        {/* <img src={nobg}
        style={{height:'30vw'}}
        /> */}

        

        <h1 className='margin-bottom'
    
        >
            Contact Me
        </h1>
      <h1 className='title-text booking-title'>
      
      </h1>
      {submitted ? (
       <></>
      ) : (
        <>
          {/* <p className='booking-p'>
            Let's get in contact so we can work together
          </p>
          <p className='booking-p'>
            Email: Thomaslmusial@gmail.com
          </p>
          <p className='booking-p'>
            Text me at 902-999-1006
          </p> */}
          <form onSubmit={sendEmail} ref={form}>
            <div className='info-box-container'>
              <input type='email' placeholder='Email' name='user_email' />
              <input type='text' placeholder='First Name' name='first_Name' />
              <input type='text' placeholder='Last Name' name='last_Name' />
              <input
                type='text'
                placeholder='Company name'
                name='company_Name'
              />
              <input type='text' placeholder='Phone number' name='phone_Number' />
              <input type='text' placeholder='Your message' name='project_Details' />
            </div>

         

            <button className='button submit-button'  type='submit'
            style={{
                marginTop:'2rem'
            }}>
              Submit request
            </button>
          </form>
        </>
      )}

</div>

</div>
</div>




     

      {/* <Footer/> */}

    </>
 
  );
};

export default Booking;