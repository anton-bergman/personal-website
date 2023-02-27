import React, { useState } from 'react'
import "../styles/contact_me.css";

function ContactMe() {

    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL_WWW;

    const [formData, setFormData] = useState({
        firstName : "", 
        lastName : "",
        email : "",
        phone : "",
        subject : "",
        message : ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(BACKEND_URL + "/submit-form", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert("Email sent!");
            }
        } catch (error) {
            console.log(error);
        }

        // Reset the form to empty
        setFormData({
            firstName : "", 
            lastName : "",
            email : "",
            phone : "",
            subject : "",
            message : ""
        })

    };

    const handleInputChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value});
    };

    return (
        <div className="contact-me-container" id="contact-me">
            <div className='contact-me-card'>
                <h1 className='contact-me-header'>Contact Me</h1>
                <form id='contact-me-form' action='/submit' method="POST" encType="text/plain" onSubmit={handleSubmit}>
                    <div className='input-row'>
                        <label>First name<br/>
                            <input type="firstName" name='firstName' value={formData.firstName} onChange={handleInputChange}/>
                        </label>
                        <label>Last name<br/>
                            <input type="lastName" name='lastName' value={formData.lastName} onChange={handleInputChange}/>
                        </label>
                    </div>
                    <div className='input-row'>
                        <label>Email<br/>
                            <input type="email" name='email' value={formData.email} onChange={handleInputChange} required/>
                        </label>
                        <label>Phone number<br/>
                            <input type="phone" name='phone' value={formData.phone} onChange={handleInputChange}/>
                        </label>
                    </div>
                    <div className='input-col'>
                        <label>Subject<br/>
                            <input type="subject" name='subject' value={formData.subject} onChange={handleInputChange}/>
                        </label>
                        <label>Message<br/>
                            <textarea className="input-message" type="text" placeholder="Type your message..." name='message' value={formData.message} onChange={handleInputChange} required/>
                        </label>

                        <input id='submit-btn' type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactMe;