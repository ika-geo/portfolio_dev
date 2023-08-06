import {useState} from "react";

import Header from "./blocks/Header";
import Greetings from "./blocks/Greetings";
import About from "./blocks/About";
import WorkExperience from "./blocks/WorkExperience";
import Education from "./blocks/Education";
import Portfolio from "./blocks/Portfolio";

import ReactGA from 'react-ga';


import "./assets/style/style.css"




function App(){

    const [animate, setAnimate] = useState(false)

    function handleBall(){
        setAnimate(animate => !animate)
    }


    //google analytics
    ReactGA.initialize('G-FQ5H2VEZE1');
    ReactGA.pageview(window.location.pathname + window.location.search);



    return (
        <div className={"container" + (animate ? " ball" : "")} id='Header'>
            <div className="css-blurry-gradient"></div>
            <Header
                handleBall={handleBall}
                ball={animate}
            />
            <Greetings/>
            <About/>
            <WorkExperience/>
            <Education/>
            <Portfolio/>
        </div>
    );
}

export default App;
