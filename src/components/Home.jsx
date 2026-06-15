import React from 'react'
import search from '../assets/search.svg'
import Emploee from './Emploee'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate();
  return (
    <div className='bg-gray-100'>
      <div className='justify-between flex p-5 px-10'>
        <div className='text-gray-600 text-2xl font-bold'>Employee Details</div>
        <div className='flex gap-4'>
          <button className='py-1 px-3 rounded-2xl bg-white shadow-2xl'><img className='w-6' src={search} alt="" /></button>
          <button onClick={()=> navigate('/add_user')} className='py-1 px-6 rounded-[5px] bg-green-800 text-white'>+  Add User</button>
        </div>
      </div>
      <Emploee/>
    </div>
  )
}

export default Home