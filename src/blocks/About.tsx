import Ball from "../components/ball/Ball";
import AboutTop from "../components/about/AboutTop";
import AboutBottom from "../components/about/AboutBottom";


const About = () => {
    return (
        <div className="about block" id='About'>

            <Ball
                className={"center"}
                top={50}
                left={50}
                color={"white"}
            />

            <div className="wrapper">

                <div className="about__block">

                    <h1 className="title center about__Title">ABOUT ME</h1>

                    <div className="about_top grid2">
                        <AboutTop/>
                    </div>


                    <AboutBottom/>

                </div>
            </div>
        </div>
    );
};


export default About;