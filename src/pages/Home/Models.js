import React from 'react'
import "./Models.css"
import  {FaTimes} from 'react-icons/fa'

const Models = ({handleClick,model}) => {
  return (
     <div className='overlay'>
      <div className='modal'>

       <div className='cross'>
       <FaTimes style={{ color: 'white' }} size={25} onClick={ handleClick} />


       </div>
        <h1>Decide on your Destination: Know where you want to go and the dates you plan to travel.</h1>
      </div>
     </div>
  )
}   

export default Models