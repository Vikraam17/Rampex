
// import React, { useEffect, useRef, useState } from 'react'

// const Effect = () => {
//   const [count, setCount]=useState(0);
//   const countRef =useRef(0);

//   const handleIncrement = () =>{
//     setCount(count+1);
//     countRef.current++;

//     console.log('State:', count);
//     console.log('Ref:', countRef.current); 

//   }

//   return (
//     <div className='header'>
      
//       <h1 >Count: {count}</h1>
//       <div>
//       <button className='btn' onClick={()=>setCount(count-1)}>-</button>
//       <button className='btn' onClick={handleIncrement}>+
//       </button>
//       </div>
//     </div>
//   )
// }

// export default Effect


import React, { useEffect, useState } from 'react'

const Effect = () => {
  const [count, setCount]=useState(0);

  useEffect(() => {
    console.log('The count is:',count);
    return ()=>{
      console.log('I am being cleaned up');
    }
  },[count]);

  return (
    <div className='header'>
      
      <h1 >Count: {count}</h1>
      <div>
      <button className='btn' onClick={()=>setCount(count-1)}>-</button>
      <button className='btn' onClick={()=>setCount(count+1)}>+
      </button>
      </div>
    </div>
  )
}

export default Effect