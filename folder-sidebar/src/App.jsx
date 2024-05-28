import { useState } from 'react'
import './App.css'
import { fileSystem } from './data/folder-structure'
import Folder from './components/Folder';
function App() {
  
  const [folders , setFolders] = useState(fileSystem);

  return (
    <Folder folder={folders}/>
  )

}

export default App
