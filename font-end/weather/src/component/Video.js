export const Video = () => {
    const videos = [
        { src: "images/vedio/v01.mov", location: "New York", date: "8 Oct, 8:00AM" },
        { src: "images/vedio/v02.mov", location: "Los Angeles", date: "8 Oct, 8:00AM" },
        { src: "images/vedio/v03.mov", location: "Chicago", date: "8 Oct, 8:00AM" },
        { src: "images/vedio/v04.mp4", location: "London", date: "8 Oct, 8:00AM" }
    ];

    return (
        <>
            <div className="fullwidth-block">
                <div className="container">
                    <h2 className="section-title">Live cameras</h2>
                    <div className="row">
                        {videos.map((video, index) => (
                            <div className="col-md-3 col-sm-6" key={index}>
                                <div className="live-camera">
                                    <figure className="live-camera-cover">
                                        <video controls width="100%">
                                            <source src={video.src} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </figure>
                                    <h3 className="location">{video.location}</h3>
                                    <small className="date">{video.date}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
