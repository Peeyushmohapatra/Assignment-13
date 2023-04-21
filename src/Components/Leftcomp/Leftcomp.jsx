import React, { useEffect, useState } from 'react'
import "./leftcomp.css"

const Leftcomp = () => {
    const [state,setState] = useState([])
    useEffect(() => {
        if(state.length === 0){
            apiCall()
        }
    },[]);


    async function apiCall(){
        const api = await fetch("https://randomuser.me/api/?gender=all&results=50");
        const apiResponse = await api.text();
        const jsonData = JSON.parse(apiResponse);
        setState(jsonData.results)
    }
  return (
    <div className='leftComp'>
        <h1>API Data </h1>
        {state.length > 0 && <div className='innerContainer'>
                {state.map((ele) => {
                    return (
                        <div className="dataContainer">
                            <img src={ele.picture.large} alt="" />
                            <p>Name: {ele.name.first +" "+ ele.name.last}</p>
                            <p>Email: {ele.email}</p>
                            <p>Contact: {ele.phone}</p>
                            <p>Gender: {ele.gender}</p>
                        </div>
                    )
                })}
            </div>}
    </div>
  )
}

export default Leftcomp