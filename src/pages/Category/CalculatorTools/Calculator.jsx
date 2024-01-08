
import Breadcrumb from '../../../components/Breadcrumb';
import './CalculatorTools.css';
import ScientificCalculator from './ScientificCalculator';

const Calculator = () => {


    return (
        <div className='row w-100 mx-auto '>

            <Breadcrumb title={'Calculator'} description={'Your Best online Calculator'} />

            <div className='col-md-8 mx-auto my-2'>
                <ScientificCalculator />
            </div>
        </div>
    );
};

export default Calculator;
