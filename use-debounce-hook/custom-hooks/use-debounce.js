import { useEffect, useRef, useState } from "react";

function useDebounce(value){
  const [debouncedValue , setDebouncedValue] = useState(value);

  let intervalId = useRef(null);

  useEffect(()=>{

    intervalId.current = setTimeout(()=>{
      setDebouncedValue(value);
    }, 2000)

    return () => clearTimeout(intervalId.current)

  }, [value])

  return debouncedValue
}

export default useDebounce;
