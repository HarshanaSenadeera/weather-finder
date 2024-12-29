export const About = () => {

    return (

        <>
            <div className="fullwidth-block">
                <div className="container">
                    <div className="row">
                        {/* About Us Section */}
                        <div className="col-md-4">
                            <h2 className="section-title">About Us</h2>
                            <p>
                                Welcome to our company! We are a passionate team dedicated to delivering the best products and services to our customers.
                                With years of experience in the industry, we strive for excellence and innovation in everything we do.
                                Our mission is to make a positive impact in the lives of our customers and create lasting relationships built on trust and quality.
                            </p>
                            <p>
                                Whether it's through our cutting-edge technology, exceptional customer service, or community involvement,
                                we aim to exceed expectations and constantly evolve to meet the needs of an ever-changing world.
                            </p>
                            <p>
                                Thank you for choosing us. We look forward to working with you and helping you achieve success!
                            </p>
                        </div>

                        {/* Middle Column (Optional for Additional Content) */}
                        <div className="col-md-4">
                            <h2 className="section-title">Our Vision</h2>
                            <p>
                                We envision a world where technology and innovation are accessible to all.
                                Our goal is to lead the way in creating solutions that empower businesses and individuals alike.
                            </p>
                        </div>

                        {/* Awesome Photos Grid */}
                        <div className="col-md-4">
                            <h2 className="section-title">Awesome Photos</h2>
                            <div className="photo-grid">
                                <a href="#"><img src="images/01.jpg" alt="Photo 1" /></a>
                                <a href="#"><img src="images/02.jpg" alt="Photo 2" /></a>
                                <a href="#"><img src="images/03.jpeg" alt="Photo 3" /></a>
                                <a href="#"><img src="images/04.jpeg" alt="Photo 4" /></a>
                                <a href="#"><img src="images/05.jpg" alt="Photo 5" /></a>
                                <a href="#"><img src="images/06.jpg" alt="Photo 6" /></a>
                                <a href="#"><img src="images/07.jpg" alt="Photo 7" /></a>
                                <a href="#"><img src="images/08.jpg" alt="Photo 8" /></a>
                                <a href="#"><img src="images/09.jpg" alt="Photo 9" /></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
