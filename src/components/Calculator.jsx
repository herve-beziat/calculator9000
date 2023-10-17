import React from "react";
import BeautifulScreen from "./BeautifulScreen";
// import EqualButton from "./EqualButton";
import NumberButton from "./NumberButton";
// import OperatorButton from "./OperatorButton";

function Calculator() {
    return(
        <>
            <BeautifulScreen/>
            {/* <EqualButton/> */}
            <NumberButton/>
            {/* <OperatorButton/> */}
        </>
    );
}

export default Calculator;