import React, { useState } from "react";
import "./calculator.css";
import { faDivide, faMinus, faPlusMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Calculator = () => {

    const [input, setInput] = useState("0");

    const [random, setRandom] = useState("#e7e7e7");
    const [inside, setInside] = useState("#ed8702");

    const [divide, setDivide] = useState("#ed8702");
    const [divideIn, setDivideIn] = useState("#e7e7e7");

    const [xmark, setXmark] = useState("#ed8702");
    const [xmarkIn, setXmarkIn] = useState("#e7e7e7");

    const [minus, setMinus] = useState("#ed8702");
    const [minusIn, setMinusIn] = useState("#e7e7e7");

    const [plus, setPlus] = useState("#ed8702");
    const [plusIn, setPlusIn] = useState("#e7e7e7");

    const Divid = () => {
        setDivide(random)
        setDivideIn(inside)
    }

    const Xma = () => {
        setXmark(random)
        setXmarkIn(inside)
    }

    const Min = () => {
        setMinus(random)
        setMinusIn(inside)
    }

    const Plu = () => {
        setPlus(random)
        setPlusIn(inside)
    }

    const typeNum = (value) => {
        setInput((prevInput) => prevInput === "0" ? value : prevInput + value);
        if (value == "/") {
            Divid()
        } else if (value == "*") {
            Xma()
        } else if (value == "-") {
            Min()
        } else if (value == "+") {
            Plu()
        } else if (value == "l") {
            setInput( "-" + input)    
        }
    };

    const ravno = () => {
        try{
            setInput(eval(input).toString());
        }catch{
            setInput("ERROR");
        }
        
        setDivide(inside)
        setDivideIn(random)
        setXmark(inside)
        setXmarkIn(random)
        setMinus(inside)
        setMinusIn(random)
        setPlus(inside)
        setPlusIn(random)
    };

    const Clear = () => {
        setInput("0");
        setDivide(inside)
        setDivideIn(random)
        setXmark(inside)
        setXmarkIn(random)
        setMinus(inside)
        setMinusIn(random)
        setPlus(inside)
        setPlusIn(random)
    };

    const Slice = () => {
        setInput(input.slice(0, -1))
    };

    return (
        <div className="container">
            <div className="PAPA">
            <div className="block-input">
                <input type="text" value={input} readOnly className="input" />
            </div>
            <div className="buttons">
                <div className="leftSide">
                    <div className="lightGrey">
                        <button className="btn lgr" onClick={Clear}>C</button>
                        <button className="btn lgr" onClick={Slice}>CE</button>
                        <button className="btn lgr" onClick={() => typeNum("l")}><FontAwesomeIcon icon={faPlusMinus} className="icon" /></button>
                        <button className="btn imp" style={{ backgroundColor: divide, color: divideIn }} onClick={() => typeNum("/")}><FontAwesomeIcon icon={faDivide} className="icon" /></button>
                    </div>
                    <div className="numbers">
                        <button className="btn nmb" onClick={() => typeNum("1")}>1</button>
                        <button className="btn nmb" onClick={() => typeNum("2")}>2</button>
                        <button className="btn nmb" onClick={() => typeNum("3")}>3</button>
                        <button className="btn orng" style={{ backgroundColor: xmark, color: xmarkIn }} onClick={() => typeNum("*")}><FontAwesomeIcon icon={faXmark} className="icon" /></button>
                        <button className="btn nmb" onClick={() => typeNum("4")}>4</button>
                        <button className="btn nmb" onClick={() => typeNum("5")}>5</button>
                        <button className="btn nmb" onClick={() => typeNum("6")}>6</button>
                        <button className="btn orng minus" style={{ backgroundColor: minus, color: minusIn }} onClick={() => typeNum("-")}><FontAwesomeIcon icon={faMinus} className="icon" /></button>
                        <button className="btn nmb" onClick={() => typeNum("7")}>7</button>
                        <button className="btn nmb" onClick={() => typeNum("8")}>8</button>
                        <button className="btn nmb" onClick={() => typeNum("9")}>9</button>
                        <button className="btn orng" style={{ backgroundColor: plus, color: plusIn }} onClick={() => typeNum("+")}>+</button>
                        <button className="btn nmb zero" onClick={() => typeNum("0")}>0</button>
                        <button className="btn nmb zpt" onClick={() => typeNum(",")}>,</button>
                        <button className=" ravn" onClick={ravno}>=</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Calculator;