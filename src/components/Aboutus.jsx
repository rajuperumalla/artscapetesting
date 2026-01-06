import { useEffect } from 'react';
import "./Aboutus.scss";

const AboutUs = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('[data-reveal]');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="aboutus-page">
            <div className="aboutus">
                <section className="hero-section section-fade-in">
                    <h1 className='link'>About ArtScape Studio</h1>
                    <p>Where creativity meets craftsmanship</p>
                </section>

                <div className="content-grid">
                    <section className="mission-section neu-lifted" data-reveal>
                        <h2 className='link'>Our Mission</h2>
                        <p>
                            Founded in 2020, our mission is to bring innovative art solutions to life, transforming spaces into vibrant expressions of individuality. Our team of passionate artists and designers work tirelessly to create unique pieces that inspire and captivate.
                        </p>
                    </section>

                    <section className="vision-section neu-lifted" data-reveal>
                        <h2 className='link'>Our Vision</h2>
                        <p>
                            At ArtScape Studio, we believe that art has the power to transform environments and evoke emotions. Join us on our journey to make the world a more beautiful place, one masterpiece at a time.
                        </p>
                    </section>
                </div>

                <section className="team-section" data-reveal>
                    <h2 className='link'>Meet Our Team</h2>
                    <div className="team-members">
                        <div className="team-member neu-lifted">
                            <div className="member-avatar neu-pressed"></div>
                            <h3 className='link'>John Doe</h3>
                            <p>Founder & Lead Designer</p>
                        </div>
                        <div className="team-member neu-lifted">
                            <div className="member-avatar neu-pressed"></div>
                            <h3 className='link'>Jane Smith</h3>
                            <p>Art Director</p>
                        </div>
                        <div className="team-member neu-lifted">
                            <div className="member-avatar neu-pressed"></div>
                            <h3 className='link'>Mike Johnson</h3>
                            <p>Craftsmanship Expert</p>
                        </div>
                    </div>
                </section>

                <section className="about-contact-section neu-lifted" data-reveal>
                    <h2 className='link'>Get In Touch</h2>
                    <p>Ready to transform your space? Contact us today.</p>
                    <a href="mailto:info@artscapestudio.com" className="contact-btn neu-button">Email Us</a>
                </section>
            </div>
        </div>
    );
}

export default AboutUs;

