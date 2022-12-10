import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {

    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_lu4jd1g', 'template_32pw8lq', form.current, 'ItttHNJJ-iPXZ_hIj')
        .then((result) => {
            console.log(result.text);
            setDone(true)
            form.reset('')
        }, (error) => {
            console.log(error.text);
        });
    };




    return (
        <div className='contact-form'>

            <div className='m-left'>
                <div className="awesome">
                    <span>Get in Touch</span>
                    <span>Contact Me</span>

                    <div className='blur s-blur'
                    style={{background: "#ABF1FF94"}}
                    ></div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Name' />
                    <input type="email" name='user_email' className='user' placeholder='Email' />
                    <textarea type="text" name='message' className='user' placeholder='Message'/>
                    <input type="submit" value="Send" className='button' />
                    {done && <p>Send Email Successfully!!</p>}
                    <div className='blur c-blur' style={{background: "var(--purple)"}}></div>
                </form>

            </div>
        </div>
    );
};

export default Contact;