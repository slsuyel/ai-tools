import React, { useState } from 'react';
import useCurrencyInfo from '../../../hooks/useCurrencyInfo';
import InputBox from './InputBox';
import Breadcrumb from '../../../components/Breadcrumb';

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmt, setConvertedAmt] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    const swap = () => {
        setConvertedAmt(amount);
        setFrom(to);
        setTo(from);
        setAmount(convertedAmt);
    };

    const convert = () => {
        setConvertedAmt(amount * currencyInfo[to]);
    };

    return (
        <div className="">

            <Breadcrumb title={'currency-converter'} description={'Convert currency online '} />

            <div className=" mx-auto border  rounded-lg p-2">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className=" mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            onAmountChange={(amount) => setAmount(amount)}
                            selectCurrency={from}
                        />
                    </div>
                    <div className="w-100 text-center position-relative">
                        <button
                            className="bg-indigo border-0 fs-6 px-3 py-2"
                            style={{ position: "absolute", top: "-21px", marginLeft: "-7%" }}
                            type="button"
                            onClick={swap}
                        >
                            <i className="fa-solid fa-retweet"></i>  swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmt}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            onAmountChange={(amount) => setAmount(amount)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button
                        type="submit"
                        className="submit-btn mx-auto"
                    >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CurrencyConverter;