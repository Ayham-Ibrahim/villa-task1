import "./InfoTable.css";
import image2 from "../../assets/info-table1.png";
import image3 from "../../assets/info-table2.png";
import image4 from "../../assets/info-table3.png";
import image5 from "../../assets/info-table4.png";
const InfoTable = () => {
    return (
        <div className="info-table">
            <ul>
                <li>
                    <img src={image2} alt=""/>
                    <h4>250 m2<br/><span>Total Flat Space</span></h4>
                </li>
                <li>
                    <img src={image3} alt="" />
                    <h4>Contract<br/><span>Contract Ready</span></h4>
                </li>
                <li>
                    <img src={image4} alt="" />
                    <h4>Payment<br/><span>Payment Process</span></h4>
                </li>
                <li>
                    <img src={image5} alt="" />
                    <h4>Safety<br/><span>24/7 Under Control</span></h4>
                </li>
            </ul>
        </div>
    )
}

export default InfoTable
