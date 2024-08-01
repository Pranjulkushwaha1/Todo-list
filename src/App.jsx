import { useState } from 'react'
import './App.css'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";



function App() {
  const [input, setInput] =useState("");
  const [list, setList] = useState([]);
  const [uid, setUid] = useState();
  const [update, setUpdate] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleTask = (e) => {
    setList([...list,input])
    setInput("")
  }
const handleDelete = (i) => {
  const filterList = list.filter((elm)=>elm != list[i])
  console.log(filterList)
  setList(filterList)
}
const handleEdit = (i) =>{
  const filterList = list.filter((elm)=>elm === list[i])
  setInput(filterList[0])
  setUid(i)
  setUpdate(true)
}
const handleUpdate = () => {
  list.splice(uid, 1, input);
   setInput("")
   setUpdate(false);
}
  return (
    <>
     <div className='App'>
      <h1>-: Todo List App :-</h1>
      <h3>-: Operation Perform Create Read Update & Delete :-</h3>
      <div className="container">
        <div className="input-box">
          <input type="text" value={input} onChange={(e)=>handleInput(e)} />
         {
          update ? <button onClick={handleUpdate}>{update}Update Value</button>
          :<button onClick={handleTask} >Add Task</button>
         }
        </div>
        <div className="list">
          <ul>
            {list.map((item, i)=><li key={i}>{item}
              <div className='dir'>
              <MdDelete  onClick={()=>handleDelete(i)}  />
              <MdEdit onClick={()=>handleEdit(i)}/> 
              </div>
            </li> )}
          </ul>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
  