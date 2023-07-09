import React from 'react'

function Cadr({color}) {
  return (
    <div className='cadr' style={color !== "" ? {backgroundColor:`${color}`} : null}>
        {color !== "" ? color : "empty value"}
    </div>
  )
}

export default Cadr