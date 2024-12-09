import React from 'react'

const Header = () => {
  console.log('Header R');
  
  return (
    <div>
      <h2>Header</h2>
    </div>
  )
} 

export default React.memo(Header)