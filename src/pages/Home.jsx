import BestDeal from "../components/bestDeal-section/BestDeal"
import Contact from "../components/contact-section/Contact"
import Counters from "../components/counters-section/Counters"
import Featured from "../components/featured-section/Featured"
import PropertiesSection from "../components/properties-section/PropertiesSection"
import Slider from "../components/slider/Slider"
import Video from "../components/video-section/Video"

const Home = () => {
    return (
        <div className="Home">
            <Slider/>
            <Featured/>
            <Video/>
            <Counters/>
            <BestDeal/>
            <PropertiesSection/>
            <Contact/>
        </div>
    )
}

export default Home
