import PageHeading from "../components/page-heading/PageHeading"
import PropertiesBox from "../components/properties-box/PropertiesBox"
import PropertiesFilter from "../components/properties-filter/PropertiesFilter"

const Properties = () => {
    return (
        <div className="properties-page">
            <PageHeading pageName="Properties"/>
            <div className="properties" style={{ marginTop:"120px" }}>
                <div className="container">
                    <PropertiesFilter/>
                    <PropertiesBox/>
                </div>
            </div>
        </div>
    )
}

export default Properties
