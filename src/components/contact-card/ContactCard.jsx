import "./ContactCard.css"
// eslint-disable-next-line react/prop-types
const ContactCard = ({image,contact,name}) => {
    return (
        <div className="contact-card">
        <img src={image} alt="" />
        <h6>
            {contact}
            <br/><span>{name}</span>
        </h6>
    </div>
    )
}

export default ContactCard
