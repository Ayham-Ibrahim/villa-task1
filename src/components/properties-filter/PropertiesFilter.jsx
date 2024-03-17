import "./PropertiesFilter.css"
import TabItem from "./../tabs-items/TabItem"

const PropertiesFilter = () => {
    return (
        <ul className="nav properties-filter">
            <TabItem title="Show All"/>
            <TabItem title="Appartment"/>
            <TabItem title="Villa House"/>
            <TabItem title="Penthouse"/>
        </ul>
    )
}

export default PropertiesFilter;
