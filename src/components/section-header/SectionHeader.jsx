import "./SectionHeader.css"

// eslint-disable-next-line react/prop-types
const SectionHeader = ({ name , title }) => {
    return (
        <div className="section-header">
            <h6 className="section-name">
                | {name}
            </h6>
            <h2 className="section-title">
                {title}
            </h2>
        </div>
    )
}

export default SectionHeader
