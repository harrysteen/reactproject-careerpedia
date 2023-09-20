import React from 'react'
import Singelcard from './Singelcard'

const Card = () => {

   const data=[
      {
  
        id:1,
        heading:"basic",
        lime1:"5 Lakesh",
        line2:" unlimited access",
        line3:"no food"
      },
      {
        id:2,
        heading:"Mediam",
        line1:"10 Lakesh",
        line2:" limited access",
        line3:"with food"
  
        
      },

      {
         id:3,
         heading:"primeam",
         line1:"50 Lakesh",
         line2:"unlimited access",
         line3:"with food"
   
         
       }
    ]
  return (

    <> 
     <div className='heading'>
        <h1>pricing</h1>
     </div>

     <section className='cards'>
         
         {

             data.map((item)=>{
             
               const {heading,line1,line2,line3}=item;
               return(
                  <Singelcard heading={heading} lime1={line1} line2={line2} line3={line3}/>
               )

             })
         }

     </section>
     </>
  )
}

export default Card