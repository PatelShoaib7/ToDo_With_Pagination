  import React from 'react'
  import { useEffect } from 'react'
  import { useState } from 'react'

  export const Map = () => {
  const [Data , setData] =useState([])
  const [count , setCount] = useState(0)
  const [page , setPage] = useState(1)

  useEffect(()=>
  {
      fetch(`https://jsonplaceholder.typicode.com/posts/?_page=${page}&_limit=10`)
    .then((res)=> res.json())
    .then((data)=>
    {
      console.log(data)
      setData(data)
    })
  },[page])

   const IncresePage =()=>
   {
    if(page>1)
    {
    setPage(page - 1)
    }
   
   }
   const DecresePage =()=>
  {
    setPage(page + 1)
  }

  return (
        
   <div style={{marginTop:'20px',
               padding:'2rem',border:'1rem',
               gap:'1rem' , width:'65%', 
               margin:`auto` , boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
               borderRadius:'16px',
                 
                 }}>
      <div style={{border:'3px solid black' ,   borderRadius:'12px', background:'lightblue'}}>
          <h1>ToDo With Fetch {"&"}  Use-Effects</h1>
        <button style={{width:'100px' , height:'35px', borderRadius:'10px' , backgroundColor:'white' , fontSize:'20px' ,margin:'15px'}} onClick={IncresePage}>Prev</button>

        <button  style={{width:'100px' , height:'35px', borderRadius:'10px' , backgroundColor:'white' , fontSize:'20px' ,margin:'15px'}} onClick={DecresePage}>Next</button>
      
      </div>
      <div style={{border:'1px solid tomato' ,
                   width:"80%", margin:'auto', 
                   marginTop:'50px', fontSize:'23px',
                   boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                  
                   borderRadius:'30px'
                  }}>
        
        {
            Data.map((elem)=>
            (
              
                  <div key={elem.id}  >
                 <ul>
                  {console.log(page)}
                      <p>{elem.id} {` : `} {elem.title} </p>
                 </ul>
                 </div>
            
            ))
        } 
        
      </div>
        
    </div>
  
  )
}
