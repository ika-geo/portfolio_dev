import Ball from "../components/ball/Ball";


const educationItems = ["Self-taught", "Official documentation", "Professional courses", "w3school", ]


const Education = () => {
    return (
        <div className="education block">
           <Ball
               top={70}
               left={0}
               color="#0072ff"
            />

           <Ball
               top={70}
               bottom={0}
               right={0}
               color="#0072ff"
            />


            <div className="wrapper">
                <div className="education__block">
                    <h1 className="title center">EDUCATION</h1>
                    <div className="education__items grid4">
                        {educationItems.map(item=>
                            <div className='subTitle'>{item}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;