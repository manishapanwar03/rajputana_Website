import React from 'react'

const Child = (props) => {
  return (
    <div>
        <button onClick={()=>props.updatefunc("second component isss")}>Click here..</button>
    </div>
  )
}

export default Child 