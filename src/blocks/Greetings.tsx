import Typewriter from "../components/typewritter/Typewriter";
import Ball from "../components/ball/Ball";

const Greetings = () => {
    return (
        <div className="greetings block">
            <Ball
                color={"violet"}
            />
            <Ball
                right={0}
                color={"cyan"}
            />


            <div className="wrapper">
                <div className="greetings__block flexBetween">
                    <div className="hello">
                        <h1 className="coloredText2 title">Hello,</h1>
                        <h1 className="title">I Am</h1>
                        <p className="coloredText1 title">
                            <Typewriter textArray={["ika", "React Developer", "Front-end developer"]}/>
                        </p>

                    </div>
                    <div className="hello__img flex">
                        <img src={require("../assets/img/header.webp")} alt="code"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Greetings;