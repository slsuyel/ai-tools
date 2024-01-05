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
import QRCodeGenerator from '../pages/Category/UtilityTools/UrlShortner/QRCodeGenerator/QRCodeGenerator';
import RrandomPasswordGenerator from '../pages/Category/RandomGenerators/RrandomPasswordGenerator/RrandomPasswordGenerator';
import RightSideBar from '../pages/Shared/RightSideBar';
import LanguageTranslate from '../pages/Category/LanguageTools/LanguageTranslate/LanguageTranslate';
import SpellCheckerPage from '../pages/Category/LanguageTools/SpellChecker/SpellCheckerPage';
import ImageToTextPage from '../pages/Category/FileTools/ImageToTextPage';

const ToolsLayout = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const segments = pathname.split('/');
    const categoryName = segments[1];
    const path = segments[segments.length - 1];

    if (!path || !location || !categoryName) {
        return <Loader />
    }

    return (
        <div className='row w-100 mx-auto bg-gradient py-5 mt-3' style={{ paddingBottom: '80px' }} /*  */>

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
                                                    path == 'qr-code-generator' ?
                                                        <QRCodeGenerator /> :
                                                        path == 'random-password-generator' ?
                                                            <RrandomPasswordGenerator /> :
                                                            path == 'language-translate' ?
                                                                <LanguageTranslate /> :
                                                                path == 'spell-checker' ?
                                                                    <SpellCheckerPage /> :
                                                                    path == 'image-to-text' ?
                                                                        <ImageToTextPage /> :


                                                                        <NotFound />
                }
            </div>


            <div className='col-md-4'>
                <RightSideBar categoryName={categoryName} />
            </div>

        </div>
    );
};

export default ToolsLayout;