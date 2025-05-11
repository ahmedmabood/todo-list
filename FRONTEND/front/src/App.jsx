import { useEffect, useState, CSSProperties } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { MoonLoader } from 'react-spinners';
import axios from 'axios';
import { useTodoContext } from "./TodoContext";

import { Link } from 'react-router-dom';


function App() {
  const {     ALLTODOS,
    setALLTODOS,
    TODO,
    setTODO,
    loading,
    setLoading,
    allTODOS } = useTodoContext();


  function settingTodo(e) {
    setTODO(e.target.value)
  }



  function saveTodo(e) {
    e.preventDefault()
    axios.post("http://localhost:8000/api/TODO/save", { todo: TODO }).then((res) => {
      // console.log(res.data);
      allTODOS()
    })
    setTODO("")
  }



  useEffect(() => {
    allTODOS()
  }, [])



  return (
    <>
    
        <div className='bg-[#DAE2E3] h-screen overflow-hidden relative '>
          <p className='text-5xl mt-20 ml-150 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text w-fit text-transparent font-sans text-shadow-current'>
            TODO LIST
          </p>
          <input
            type="text"
            value={TODO}
            name='todo'
            required
            className="w-150 mt-4 ml-100 p-4 shadow-xl/10 border border-gray-400 bg-gray-100 rounded-4xl"
            placeholder='Enter the TODO'
            onChange={settingTodo}
          />



          <button
            className='w-40 h-15 bg-gradient-to-r from-purple-400 to-pink-600 ml-2 border outline-hidden rounded-4xl text-[25px] text-white hover:h-17 hover:shadow-xl/30'
            onClick={saveTodo}
          >
            Save
          </button>



          <div className='mt-4 ml-150 w-40 h-15 p-4 pl-8 bg-gradient-to-r from-purple-400 to-pink-600  border outline-hidden rounded-4xl text-[20px] text-white  hover:shadow-xl/30'>
          <Link to="/todo" >seeTodos</Link>
          </div>
          
         
        </div>
      
    </>
  )
}

export default App
