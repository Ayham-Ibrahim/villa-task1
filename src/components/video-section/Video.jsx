import SectionHeader from "../section-header/SectionHeader"
import "./Video.css"
import VideoContent from "./video-content/VideoContent"

const Video = () => {
    return (
    <>
        <div className="video-section">
            <div className="row">
                <div className="col-lg-4 offset-lg-4">
                    <div className="section-heading text-center">
                        <SectionHeader name="Video View" title="Get Closer View & Different Feeling "/>
                    </div>
                </div>
            </div>
        </div>
        <VideoContent/>
    </>
    )
}

export default Video
