import { useState} from 'react';
const useLocalStorage = (key , defaultValue)=>{
  const isBrowser = typeof window !== "undefined"
  if(!isBrowser) return defaultValue

  if(key == null){
    throw new Error("no key")
  }

   let data = localStorage.getItem(key);
   data = data != null ? JSON.parse(data) : defaultValue
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [localData, setLocalData] = useState(data)
  localStorage.setItem(key , JSON.stringify(data))

  const set = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setLocalData(newValue)
  }

  const reset = () => {
    localStorage.setItem(key , '')
    setLocalData('')
  }

  return [localData , set , reset ]
}

export default useLocalStorage
