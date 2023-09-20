import React from 'react'

const Singelcard = ({heading,line1,line2,line3}) => {
  
  return (
    <div className='card'>

        <h2>{heading}</h2>

        <div className='list'>

           

            <div className='content'>
                <p> {line1}</p>
                <p>{line2}</p>
                <p>{line3}</p>
            </div>
        </div>
        
        
        </div>
  )
}

export default Singelcard