/* eslint-disable react/prop-types */
import React, { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId()
    return (
        <div className={`bg-white flex p-3 rounded-lg ${className}`}>
            <div className="w-50 my-2">
                <label htmlFor={amountInputId} className="">{label}</label>
                <input
                    id={amountInputId}
                    className="form-control"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="fw-bold text-right w-50">
                <p className="">Currency Type</p>
                <select className="form-select" value={selectCurrency}

                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;