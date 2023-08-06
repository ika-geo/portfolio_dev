import Ball from "../components/ball/Ball";

interface WorkItem{
    years: [number, number] | [number, 'present'],
    duties: string,
    position: string,
    companyName: string,
    companyLink: string
}

const workItems: WorkItem[] = [
    {
        years: [2014, 2016],
        duties: 'Search for descriptions and pictures of products on the Internet, create descriptions, edit pictures, add to the site.',
        position: 'Digital Content Manager',
        companyName: "Ecommerce be.ge",
        companyLink: "https://www.be.ge/",
    },

    {
        years: [2017, 'present'],
        duties: 'Search for descriptions and pictures of products on the Internet, create descriptions in three languages (Georgian, Russian, English), edit pictures, add to the site.',
        position: 'Digital Content Manager',
        companyName: "Ecommerce domino",
        companyLink: "https://www.domino.com.ge/en/"
    },
]


const WorkExperience = () => {
    return (
        <div className="workExperience block">

            <Ball
                top={0}
                left={50}
                className='centerX'
                color="#ff6161"
            />


            <div className="wrapper">
                <div className="workExperience__block">
                    <h1 className="workExperience__title center title">WORK EXPERIENCE</h1>
                    {workItems.map(item =>
                        <div className="workItem flex">
                            <h2 className="years subTitle">{item.years[0]}-{item.years[1]}</h2>
                            <p className="duties text">{item.duties}</p>
                            <div className="position">
                                <h2 className="position__item subTitle coloredText1">{item.position}</h2>
                                <a className='position__company coloredText2' target='_blank'
                                   href={item.companyLink}>{item.companyName}</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;