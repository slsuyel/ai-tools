/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const ScientificCalculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
    let val = 0.0;

    const addChar = (character) => {
        setDisplayValue((prevValue) => (prevValue === '0' ? character : prevValue + character));
    };

    const cos = () => {
        setDisplayValue(Math.cos(parseFloat(displayValue)).toString());
    };

    const sin = () => {
        setDisplayValue(Math.sin(parseFloat(displayValue)).toString());
    };

    const tan = () => {
        setDisplayValue(Math.tan(parseFloat(displayValue)).toString());
    };

    const sqrt = () => {
        setDisplayValue(Math.sqrt(parseFloat(displayValue)).toString());
    };

    const ln = () => {
        setDisplayValue(Math.log(parseFloat(displayValue)).toString());
    };

    const exp = () => {
        setDisplayValue(Math.exp(parseFloat(displayValue)).toString());
    };

    const deleteChar = () => {
        setDisplayValue((prevValue) => prevValue.substring(0, prevValue.length - 1));
    };

    const percent = () => {
        val = parseFloat(displayValue);
        setDisplayValue((prevValue) => prevValue + '%');
    };

    const changeSign = () => {
        setDisplayValue((prevValue) =>
            prevValue.substring(0, 1) === '-' ? prevValue.substring(1) : '-' + prevValue
        );
    };

    const compute = () => {
        setDisplayValue(eval(displayValue).toString());
    };

    const square = () => {
        setDisplayValue((prevValue) => (eval(prevValue) * eval(prevValue)).toString());
    };

    const checkNum = (str) => {
        for (let i = 0; i < str.length; i++) {
            const ch = str.charAt(i);
            if (
                (ch < '0' || ch > '9') &&
                ch !== '/' &&
                ch !== '*' &&
                ch !== '+' &&
                ch !== '-' &&
                ch !== '.' &&
                ch !== '(' &&
                ch !== ')' &&
                ch !== '%'
            ) {
                alert('Invalid entry!');
                return false;
            }
        }
        return true;
    };

    return (
        <form className="sci-calc py-3 pb-5 main">
            <table className="calculator mx-auto primary-bg pb-4 rounded-0" cellSpacing={0} cellPadding={1}>
                <tbody>
                    <tr>
                        <td colSpan={5}>
                            <input
                                id="display"
                                name="display"
                                value={displayValue}
                                size={28}
                                maxLength={25}
                                readOnly
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="button"
                                className="btnTop"
                                name="btnTop"
                                value="C"
                                onClick={() => setDisplayValue('0')}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnTop"
                                name="btnTop"
                                value="<--"
                                onClick={deleteChar}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnTop"
                                name="btnTop"
                                value="="
                                onClick={compute}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnOpps"
                                name="btnOpps"
                                value="π"
                                onClick={() => addChar('3.14159265359')}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnMath"
                                name="btnMath"
                                value="%"
                                onClick={percent}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="button"
                                className="btnNum"
                                name="btnNum"
                                value={7}
                                onClick={() => addChar('7')}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnNum"
                                name="btnNum"
                                value={8}
                                onClick={() => addChar('8')}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnNum"
                                name="btnNum"
                                value={9}
                                onClick={() => addChar('9')}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnOpps"
                                name="btnOpps"
                                value="x^"
                                onClick={() => addChar('^')}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnMath"
                                name="btnMath"
                                value="/"
                                onClick={() => addChar('/')}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="button"
                                className="btnNum"
                                name="btnNum"
                                value={4}
                                onClick={() => addChar('4')}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnNum"
                                name="btnNum"
                                value={5}
                                onClick={() => addChar('5')}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnNum"
                                name="btnNum"
                                value={6}
                                onClick={() => addChar('6')}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnOpps"
                                name="btnOpps"
                                value="ln"
                                onClick={ln}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnMath"
                                name="btnMath"
                                value="*"
                                onClick={() => addChar('*')}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="button"
                                className="btnNum"
                                name="btnNum"
                                value={1}
                                onClick={() => addChar('1')}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnNum"
                                name="btnNum"
                                value={2}
                                onClick={() => addChar('2')}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnNum"
                                name="btnNum"
                                value={3}
                                onClick={() => addChar('3')}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnOpps"
                                name="btnOpps"
                                value="√"
                                onClick={sqrt}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnMath"
                                name="btnMath"
                                value="-"
                                onClick={() => addChar('-')}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="button"
                                className="btnMath"
                                name="btnMath"
                                value="±"
                                onClick={changeSign}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnNum"
                                name="btnNum"
                                value={0}
                                onClick={() => addChar('0')}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnMath"
                                name="btnMath"
                                value="."
                                onClick={() => addChar('.')}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnOpps"
                                name="btnOpps"
                                value="x2"
                                onClick={square}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnMath"
                                name="btnMath"
                                value="+"
                                onClick={() => addChar('+')}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="button"
                                className="btnMath"
                                name="btnMath"
                                value="("
                                onClick={() => addChar('(')}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnMath"
                                name="btnMath"
                                value=")"
                                onClick={() => addChar(')')}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnMath"
                                name="btnMath"
                                value="cos"
                                onClick={cos}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnMath"
                                name="btnMath"
                                value="sin"
                                onClick={sin}
                            />
                        </td>
                        <td>
                            <input
                                type="button"
                                className="btnMath"
                                name="btnMath"
                                value="tan"
                                onClick={tan}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
};

export default ScientificCalculator;
