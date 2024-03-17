import BestDeal from "../components/bestDeal-section/BestDeal"
import PageHeading from "../components/page-heading/PageHeading"
import SingleProperty from "../components/single-property/SingleProperty"


const PropertyDetails = () => {
    return (
        <div className="PropertyDetails">
            <PageHeading pageName="Single Property"/>
            <SingleProperty/>
            <BestDeal/>
        </div>
    )
}

export default PropertyDetails
