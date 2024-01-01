
import './CalculatorTools.css';
import ScientificCalculator from './ScientificCalculator';

const Calculator = () => {


    return (
        <div className='row w-100 mx-auto '>

            <div className='col-md-6 mx-auto my-2'>
                <ScientificCalculator />
            </div>
        </div>
    );
};

export default Calculator;
