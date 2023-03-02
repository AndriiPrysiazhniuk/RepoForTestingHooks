import React, {useState} from 'react';
import './App.css'
import {Button} from "./Button";

type FilterType = 'all' | 'rubls' | 'dollars'

export const App = () => {

    const [num, setNum] = useState(1)
    const increaseNum = () => {
        if (num >= 0 && num < 10) {
            // num <= 10
            setNum(num + 1)
        }
        if (num === 10) {

            setNum(0)
        }
    }
    const resetNum = () => {
        setNum(0)

    }


    const money = [
        {banknots: 'dollars', value: 100, number: ' a1234567890'},
        {banknots: 'dollars', value: 50, number: ' z1234567890'},
        {banknots: 'rubls', value: 100, number: ' w1234567890'},
        {banknots: 'dollars', value: 100, number: ' e1234567890'},
        {banknots: 'dollars', value: 50, number: ' c1234567890'},
        {banknots: 'rubls', value: 100, number: ' r1234567890'},
        {banknots: 'dollars', value: 50, number: ' x1234567890'},
        {banknots: 'rubls', value: 50, number: ' v1234567890'},
    ]

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money
    if (filter === 'rubls') {
        currentMoney = money.filter(el => el.banknots === 'rubls')
    }
    if (filter === 'dollars') {
        currentMoney = money.filter(el => el.banknots ==='dollars')
    }
    const onClickHandler = (message: FilterType) => {
        setFilter(message)
    }

    return (
        <div className={'App'}>
            <h1>{filter}</h1>
            {currentMoney.map(el => {
                return (
                    <div key={el.number}>
                        <span>{el.banknots} - </span>
                        <span>{el.value} - </span>
                        <span>{el.number}</span>
                    </div>
                )
            })}
            <Button title={'all'} callback={() => onClickHandler('all')}/>
            <Button title={'rubls'} callback={() => onClickHandler('rubls')}/>
            <Button title={'dollars'} callback={() => onClickHandler('dollars')}/>

            <h1>{num}</h1>
            <Button title={'increase'} callback={increaseNum}/>
            <Button title={'reset'} callback={resetNum}/>
        </div>
    );
}


















