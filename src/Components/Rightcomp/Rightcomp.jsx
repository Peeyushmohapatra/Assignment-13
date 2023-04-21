import React, { useEffect, useState } from 'react'
import "./rightcomp.css"

const Rightcomp = () => {
    const [input,setInput] = useState("");
    const [todoArr,setTodoarr] = useState([]);
    const [Fun,setFn] = useState("");
    

    useEffect(() => {
        alert("componentDidUpdate lifecycle method called")
    },[todoArr]);

   

  return (
    <div className='rightComp'>
        <h2>Form Data</h2>
        <input onChange={(e) => {
            setInput(e.target.value)
        }} type="text" />
        <button onClick={() => {
            setTodoarr([...todoArr,input])
        }}>Add</button>
         <div className="rightDataContainer">
            {todoArr.length > 0 && todoArr.map((ele) => {
                return (
                    <div className='container'>
                        {ele}
                    </div>
                )
            })}
            </div>
    </div>
  )
}

export default Rightcomp