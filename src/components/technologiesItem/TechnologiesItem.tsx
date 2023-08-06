import "./technologiesItem.css"

const TechnologiesItem = ({technology, color}:{technology:string, color:string}) => {
    return (
        <div className="technologiesItem" style={{borderTopColor:`${color}`, color:`${color}`}}>{technology}</div>
    );
};

export default TechnologiesItem;