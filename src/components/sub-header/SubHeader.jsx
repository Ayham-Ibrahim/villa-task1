import { FaEnvelope } from "react-icons/fa6";
import { FaMap } from "react-icons/fa6";
import "./SubHeader.css";
const SubHeader = () => {
  return (
    <div className="sub-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <ul className="info">
                            <li><FaEnvelope className="email" /> info@company.com</li>
                            <li><FaMap className="location" /> Sunny Isles Beach, FL 33160</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <ul className="social-links">
                            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="https://x.com/minthu"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubHeader
