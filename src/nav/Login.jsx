import React, { useState } from 'react'

export default function Login() {
  const [data, setData] = useState({ error: '', msg: '' })

  const handleDta = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    let name = formData.get('name')
    let password = formData.get('password')
    const regex = /^[A-Z0-9]+$/i;

    if (!name || name.length > 18) {
      setData({ error: 'Name character only 18 allowed', msg: '' })
    } else if (!regex.test(password)) {
      setData({ error: 'Character only allowed in A-Z or 0-9', msg: '' })
    } else {
      setData({ msg: 'Login successful!', error: '' })
    }
  }

  return (
    <div className='flex justify-evenly items-center '>
      <div className='flex flex-col justify-center items-center border-2 border-black hover:bg-amber-100 rounded-md w-[300px] p-4'>
        <form onSubmit={handleDta}>
          <label>
            Name:
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              className='border-2 border-black rounded-md w-full p-1 mt-1'
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type='password'
              name='password'
              placeholder='Enter your password'
              className='border-2 border-black rounded-md w-full p-1 mt-1'
            />
          </label>
          <br />
          <button
            type='submit'
            className='border-2 border-black rounded-md p-1 hover:bg-gray-500 bg-orange-200 mt-2 w-full'
          >
            Login
          </button>
        </form>

        {data?.error && <span className="text-red-600 mt-2">{data.error}</span>}
        {data?.msg && <span className="text-green-600 mt-2">{data.msg}</span>}
      </div>
    </div>
  )
}
