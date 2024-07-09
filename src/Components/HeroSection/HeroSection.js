import React
// ,{ useState, useEffect }
from "react";
import { Button } from "../Button/Button";
import "./HeroSection.css";

const HeroSection = () => {
    
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //     const handleResize = () => {
    //       setWindowWidth(window.innerWidth);
    //     };
    
    //     window.addEventListener("resize", handleResize);
        
    //     // Cleanup event listener on component unmount
    //     return () => {
    //       window.removeEventListener("resize", handleResize);
    //     };
    //   }, []);

    return (
        <div className="hero-container">
            {/* <video src="/videos/video-hs-1.mp4" autoPlay loop muted />
            <video src="/videos/video-hs-2.mp4" autoPlay loop muted />
            <video src="/videos/video-hs-3.mp4" autoPlay loop muted />
            <video src="/videos/video-hs-4.mp4" autoPlay loop muted /> */}
            <video src="/videos/video-hs-1234.mp4" autoPlay loop muted />
            <h1>¡Que tu fiesta sea magica!</h1>
            <p>¿Que estas esperando?</p>
            <div class="hero-btns">
                <Button
                    className="btn"
                    // btnStyle="btn--outline-r"
                    btnStyle="btn--primary"
                    btnSize="btn--large"
                    path="/servicios/espejo_magico"
                >
                    ESPEJO MAGICO <i className="fa fa-light fa-camera icon-on-button"></i>
                </Button>
                <Button
                    className="btn"
                    btnStyle="btn--outline-r"
                    btnSize="btn--large"
                    path="/servicios/plataforma_360"
                >
                    PLATAFORMA 360° <i className="fa fa-refresh fa-spin icon-on-button"></i>
                </Button>
                <Button
                    className="btn"
                    btnStyle="btn--outline-r"
                    btnSize="btn--large"
                    path="/servicios/shimmer_wall"
                >
                    SHIMMER WALL <i class="fa fa-regular fa-star"></i>
                </Button>
            </div>

            {/* <div className="window-width-indicator">
                {windowWidth}px
            </div> */}

        </div>
    );
};

export default HeroSection;