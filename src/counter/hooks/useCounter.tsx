import { useState } from "react";

export const useCounter = ( initialValue: number = 0 ) => {

 const [ counter, setCounter ] = useState(initialValue);

    const handleAdd = () => {
        setCounter( counter + 1 )
    }

    const handleSubtract = () => {
        setCounter( ( previousValue ) => previousValue - 1 )
    }

    const handleReset = () => {
        setCounter(0)
    }

  return {

    // Values
    // counter: counter,
    counter,


    // Methods / Actions
    handleAdd,
    handleSubtract,
    handleReset
  }
}
