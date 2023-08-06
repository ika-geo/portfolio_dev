import "./strengths.css"
import SmokeEffect from "../smokeEffect/SmokeEffect";


const strengthsItem: string[] = ['Focus on results', 'Problem-solving', 'Attention to details', 'Collaboration', 'Time management', 'Motivated']


const Strengths = () => {
    return (
        <div className="strengths__block">
            <h1 className="subTitle center">Strengths</h1>
            <ul>
                <SmokeEffect
                    arr={strengthsItem}
                    height={strengthsItem.length}
                />
            </ul>

        </div>
    );
};

export default Strengths;