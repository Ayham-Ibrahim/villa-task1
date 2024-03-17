import SectionHeader from "../section-header/SectionHeader"
import "./ContactPage.css"
import imagep from "./../../assets/phone.png"
import imagee from "./../../assets/email.png"
import ContactCard from "./../contact-card/ContactCard"
import ContactForm from "./../contact-form/ContactForm"
const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionHeader name="Contact Us" title="Get In Touch With Our Agents"/>
                        <p>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.</p>
                        <div className="row">
                            <div className="col-lg-12 ay-card1">
                                <ContactCard image={imagep} contact="010-020-0340" name="Phone Number"/>
                            </div>
                            <div className="col-lg-12 ay-card2">
                                <ContactCard image={imagee} contact="info@villa.co" name="Business Email"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 my-form">
                        <ContactForm/>  
                    </div>
                    <div className="col-lg-12">
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="500px"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
