
import React, { useEffect, useReducer, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const index = () => {
  const [name,setName]=useLocalStorage('username','')
  const [id,setId]=useLocalStorage('user_id','')
  
  return (
    <div className='header'>
      <input type="text" placeholder='Enter your Name'  value={name} onChange={(e)=>setName(e.target.value)} />
      <h2>My Name is {name}!</h2>
      <input type="text" placeholder='Enter your ID' value={id} onChange={(e)=>setId(e.target.value)} />
      <h2>My id is {id}!</h2>
    </div>
  )
}

export default index


// import React, { useReducer, useState } from 'react'

// const index = () => {
//   const initialState={count :0};

//   const reducer = (state, action) =>{
//     switch(action.type){
//       case 'increase' :{
//         return {count : state.count+1}
//       }
//       case 'decrease':{
//         return {count: state.count-1}
//       }
//       case 'input':{
//         return {count: action.payload}
//       }
//       default:{
//         return state
//       }
//     }
//   }

//   const [state,dispatch]=useReducer(reducer, initialState)

//   return (
//     <div className='header'>
//       <h1> Counter: {state.count}</h1>
//         <div>
//         <button onClick={()=>dispatch({type:'increase'})} className="btn">
//           Increase
//         </button>
//         <button onClick={()=>dispatch({type:'decrease'})} className="btn">Decrease</button>
//         </div>
//         <input value={state.count}
//         onChange={(e)=>dispatch({type:"input", payload:Number(e.target.value)})} type="number" />
//     </div>
//   )
// }

// export default index