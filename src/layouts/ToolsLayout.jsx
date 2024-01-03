import React from 'react';
import { useLocation } from 'react-router-dom';
import AgeCalculator from '../pages/Category/CalculatorTools/AgeCalculator';
import Calculator from '../pages/Category/CalculatorTools/Calculator';
import NotFound from '../components/NotFound';
import Loader from '../components/Loader';
import BmiCalculator from '../pages/Category/CalculatorTools/BmiCalculator';
import GPACalculator from '../pages/Category/CalculatorTools/GPACalculator';
import CurrencyConverter from '../pages/Category/FinanceTools/CurrencyConverter';
import BkashCashOutCharge from '../pages/Category/FinanceTools/BkashCashOutCharge';
import NagadCal from './../pages/Category/FinanceTools/NagadCal';
import UrlShortener from '../pages/Category/UtilityTools/UrlShortner/UrlShortner';

const ToolsLayout = () => {
    const location = useLocation();
    const path = location.pathname.split('/').pop()
    if (!path || !location) {
        return <Loader />
    }
    return (
        <div className='row w-100 mx-auto bg-gradient py-5' style={{ paddingBottom: '80px' }} /*  */>

            <div className='col-md-8'>
                {
                    path == 'age-calculator' ?
                        <AgeCalculator /> :
                        path == 'calculator' ?
                            <Calculator /> :
                            path == 'bmi-calculator' ?
                                <BmiCalculator /> :
                                path == 'gpa-calculator' ?
                                    <GPACalculator /> :
                                    path == 'currency-converter' ?
                                        <CurrencyConverter /> :
                                        path == 'bkash-cash-out-charge' ?
                                            <BkashCashOutCharge /> :
                                            path == 'nagad-cash-out-charge' ?
                                                <NagadCal /> :
                                                path == 'url-shortner' ?
                                                    <UrlShortener /> :


                                                    <NotFound />
                }
            </div>
            <div className='col-md-4'>
                <h1 className='text-white text-center'>Sidebar</h1>
            </div>

        </div>
    );
};

export default ToolsLayout;