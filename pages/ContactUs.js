import React, { useRef, useState} from "react";
import emailjs from "@emailjs/browser";



export const ContactUs = () => {
  const form = useRef();


  const [user_name, setUser_name] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const[formstate,setFormstate] = useState('Send');


  const handleSubmit = event => {
    event.preventDefault();
  
    setuser_name('');
    setemail('');
    setsubject('');
    setmessage('');
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dchfv2g',
        form.current,
        'form.current',
        'AYGZjtZlV7XHo2Stg',
      )
      .then(
        (result) => {
          console.log("Successfullly sent email.");
          setUser_name('');
          setEmail('');
          setSubject('');
          setMessage('');
          setFormstate(' Sent ✅');
        },
        (error) => {
            console.log("Failed to sent email.");
            
        });

  };
  return(
    <form ref={form} onSubmit={sendEmail} className="contact-form row" id="contact-form">
      <div className="form-field col-lg-5  ">
         <input  className="input-text js-input form-control mx-2 " id="floatingName" type="text" name="user_name" value={user_name}
         onChange={e => setUser_name(e.target.value)} required/>
		 <label className="label " htmlFor="floatingName">Name</label>
      </div>

      <div className="form-field col-lg-5  ">
         <input  className="input-text js-input form-control mx-2 " id="floatingEmail" type="email" name="email" value={email}
          onChange={e => setEmail(e.target.value)} required/>
		 <label className="label " htmlFor="floatingEmail">Email</label>
      </div>

      <div className="form-field col-lg-8 ">
	  <input  className="input-text js-input form-control mx-2 t" id="floatingSubject" type="text" name="subject" value={subject} 
      onChange={e => setSubject(e.target.value)} required/>
      <label className="label" htmlFor="floatingSubject">Subject</label>
      </div>

      <div className="form-field col-lg-8 ">
         <textarea  className="input-text js-input form-control txtarea mx-2 " id="floatingMsg" type="text" name="message" value={message} rows='10' 
          onChange={e => setMessage(e.target.value)} required/>
		 <label className="label" htmlFor="floatingMsg">Message</label>
      </div>

      <div className="form-field col-lg-12 ml-3 d-flex justify-content-left">
         <button className="submit-btn btn" type="submit" value="Send">{formstate}</button>
      </div>
   </form>
  );
};

export default ContactUs;