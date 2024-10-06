import { useState, useEffect } from "react";

const CounterComp = (props) => {
    // const initialCount = useRef(props.count ? props.count : 0);
    const initialCount = props.count ? props.count : 0;
    const [count, setCounter] = useState(initialCount);

    useEffect(() => {
        let storedVal = localStorage.getItem('count');
        setCounter(storedVal ? Number(storedVal) : initialCount);
    }, []);

    const updateLocalStorage = (count) => {
        if(count === 0 || count <= initialCount) {
            localStorage.removeItem('count');
        } else {
            localStorage.setItem('count', count);
        }
    }
    //increase counter
    const incrementCount = () => {
        if (count < 20) {
            let newCount = count + 1;
            setCounter(count => newCount);
            updateLocalStorage(newCount);
        }
    };

    //decrease counter
    const decrementCount = () => {
        if (count > 0 && count > initialCount) {
            let newCount = count - 1;
            setCounter(count => newCount);
            updateLocalStorage(newCount);
        }
    };
    //reset counter 
    const reset = () => {
        setCounter(initialCount);
        updateLocalStorage(initialCount);
    }

    // const count = props.count;
    return (
        <div className="counter">
            <h1>React Counter from {initialCount}</h1>
            <span className={count > 10 ? "counter__output_10" : "counter__output"}>{count}</span>
            <div className="btn__container">
                <button className="control__btn" onClick={incrementCount}>Increment</button>
                <button className="control__btn" onClick={decrementCount}>Decrement</button>
                <button className="reset" onClick={reset} style={{ display: (count === initialCount ? "none" : "") }}>Reset</button>
            </div>
        </div>
 
    );
}
export default CounterComp;