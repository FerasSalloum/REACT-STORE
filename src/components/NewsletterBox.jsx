import React from 'react'

function NewsletterBox() {
    const onSubmitHandler = (event)=>{
        event.preventDefault()
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800 '>Subscribe Now & Get 20% OFF</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas recusandae magnam esse tempore, nulla velit ad? Assumenda unde, odit debitis maxime illum impedit optio sequi quisquam sunt, iusto error at.</p>
        <form onClick={onSubmitHandler} action="" className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 uppercase'>subscribe</button>
        </form>
    </div>
  )
}

export default NewsletterBox
