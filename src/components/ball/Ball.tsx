import "./ball.css"


interface BallStyle{
    color?: string,
    className?: string,
    blur?: number,
    opacity?: number,
    top?: number,
    bottom?: number,
    left?: number,
    right?: number,
    center?: string
}

const Ball = ({
                  color = `rgb(255, 255, 255)`,
                  className = "",
                  blur = 347,
                  opacity = 0.4,
                  top,
                  bottom,
                  left,
                  right
              }: BallStyle) => {

    return (
        <>
            {<div
                className={"ball " + className}
                style={{
                    background: color,
                    filter: `blur(${blur}px)`,
                    opacity: opacity,
                    top: `${top}%`,
                    bottom: `${bottom}%`,
                    left: `${left}%`,
                    right: `${right}%`,
                }}
            ></div>}
        </>
    );
}


export default Ball;