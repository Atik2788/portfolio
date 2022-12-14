import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../../Context';

const Contact = () => {

    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_lu4jd1g', 'template_32pw8lq', form.current, 'ItttHNJJ-iPXZ_hIj')
        .then((result) => {
            console.log(result.text);
            setDone(true)
            // form.reset('')
        }, (error) => {
            console.log(error.text);
        });
    };


    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    return (
        <div className='lg:p-4 mt-4 lg:mt-[-15px] mx-auto text-center'>
            <div id='Contact' className='contact-form p-3 rounded-lg'
            style={{
                    background: darkMode ? '#313b3e' : '#6c9da8db',
                    color: darkMode ? 'white' : 'black'
            }}
            >
                <div>
                    <p className='text-lg font-bold mb-2'>Text Me..</p>
                <p className='text-xs mb-4 text-left'>Email: <span className='text-xs text-blue-700'>atikur.rahman2788@gmail.com</span></p>
                </div>


                <div className="">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='user_name' className='text-xs py-1 mb-2 border-2 rounded-md pl-2 border-[#27dccd] lg:w-[20rem] w-60' placeholder='Name' />
                        <input type="email" name='user_email' className='text-xs py-1 mb-2 border-2 rounded-md pl-2 border-[#27dccd] lg:w-[20rem] w-60' placeholder='Email' />
                        <textarea type="text" name='message' className='text-xs py-1 h-16 border-2 rounded-md pl-2 border-[#27dccd] lg:w-[20rem] w-60' placeholder='Message'/>
                        {done && <p className='text-xs text-green-900 mb-2'>Send Email Successfully!!</p>}
                        <input type="submit" value="Send" className='mb-3 button mt-2' />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;