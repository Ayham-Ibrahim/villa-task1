import "./Featured.css";
import image from "./../../assets/left-image.png"
import image1 from "./../../assets/featured-logo.png"
import { Link } from "react-router-dom";
import SectionHeader from "../section-header/SectionHeader";
import Accordion from "../accordion/Accordion";
import InfoTable from "../info-table/InfoTable";

const Featured = () => {
    return (
        <div className="featured-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="left-image">
                        <img src={image} alt="" />
                        <Link to=""><img src={image1} className="property-details-btn"/></Link>
                    </div>
                </div>
                <div className="col-lg-5">
                    <SectionHeader  name="Featrured" title="Best Appartment & Sea view"/>
                    <Accordion/>
                </div>
                <div className="col-lg-3">
                    <InfoTable/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Featured
