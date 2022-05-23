import React, {useState} from 'react';
import style from './App.module.css';
import {Counter} from "./Counter";

function App() {

    let [count, setCount] = useState(0)

    const maxCounter = 5
    const minCounter = 0
    const addCount = () => {
        setCount(count + 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    return (
        <div className={style.allCounter}>
            <Counter count={count}
                     maxCounter={maxCounter}
                     minCounter={minCounter}
                     addCount={addCount}
                     resetCount={resetCount}/>
        </div>
    );
}

export default App;
