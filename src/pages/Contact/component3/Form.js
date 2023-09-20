import React from 'react'
 

const Form = () => {
  return (
     <>

     <h1 className='heading'> Contact us</h1>
     <section className='container'> 

     <form>

        <div className='field'>
            <p>Name</p>
            <input type='text'/>
        </div>

        <div className='field'>
            <p>Email</p>
            <input type='email'/>
        </div>


        <div className='field'>
            <p>phone</p>
            <input type='tel'/>
        </div>


       <div className='btn'>
       <button >
            submit
        </button>
       </div>
     </form>
     </section>
     
     </>
  )
}

export default Form