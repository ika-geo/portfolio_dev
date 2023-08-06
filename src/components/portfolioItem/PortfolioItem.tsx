import "./portfolioItem.css"

interface PortfolioItemInterface{
    img: string,
    url: string,
    github: string,
    technologies: string[],
    React: boolean
}

const PortfolioItem = (props:PortfolioItemInterface) => {
    return (
        <div className="cardItem">
            <img src={require('../../assets/img/portfolio/'+props.img)} alt=""/>
            {props.React&&<div className='react'>react</div>}

            <div className="onHover">

                <ul className="technologies">
                    <h2 className='subTitle'>Technologies</h2>
                    <ul className="technologies__items flex">
                        {props.technologies.map(item=>
                            <li className='technologies__item text' key={item}>{item}</li>
                        )}
                    </ul>

                </ul>

                <a href={props.github} className="github subTitle coloredText1" target='_blank'>Github page</a>

                <a href={props.url} className='link subTitle coloredText2' target='_blank'>Visit page</a>
            </div>
        </div>
    );
};

export default PortfolioItem;