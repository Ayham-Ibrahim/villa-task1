import "./Accordion.css"

const Accordion = () => {
    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">
                        Best useful links ?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Dolor <strong>almesit amet</strong> consectetur adipiscing elit, sed doesn`t eiusmod tempor incididunt ut labore consectetur <code>adipiscing </code>elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How does this work ?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Dolor <strong>almesit amet</strong> consectetur adipiscing elit, sed doesn`t eiusmod tempor incididunt ut labore consectetur <code>adipiscing </code>elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                     </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Why is Villa Agency the best ?
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Dolor <strong>almesit amet</strong> consectetur adipiscing elit, sed doesn`t eiusmod tempor incididunt ut labore consectetur <code>adipiscing </code>elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                     </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion
