import "./VideoContent.css"
import image6 from "./../../../assets/video-frame.png"
const VideoContent = () => {
    return (
        <div className="video-content">
            <div className="container">
            <div className="row">
                <div className="col-lg-10 video-col">
                <div className="video-frame">
                    <img src={image6} alt=""/>
                    <a href="https://youtube.com" target="_blank"><i className="fa fa-play"></i></a>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default VideoContent
