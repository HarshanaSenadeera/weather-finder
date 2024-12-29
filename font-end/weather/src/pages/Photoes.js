export const Photoes = () => {
    const photos = [
        { img: "images/01.jpg", title: "Neque porro quisquam", description: "Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.", rating: 60 },
        { img: "images/02.jpg", title: "Neque porro quisquam", description: "Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.", rating: 60 },
        { img: "images/03.jpeg", title: "Neque porro quisquam", description: "Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.", rating: 60 },
        { img: "images/04.jpeg", title: "Neque porro quisquam", description: "Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.", rating: 60 },
        { img: "images/05.jpg", title: "Neque porro quisquam", description: "Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.", rating: 60 },
        { img: "images/06.jpg", title: "Neque porro quisquam", description: "Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.", rating: 60 },
        { img: "images/07.jpg", title: "Neque porro quisquam", description: "Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.", rating: 60 },
        { img: "images/08.jpg", title: "Neque porro quisquam", description: "Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.", rating: 60 },
        { img: "images/09.jpg", title: "Neque porro quisquam", description: "Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.", rating: 60 }
    ];

    return (
        <>
            <main className="main-content">
                <div className="container">
                    <div className="breadcrumb">
                        <a href="/">Home</a>
                        <span>Photos</span>
                    </div>
                </div>

                <div className="fullwidth-block">
                    <div className="container">
                        <div className="row">
                            {photos.map((photo, index) => (
                                <div className="col-md-6" key={index}>
                                    <div className="photo">
                                        <div className="photo-preview photo-detail" style={{ backgroundImage: `url(${photo.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                        <div className="photo-details">
                                            <h3 className="photo-title"><a href="#">{photo.title}</a></h3>
                                            <p>{photo.description}</p>
                                            <div className="star-rating" title={`Rated ${photo.rating / 20} out of 5`}>
                                                <span style={{ width: `${photo.rating}%` }}>
                                                    <strong className="rating">{photo.rating / 20}</strong> out of 5
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};
