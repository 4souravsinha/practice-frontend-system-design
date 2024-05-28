import './App.css'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [user , setUser , removeUser] = useLocalStorage("user" , "" );

  return (
    <div>
      <div>Current User: {user}</div>
      <input value={user} onChange={(e)=>setUser(e.target.value)}/>
      <button onClick={()=>removeUser()}>Logout</button>
    </div>
  )
}

export default App
