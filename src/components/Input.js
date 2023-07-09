import React from 'react'

function Input({color, handlColor}) {
  return (
    <div style={{marginTop:"20px"}}>
        <input type='text' placeholder='enter a color' style={{ width:"204px", padding: "10px" ,fontSize:"bold",borderRadius:"5px"}} onChange={handlColor} value={color} ></input>
    </div>
  )
}

export default Input