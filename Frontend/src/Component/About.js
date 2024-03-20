import React from 'react';
import '../CSS/About.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const About = () => {
    return (
        <>
            {/* <header className="header1">
                <a href="/home" className="logo1">fashion</a>

                <nav className="navbar1">
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/girls'>Girls Way</Link>
                    <Link to='/boys'>Boys Way</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>
            </header> */}

            <div className='abc'>
                <h1>ABOUT US</h1>
            </div>

            <div className='para'>
                <h3>Title: About Rajputi Poshak by Manisha Baisa

                    Oner:<br/>
                    Manisha Baisa

                    Manisha Panwar is a visionary entrepreneur with a deep-rooted passion for preserving and promoting Rajasthan's rich cultural heritage. With a keen eye for detail and a dedication to quality craftsmanship, Manisha Panwar has been instrumental in reviving interest in traditional Rajputi Poshak among modern audiences.

                    As the driving force behind this cultural revival, Manisha Baisa aims to not only showcase the beauty of Rajasthani attire but also empower local artisans and craftsmen by providing them with opportunities to showcase their skills on a global platform.

                    Through her brand, Manisha Panwar seeks to celebrate the timeless elegance of Rajputi Poshak while ensuring its relevance in contemporary fashion. With a commitment to authenticity and a reverence for tradition, Manisha Panwar's creations continue to captivate audiences worldwide, embodying the spirit of Rajasthan's rich cultural heritage.

                    <br /><span>fashion.......</span></h3>
            </div>

            <div className='line'>
                <h3>Content:
                    Rajputi Poshak is not just a garment; it is a symbol of tradition, elegance, and royalty that epitomizes the essence of Rajasthan. Crafted with meticulous attention to detail, each Rajasthani Poshak tells a story of heritage and cultural richness.

                    When adorned by a woman, the Rajputi Poshak becomes a mesmerizing sight, effortlessly blending elegance and grace in its purest form. The intricate embroidery, vibrant colors, and luxurious fabrics come together to create a regal attire that captures the essence of Rajasthan's majestic history.

                    Every fold and embellishment of the Rajputi Poshak reflects the craftsmanship and artistry passed down through generations, making it a timeless attire that transcends fashion trends. Whether worn on special occasions or as a daily attire, the Rajputi Poshak exudes sophistication and reverence for tradition.<br /> because a women exibiting this dress reflects elegance and grace<br /> in the purest of it form.</h3>
            </div>


        </>
    );
};

export default About;
