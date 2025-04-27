import React from 'react'

const CheckOut = () => {
  return (
    <div className='w-full h-fit flex px-7'>
      <section className='flex flex-col gap-3 w-[55%] bg-amber-500 p-5 '>
        <h4>Delivery Information</h4>
        <div className="infos">
            <form action={postMessage}>
            <label htmlFor="Email">

            <input type="text" typeof='email' placeholder='Enter Your Email' />
            </label>
            </form>
        </div>
      </section>
    </div>
  )
}

export default CheckOut
