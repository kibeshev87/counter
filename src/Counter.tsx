import React, {useState} from 'react';
import style from './App.module.css';

type CounterPropsType = {
    count: number
    maxCounter: number
    minCounter: number
    addCount: () => void
    resetCount: () => void
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={style.counter}>
            <div className={style.display}>
               <span className={props.count === props.maxCounter ? style.error : ''}>{props.count}</span>
            </div>
            <div className={style.buttonContainer}>
                <button className={style.buttonContainer} disabled={props.count === props.maxCounter}
                        onClick={props.addCount}>Inc
                </button>
                <button className={style.buttonContainer} disabled={props.count === props.minCounter}
                        onClick={props.resetCount}>Reset
                </button>
            </div>
        </div>

    )
}

