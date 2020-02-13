import React, { useEffect, useState } from "react";
import axios from "axios";


function Body() {
    const [employess,setEmployees] = useState([])
    useEffect(()=>{
        axios.get("https://randomuser.me/api/?results=200&nat=us")
        .then((res)=>{
            console.log(res.data)
            setEmployees(res.data.results)
        })
    },[])
    return(
        <div>
            <h1>List Of Employees</h1> 
        <ul>
            {employess.map(e=>{
                return(
                    <li key={e.id.value}>
                     {e.name.first} {e.name.last}
                    </li>
                )
            })}
        </ul>
            
        </div>
    );
}

export default Body;