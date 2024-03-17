import "./Contact.css"
import SectionHeader from "./../section-header/SectionHeader"
import ContactContent from "../Contact-Content/ContactContent"
const Contact = () => {
    return (
        <>
            <div className="contact-section">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="section-heading text-center">
                            <SectionHeader name="Contact Us" title="Get In Touch With Our Agents"/>
                        </div>
                    </div>
                </div>
            </div>
            <ContactContent/>
        </>
    )
}

export default Contact
