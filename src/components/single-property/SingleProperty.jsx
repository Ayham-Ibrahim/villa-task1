import "./SingleProperty.css"
import InfoTable from "./../info-table/InfoTable"
import imagec1 from "../../assets/single-property.jpg"
import Accordion from "./../accordion/Accordion"
const SingleProperty = () => {
    return (
        <div className="single-property">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="property-image"><img src={imagec1} alt="" /></div>
                        <div className="property-info">
                            <span className="category">Apparment</span>
                            <h4>24 New Street Miami, OR 24560</h4>
                            <p>Get <strong>the best villa agency</strong> HTML CSS Bootstrap Template for your company website. TemplateMo provides you the <a href="https://www.google.com/search?q=best+free+css+templates" target="_blank">best free CSS templates</a> in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven`t heard of them ugh hella.
                            <br/><br/>When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&amp;B DSA poutine neutra cardigan hoodie pop-up.</p>
                        </div>
                        <Accordion/>
                    </div>
                    <div className="col-lg-4">
                        <InfoTable/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProperty
