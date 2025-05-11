import React from 'react'
import { useEffect, useState } from 'react'
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import axios from 'axios';

function TODOCard({todos,alltodo,todoupdate,set}) {
    const [checked,setCheck]=useState(false)
    function check(e){
        let current =e.currentTarget.parentElement.parentElement
        if(checked){
        current.classList.remove('line-through','opacity-40',) 
        setCheck(!checked)   
        }else{
          current.classList.add('line-through','opacity-40',) 
          setCheck(!checked)   
        }
    }
    
    function deletetodo(id){
        axios.delete(`http://localhost:8000/api/TODO/del/${id}`).then(()=>{
        alltodo()
        })

    }

    function updatetodo(id){
        if(todoupdate){
            let update={
                todo:todoupdate
            }
            axios.put(`http://localhost:8000/api/TODO/update/${id}`,update).then(()=>{
            set("")
             alltodo()
            })
        }
        
       }
    
    return (
        <>
              {
        todos.map((item,index)=>{
            return(<div key ={index}className='mt-10 ml-100 w-210 h-12 p-2 pl-4 border border-gray-400 rounded-4xl flex transition-all bg-purple-200 hover:bg-purple-300  shadow-xl/10 hover:cursor-pointer'>
            <p className=' font-serif  text-xl'>{item.todo}</p>
            <div className='flex justify-around gap-4 ml-auto'>
            <MdEdit size={25} className='hover:scale-140'
            color='orange' onClick={()=>{
            updatetodo(item._id)
            }}/>
            <MdOutlineDelete size={25} color='red' className='hover:scale-140 ' onClick={()=>{
             deletetodo(item._id)
            }}/>
            <FaCheck size={25} color='green' className='hover:scale-130 mr-4' onClick={check}/>
            </div>
            
          </div>)
        })
    }
        </>
  
        
    )
}

export default TODOCard
