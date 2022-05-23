import React, {useState} from 'react';
import style from './App.module.css'

export const CounterWithLocalStorage = () => {

    let [value, setValue] = useState(0)

    const incHandler = () => {
        setValue(value + 1)
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
    }

    const getFromLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }

    const clearLocalStorageHandler = () => {
        localStorage.clear()
    }

    const removeLocalStorageHandler = () => {
        localStorage.removeItem('counterValue + 1')
    }

    return (
        <div className={style.allCounter}>
            <div className={style.counter}>
                <span className={style.display}>{value}</span>
            </div>
            <div className={style.buttonContainer}>
                <button onClick={incHandler}>Inc</button>
                <button onClick={setToLocalStorageHandler}>Set</button>
                <button onClick={getFromLocalStorageHandler}>Get</button>
                <button onClick={clearLocalStorageHandler}>Clear</button>
                <button onClick={removeLocalStorageHandler}>Remove</button>
            </div>
        </div>
    );
};

