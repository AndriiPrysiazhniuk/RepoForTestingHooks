import React, {useState} from 'react';
import './App.css'
import {Button} from "./Button";

export const App = () => {
// let num =1
    const [num, setNum] = useState(1)
    const increaseNum = () => {
        if (num >= 0 && num<10) {
            // num <= 10
            setNum(num + 1)
        }
        if(num ===10 ){
            setNum(0)
        }
    }
    const resetNum=()=>{
        setNum(0)
    }
    return (
        <div className={'App'}>
            <h1>{num}</h1>
            <Button title={'click me to +'} callback={increaseNum}/>
            <Button title={'reset'} callback={resetNum}/>
        </div>
    );
};