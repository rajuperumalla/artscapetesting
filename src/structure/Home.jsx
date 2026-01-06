import { useEffect, useRef } from "react";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { WiWindy } from "react-icons/wi";
import { MdOutlineLight, MdOutlineLightbulb } from "react-icons/md";
import { FaMobileButton } from "react-icons/fa6";
import "./Home.scss"
import brand1 from "../assets/images/brand/brand1.png"
import brand2 from "../assets/images/brand/brand2.png"
import brand3 from "../assets/images/brand/brand3.png"
import brand4 from "../assets/images/brand/brand4.png"
import brand5 from "../assets/images/brand/brand5.png"
import brand6 from "../assets/images/brand/brand6.png"
import landingvideo from "../assets/videos/banner.mp4"
import side_table from "../assets/images/products/side_table.jpg"
import play_area from "../assets/images/play_area.jpg"
import diamond_front_view from "../assets/images/diamond_front_view.jpg"
import diamond_top_view from "../assets/images/diamond_top_view.jpg"
import products_video from "../assets/videos/Landing_video.mp4"

const Home = () => {

    const videoRef = useRef(null);

    useEffect(() => {
        const videoEl = videoRef.current;
        if (!videoEl) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                entry.isIntersecting && entry.intersectionRatio >= 0.5
                    ? videoEl.play().catch(() => { }) : videoEl.pause();
            },
            { threshold: 0.5 }
        );
        observer.observe(videoEl);
        return () => observer.disconnect();
    }, []);

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
        <>
            <div className="home">
                <section className="banner section-fade-in">
                    <video className="banner-video" ref={videoRef} autoPlay muted loop playsInline preload="auto">
                        <source src={landingvideo} />
                    </video>
                    <div className="banner-content">
                        <div className="banner-tag">Discover ArtFul Living<br /> with <span>ArtScape</span></div>
                        <p className="banner-text">our kinetic sand art furnitures blend decor and mindfulness with seamless elegances<br />experience the art in motion, crafted to relax and calm.</p>
                    </div>
                </section>

                <div className="sections-container">
                    <section className="features-section" data-reveal>
                        <div className="features-header">
                            <h2 className="features-title">
                                Engineered for Ambience.<br /><span className="features-tag">Experience the Difference.</span>
                            </h2>
                            <p className="features-description">
                                Flowing sand patterns and gentle lighting transform any space into a living artwork.
                                Each design unfolds with elegance, bringing calm, beauty, and a touch of luxury to your surroundings.
                            </p>
                        </div>

                        <div className="features">
                            <div className="feature neu-lifted">
                                <div className="feature-icon neu-pressed">
                                    <WiWindy className="feature-i" />
                                </div>
                                <h3 className="feature-tag">Tranquility in Motion</h3>
                                <p className="feature-desc">
                                    Flowing sand patterns and ambient lighting transform any space into a living artwork—each design unfolding with elegance to bring calm, beauty, and a touch of luxury.
                                </p>
                            </div>

                            <div className="feature neu-lifted">
                                <div className="feature-icon neu-pressed">
                                    <MdOutlineLight className="feature-i" />
                                </div>
                                <h3 className="feature-tag">Ambient Elegance</h3>
                                <p className="feature-desc">
                                    Where luxury design meets flowing motion, the sand table becomes the centerpiece of a serene and stylish space.
                                </p>
                            </div>

                            <div className="feature neu-lifted">
                                <div className="feature-icon neu-pressed">
                                    <FaMobileButton className="feature-i" />
                                </div>
                                <h3 className="feature-tag">Mobile App Control</h3>
                                <p className="feature-desc">
                                    Choose patterns, adjust speed, schedule sessions effortlessly with an intuitive mobile app. control the table anytime, anywhere.
                                </p>
                            </div>

                            <div className="feature neu-lifted">
                                <div className="feature-icon neu-pressed">
                                    <MdOutlineLightbulb className="feature-i" />
                                </div>
                                <h3 className="feature-tag">Ambient LED Lighting</h3>
                                <p className="feature-desc">
                                    Built-in LED modes let you set the mood. calming tones for relaxation, vibrant colors for energy, or smooth transitions for a mesmerizing atmosphere.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="how-it-works" data-reveal>
                        <div className="how-it-works-container">
                            <div className="image-container neu-lifted">
                                <img
                                    className="how-it-works-image"
                                    src={side_table}
                                    alt="image"
                                />
                            </div>
                            <div className="how-it-works-content">
                                <h3 className="how-it-works-title">
                                    How it works
                                </h3>
                                <p className="how-it-works-desc">
                                    A sand table turns motion into art. Hidden beneath the surface, a smooth mechanism moves a small ball across the sand, creating flowing patterns that continuously evolve.
                                </p>

                                <div className="how-it-works-steps">
                                    <div className="how-it-works-step">
                                        <div className="steps neu-pressed">
                                            <span className="step-number">1</span>
                                        </div>
                                        <div>
                                            <h4 className="step-title">Invisible Motion</h4>
                                            <p className="step-desc">
                                                The ball glides silently, leaving delicate trails that transform into intricate designs.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="how-it-works-step">
                                        <div className="steps neu-pressed">
                                            <span className="step-number">2</span>
                                        </div>
                                        <div>
                                            <h4 className="step-title">Ever-Changing Artwork</h4>
                                            <p className="step-desc">
                                                As one pattern fades into the next, the surface is constantly renewed—no two designs are ever the same.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="how-it-works-step">
                                        <div className="steps neu-pressed">
                                            <span className="step-number">3</span>
                                        </div>
                                        <div>
                                            <h4 className="step-title">Effortless Control</h4>
                                            <p className="step-desc">
                                                With a simple touch, you can choose patterns, adjust speed, or let the table run on its own, creating a living display of art in motion.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="stats-section">
                            <div className="stats-container neu-lifted">
                                <div className="stat-item">
                                    <h4 className="stat-number">1000+</h4>
                                    <p className="stat-label">patterns</p>
                                </div>
                                <div className="stat-item">
                                    <h4 className="stat-number">2 years</h4>
                                    <p className="stat-label">warranty</p>
                                </div>
                                <div className="stat-item">
                                    <h4 className="stat-number">lifetime</h4>
                                    <p className="stat-label">Mobile App Updates</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="video-section" data-reveal>
                        <div className="video-container neu-lifted">
                            <video className="products_video" src={products_video} autoPlay muted loop playsInline preload="auto" />
                        </div>
                    </div>

                    <section className="section3" data-reveal>
                        <div className="section3-left neu-lifted">
                            <img src={play_area} alt="image" />
                            <div className="content">
                                <h2>Designed for Every Space</h2>
                                <p>Our sand tables come in versatile styles—center, coffee, and side tables. Whether in a living room, office, or lounge, each becomes a calming focal point that elevates your space.</p>
                            </div>
                        </div>
                        <div className="section3-right">
                            <div className="view-box neu-lifted" >
                                <div className="view__content">
                                    <h3>Elegant by Design</h3>
                                    <p>Crafted with precision and elegance, the geometric form blends modern luxury with the calming beauty of motion.</p>
                                </div>
                                <img src={diamond_front_view} alt="image" />
                            </div>
                            <div className="view-box neu-lifted">
                                <div className="view__content">
                                    <h3>Endlessly Evolving</h3>
                                    <p> Each Pattern unfolds, fades, and renews—bringing continuous wonder and a unique ambience to your space.</p>
                                </div>
                                <img src={diamond_top_view} alt="image" />
                            </div>
                        </div>
                    </section>

                    <section className="collabs" data-reveal>
                        <h3 className="collabs-title"> Our Collaborations </h3>
                        <div className="collabs-container neu-pressed">
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={40}
                                loop={true}
                                autoplay={{ delay: 0, disableOnInteraction: false }}
                                speed={3000}
                                breakpoints={{
                                    0: { slidesPerView: 2 },
                                    576: { slidesPerView: 3 },
                                    1024: { slidesPerView: 5 },
                                }}
                            >
                                <SwiperSlide> <img className="brand" src={brand1} alt="icon" /> </SwiperSlide>
                                <SwiperSlide> <img className="brand" src={brand2} alt="icon" /> </SwiperSlide>
                                <SwiperSlide> <img className="brand" src={brand3} alt="icon" /> </SwiperSlide>
                                <SwiperSlide> <img className="brand" src={brand4} alt="icon" /> </SwiperSlide>
                                <SwiperSlide> <img className="brand" src={brand5} alt="icon" /> </SwiperSlide>
                                <SwiperSlide> <img className="brand" src={brand6} alt="icon" /> </SwiperSlide>
                            </Swiper>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Home

