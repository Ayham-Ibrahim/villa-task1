import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-content">
                <p>Copyright © 2048 Villa Agency Co., Ltd. All rights reserved. 
                Design: <Link rel="nofollow" to="https://templatemo.com" target="_blank">TemplateMo</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
