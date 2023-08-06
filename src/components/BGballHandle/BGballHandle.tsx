import "./bgBallHandle.css"

const BGBallHandle = ({ball, handleBall, className}:{ball:boolean, handleBall:()=>void, className:string}) => {
    return (
        <div className={className}>
            <label className="container">
                <input
                    id="Ball"
                    checked={ball}
                    onChange={handleBall}
                    type="checkbox"/>
                <div className="checkmark"></div>
            </label>

            <label
                style={{cursor:"pointer"}}
                htmlFor="Ball">{ball?"Hide background":"Show background"}
            </label>
        </div>
    );
};

export default BGBallHandle;