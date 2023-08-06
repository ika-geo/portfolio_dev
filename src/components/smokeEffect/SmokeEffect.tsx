import "./smokeEffect.css"



const SmokeEffect = ({arr, height}:{arr:string[], height:number}) => {
    return (
        <div className="circleRing">
            <div className="circleBlock">
                <div className="circle" style={{height:`${(height*44)+250}px`}}>
                </div>
                <p className="circleText">
                    {arr.map(item=>
                        <p>{item}</p>
                    )}
                </p>
            </div>

            <svg>
                <filter id="wavy">
                    <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
                        <animate attributeName="baseFrequency" dur="60s" values="0.02;0.005;0.02"
                                 repeatCount="indefinite"></animate>
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
                </filter>
            </svg>
        </div>
    )
};

export default SmokeEffect;