import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, '1tfm8LgB-KE71ES7K')
          .then((result) => {
              console.log(result.text);
              alert("The mail has been sent successfully");
          }, (error) => {
              alert(error.text)
          });
          e.target.reset()
      };

    return(
        <div id="infoWrapperId">
            <div id="rowInfoId">
                email: eugeside@gmail.com
            </div>
            <br/>
            <div id="cnotactFromId">
                <form id="cform" method="post" ref={form} onSubmit={sendEmail}>
                    <label for="name">Name:</label><br/>
                    <input id="name" name="name" type="text" placeholder="Full name" required/><br/>
                    <label for="pnum">Phone:</label><br/>
                    <input id="pnum" name="pnum" type="tel" placeholder="+30 6912345678"/><br/>
                    <label for="email">E-mail:</label><br/>
                    <input id="email" name="email" type="email" placeholder="my@email.com" required/><br/>
                    <label for="more">Message:</label><br/>
                    <textarea cols="30" rows="10" placeholder="Send us a message..." name='message'></textarea><br/>
                    <input id="fromBtnId" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Contact;