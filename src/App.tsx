import React, {useState} from 'react';
import './App.css'
import {Button} from "./Button";



type FitlerType = 'all' | 'dollars' | 'rubles'
export const App = () => {

        const money=[
            {banknots: 'dollars', value: 100, number: ' a1234567890'},
            {banknots: 'dollars', value: 50, number: ' z1234567890'},
            {banknots: 'rubls', value: 100, number: ' w1234567890'},
            {banknots: 'dollars', value: 100, number: ' e1234567890'},
            {banknots: 'dollars', value: 50, number: ' c1234567890'},
            {banknots: 'rubls', value: 100, number: ' r1234567890'},
            {banknots: 'dollars', value: 50, number: ' x1234567890'},
            {banknots: 'rubls', value: 50, number: ' v1234567890'},
        ]
        const [filter, setFilter] = useState<FitlerType>('all')

    let currentMoney = money
        if (filter === 'dollars') {
            currentMoney = money.filter(el => el.banknots === 'dollars')
        }
        if (filter === 'rubles') {
             currentMoney = money.filter(el => el.banknots === 'rubls')
        }
        const onClickFilterHandler = (NameButton:FitlerType) => {
            setFilter(NameButton)
        }


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
                {currentMoney.map(el => {
                    return (
                        <div key={el.number}>
                            <span>{el.banknots} - </span>
                            <span>{el.value} - </span>
                            <span>{el.number}</span>
                        </div>
                    )
                })}
                <Button title={'all'} callback={() => onClickFilterHandler('all')}/>
                <Button title={'ruble'} callback={() => onClickFilterHandler('rubles')}/>
                <Button title={'dollars'} callback={() => onClickFilterHandler('dollars')}/>

                <h1>{num}</h1>
                <Button title={'increase'} callback={increaseNum}/>
                <Button title={'reset'} callback={resetNum}/>
            </div>
        );
    }


















