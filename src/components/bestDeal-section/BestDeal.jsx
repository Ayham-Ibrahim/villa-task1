import SectionHeader from "../section-header/SectionHeader"
import TabItem from "../tabs-items/TabItem"
import image8 from "../../assets/bestDeal.png";
import "./BestDeal.css"
import { Link } from "react-router-dom";

const BestDeal = () => {
    return (
        <div className="best-deal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <SectionHeader name="Best Deal" title="Find Your Best Deal Right Now!"/>
                    </div>
                    <div className="col-lg-12">
                        <div className="tabs-content">
                            <div className="row">
                                <div className="nav-wrapper">
                                    <ul className="nav justify-content-end">
                                        <TabItem title="Appartment"/>
                                        <TabItem title="Villa House"/>
                                        <TabItem title="Penthouse"/>
                                    </ul>
                                </div>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="appartment" role="tabpanel" aria-labelledby="appartment-tab">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="info-table">
                                                <ul>
                                                    <li>Total Flat Space <span>185 m2</span></li>
                                                    <li>Floor number <span>26th</span></li>
                                                    <li>Number of rooms <span>4</span></li>
                                                    <li>Parking Available <span>Yes</span></li>
                                                    <li>Payment Process <span>Bank</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <img src={image8} alt=""/>
                                        </div>
                                        <div className="col-lg-3 extra-info">
                                            <h4>Extra Info About Property</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. 
                                            <br/><br/>When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                                            <div className="icon-button">
                                                <Link to="#"><i className="fa fa-calendar"></i> Schedule a visit</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestDeal
