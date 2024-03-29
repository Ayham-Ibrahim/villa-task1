import "./ContactForm.css"

const ContactForm = () => {
    return (
        <div className="Contact-form">
            <div className="row">
                <div className="col-lg-12">
                    <fieldset>
                    <label htmlFor="name">Full Name</label>
                    <input type="name" name="name" id="name" placeholder="Your Name..." required=""/>
                    </fieldset>
                </div>
                <div className="col-lg-12">
                    <fieldset>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required=""/>
                    </fieldset>
                </div>
                <div className="col-lg-12">
                    <fieldset>
                    <label htmlFor="subject">Subject</label>
                    <input type="subject" name="subject" id="subject" placeholder="Subject..."/>
                    </fieldset>
                </div>
                <div className="col-lg-12">
                    <fieldset>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" placeholder="Your Message"></textarea>
                    </fieldset>
                </div>
                <div className="col-lg-12">
                    <fieldset>
                    <button type="submit" id="form-submit" className="orange-button">Send Message</button>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
