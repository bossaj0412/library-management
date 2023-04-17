import React from 'react'

const Header = ({temp}) => {
  return (
    <div className=" text-center m-4">

        <input type='text' placeholder='Enter the book name'
         className=' outline-0 hover: border-b-4 text-center ' 
         onChange={(e)=>temp(e.target.value)}/>


    </div>
  )
}

export default Header