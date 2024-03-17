import "./PropertiesBox.css"
import PropertiesCard from "../properties-card/PropertiesCard"
import imagec1 from "../../assets/card1.png"
import imagec2 from "../../assets/card2.png"
import imagec3 from "../../assets/card3.png"
import imagec4 from "../../assets/card4.png"
import imagec5 from "../../assets/card5.jpg"
import imagec6 from "../../assets/card6.jpg"

const PropertiesBox = () => {
    return (
        <div className="properties-box">
            <div className="row">
                <PropertiesCard image={imagec1} category="Luxury Villa" price="$2.264.000" site="18 New Street Miami,OR 97219" bedrooms="8" bathrooms="8" area=" 545m2" floor="3" parking ="6 spots"/>
                <PropertiesCard image={imagec2} category="Luxury Villa" price="$1.180.000" site="54 Mid Street Florida, OR 27001" bedrooms="6" bathrooms="5" area="450m2" floor="3" parking ="8 spots "/>
                <PropertiesCard image={imagec3} category="Luxury Villa" price="$1.460.000" site="26 Old Street Miami, OR 38540" bedrooms="5" bathrooms="4" area="225m2" floor="3" parking ="10 spots"/>
                <PropertiesCard image={imagec4} category="Apartment" price="$584.500" site="12 New Street Miami, OR 12650" bedrooms="4" bathrooms="3" area="125m2" floor="25th" parking ="2 cars"/>
                <PropertiesCard image={imagec5} category="Penthouse" price="$925.600" site="34 Beach Street Miami, OR 42680" bedrooms="4" bathrooms="4" area="180m2" floor="38th" parking ="2 cars"/>
                <PropertiesCard image={imagec6} category="Modern Condo" price="$450.000" site="22 New Street Portland, OR 16540" bedrooms="3" bathrooms="2" area="165m2" floor="26th" parking ="3 cars "/>
                <PropertiesCard image={imagec1} category="Luxury Villa" price="$2.264.000" site="18 New Street Miami,OR 97219" bedrooms="8" bathrooms="8" area=" 545m2" floor="3" parking ="6 spots"/>
                <PropertiesCard image={imagec2} category="Luxury Villa" price="$1.180.000" site="54 Mid Street Florida, OR 27001" bedrooms="6" bathrooms="5" area="450m2" floor="3" parking ="8 spots "/>
                <PropertiesCard image={imagec3} category="Luxury Villa" price="$1.460.000" site="26 Old Street Miami, OR 38540" bedrooms="5" bathrooms="4" area="225m2" floor="3" parking ="10 spots"/>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <ul className="pagination">
                        <li><a href="#">1</a></li>
                        <li><a className="is_active" href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">&gt;&gt;</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PropertiesBox
