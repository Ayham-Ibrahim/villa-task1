import "./PageHeading.css"

// eslint-disable-next-line react/prop-types
const PageHeading = ({pageName}) => {
    return (
        <div className="page-heading">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <span className="back-home"><a href="#">Home</a> / {pageName}</span>
                        <h3>{pageName}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHeading
