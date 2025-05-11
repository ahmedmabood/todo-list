import React from 'react'
import { useEffect, useState, CSSProperties } from 'react'
import { MoonLoader } from 'react-spinners';
import TODOCard from './TODOCard';
import { useLocation } from 'react-router';
import { useTodoContext } from "./TodoContext";
import { Link } from 'react-router';

function Todo() {
   const { ALLTODOS, loading, TODO, allTODOS, setALLTODOS, setTODO } = useTodoContext();
   console.log(ALLTODOS);
    const [search,setSearch]=useState("")


    const color = "#9333ea"; // purple-600

    const override = {
        display: "block",
        margin: "100px auto",
        borderColor: "purple",
      };


      function settingSearch(e) {
        setSearch(e.target.value)
        
      }
    
      function searchingValues(){
        if(search){
            setALLTODOS(prev=>prev.filter((item)=>{
              return Object.values(item.todo).join("").toLowerCase().includes(search.toLowerCase()); 
              }))
        } else{
          allTODOS()
        }
    
      }

      function searchingValuesbyTag(e){
        let searchBYTag=e.target.innerText
        console.log(searchingValuesbyTag);
        if(searchBYTag=="ALL"){
            allTODOS()
            return
        }
        setALLTODOS(prev=>prev.filter((item)=>{
        return Object.values(item.todo).join("").toLowerCase().includes(searchBYTag.toLowerCase()); 
        }))
        
    
      }

    useEffect(()=>{
        searchingValues()
    },[search])      
    return (
        <>
        <div className='h-screen w-50 bg-amber-400 absolute text-2xl overflow-auto'>
            
        <ul className='mt-50 ml-20 list-disc hover:cursor-pointer'>
            <li className='mb-8' onClick={searchingValuesbyTag}>react</li>
            <li onClick={searchingValuesbyTag}>ALL</li>
            <li>gjgh</li>
            {/* change to component */}
        </ul>
        </div>
        <div className='bg-[#DAE2E3]  w-screen h-screen '>
        <input
            type="text"
            value={search}
            name='todo'
            required
            className="w-150 mt-20 ml-100 p-4 shadow-xl/10 border border-gray-400 bg-gray-100 rounded-4xl"
            placeholder='Search any item'
            onChange={settingSearch}
          />

          <button
            className='w-40 h-15 bg-gradient-to-r from-purple-400 to-pink-600 ml-2 border outline-hidden rounded-4xl text-[25px] text-white hover:h-17 hover:shadow-xl/30 hover:cursor-pointer'
            // onClick={searchingValues}
          >
            Search
          </button>
          
        
        {loading ? (
            <MoonLoader
              color={color}
              loading={loading}
              cssOverride={override}
              size={120}
              aria-label="Loading Spinner"
              data-testid="loader"
              speedMultiplier={0.8}
            />
          ) :(
              <TODOCard todos={ALLTODOS} alltodo={allTODOS} todoupdate={TODO} set={setTODO} />)}
        
        <div className='mt-4 ml-150 w-40 h-15 p-4 pl-8 bg-gradient-to-r from-purple-400 to-pink-600  border outline-hidden rounded-4xl text-[20px] text-white  hover:shadow-xl/30'>
          <Link to="/" >InsertTodos</Link>
          </div>
          
        </div>
         
        </>
        
    )
}

export default Todo
