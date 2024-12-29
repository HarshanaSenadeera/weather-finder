import React from 'react';

export const Contact = () => {
    return (
        <>
            <main className="main-content">
                <div className="container">
                    <div className="breadcrumb">
                        <a href="/">Home</a>
                        <span>Contact</span>
                    </div>
                </div>

                <div className="fullwidth-block">
                    <div className="container">
                        <div className="col-md-5">
                            <div className="contact-details">
                                <div className="map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63480.837540439556!2d80.17079707013771!3d6.055975350251288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bb6932fce3%3A0x4a35b903f9c64c03!2sGalle!5e0!3m2!1sen!2slk!4v1730132479963!5m2!1sen!2slk"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                                <div className="contact-info">
                                    <address>
                                        <img src="images/icon-marker.png" alt="" />
                                        <p>Galle Weather INC. <br />
                                            104 / Galle RD.</p>
                                    </address>
                                    <a href="tel:+941234567"><img src="images/icon-phone.png" alt="" />+94 1234567</a>
                                    <a href="mailto:contact@galleweather.com"><img src="images/icon-envelope.png" alt="" />contact@galleweather.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-md-offset-1">
                            <h2 className="section-title">Contact us</h2>
                            <p>Thank you for choosing us. We look forward to working with you and helping you achieve success!</p>
                            <form action="#" className="contact-form">
                                <div className="row">
                                    <div className="col-md-6"><input type="text" placeholder="Your name..." /></div>
                                    <div className="col-md-6"><input type="text" placeholder="Email Address..." /></div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6"><input type="text" placeholder="Company name..." /></div>
                                    <div className="col-md-6"><input type="text" placeholder="Website..." /></div>
                                </div>
                                <textarea placeholder="Message..."></textarea>
                                <div className="text-right">
                                    <input type="submit" value="Send message" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};
