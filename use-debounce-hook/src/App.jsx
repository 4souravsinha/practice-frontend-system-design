import { useState } from 'react'
import './App.css'
import useDebounce from '../custom-hooks/use-debounce';
function App() {
  const [count, setCount] = useState(0)

  const [inputText , setInputText] = useState('');

  function handleChange(e){
    setInputText(e.target.value);
  }

  const debouncedValue = useDebounce(inputText);


  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
      <span>{debouncedValue}</span>
      <input value={inputText} onChange={handleChange} placeholder='enter something'/>
    </>
  )
}

export default App
