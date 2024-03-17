/* eslint-disable react/prop-types */
import "./TabItem.css"

const TabItem = ({title}) => {
    return (
        <li className="nav-item tab-item">
            <button className="nav-link" id="appartment-tab" data-bs-toggle="tab" data-bs-target="#appartment" type="button" role="tab" aria-controls="appartment" aria-selected="true">{title}</button>
        </li>
    )
}

export default TabItem
