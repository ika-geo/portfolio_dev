import Strengths from "../strengths/Strengths";
import TechnologiesItem from "../technologiesItem/TechnologiesItem";
import AboutText from "./AboutText";

const technologiesItem: { technology: string, color: string }[] = [
    {
        technology: 'html',
        color: "#dd4b25"
    },
    {
        technology: 'css',
        color: "#2EA7D9FF"
    },
    {
        technology: 'scss',
        color: "#c96195"
    },
    {
        technology: 'JavaScript',
        color: "#efd81d"
    },
    {
        technology: 'typescript',
        color: "#2f74c0"
    },
    {
        technology: 'react',
        color: "#00d1f7"
    },
    {
        technology: 'git',
        color: "#e04c31"
    },
]

const AboutTop = () => {
    return (
            <>
                <div className="about__strengths">
                    <Strengths/>
                </div>

                <div>

                    <AboutText/>

                    <h2 className="subTitle center">Technologies</h2>
                    <div className="Technologies__block flexEvenly">
                        {technologiesItem.map(item =>
                            <TechnologiesItem
                                key={item.technology}
                                technology={item.technology}
                                color={item.color}
                            />
                        )}
                    </div>
                </div>
            </>
    );
};

export default AboutTop;