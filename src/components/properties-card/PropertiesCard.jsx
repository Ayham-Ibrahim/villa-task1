import { Link } from "react-router-dom"
import "./PropertiesCard.css"

// eslint-disable-next-line react/prop-types
const PropertiesCard = ({image,category,price,site,bedrooms,bathrooms,area,floor,parking}) => {
    return (
        <div className="col-lg-4 col-md-6 card">
            <div className="item">
                <a href="property-details.html"><img src={image} alt=""/></a>
                <span className="category">{category}</span>
                <h6 className="price">{price}</h6>
                <h4><Link to="">{site}</Link></h4>
                <ul>
                    <li>Bedrooms: <span>{bedrooms}</span></li>
                    <li>Bathrooms: <span>{bathrooms}</span></li>
                    <li>Area: <span>{area}</span></li>
                    <li>Floor: <span>{floor}</span></li>
                    <li>Parking: <span>{parking}</span></li>
                </ul>
                <div className="main-button">
                    <Link to="">Schedule a visit</Link>
                </div>
            </div>
        </div>
    )
}

export default PropertiesCard
