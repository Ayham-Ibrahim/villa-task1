import "./Slider.css";
import image11 from "../../assets/banner-01.jpg";
import image22 from "../../assets/banner-02.jpg";
import image33 from "../../assets/banner-03.jpg";

const Slider = () => {
    return (
        <div className="slider">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-indicators dots">
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image11} alt="" />
                        <div className="slider-text">
                            <span className="city">
                                Toronto, 
                                <em>Canada</em>
                            </span>
                            <h2>Hurry!<br/>Get the Best Villa for you</h2>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={image22} alt="" />
                        <div className="slider-text">
                            <span className="city">
                                Melbourne, 
                                <em>Australia</em>
                            </span>
                            <h2>Be Quick!<br/>Get the best villa in town</h2>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={image33} alt="" />
                        <div className="slider-text">
                            <span className="city">
                                Miami,
                                <em>South Florida</em>
                            </span>
                            <h2>Act Now!<br/>Get the highest level penthouse</h2>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider
