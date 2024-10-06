import { useState, useMemo } from 'react'

export default function CounterMemo() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)


    // memoized isEven
    const isEven = useMemo(() => {
        console.log("Rendering counter with useMemo");
        let i = 0
        while (i < 2000000000) i++
        return countOne % 2 === 0
    }, [countOne])

    return (
        <div>
            <div>
                <button onClick={() => setCountOne(countOne + 1)}>Count One - {countOne}</button>
                {/* Update isEven to reference value instead of function*/}
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={() => setCountTwo(countTwo + 1)}>Count Two - {countTwo}</button>
            </div>
        </div>
    )
}