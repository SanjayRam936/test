import React from 'react'
import avatar from '../assets/avatar.svg'

function Add() {
  return (
    <div className='bg-gray-100 text-gray-600'>
        <div className='mx-30 mt-10 mb-10 bg-white '>
            <h1 className='text-2xl font-bold ml-25 mt-10'>Employee Payroll Form</h1>
            <div className='ml-25 font-medium mt-9'>
                <label >Name  <input type="text" placeholder='Employee Name' className='bg-gray-200 ml-10 rounded-[3px] border-2 border-black w-100 h-10 ' /></label><br />
            </div>
        

            <div className="flex items-center ml-25 mt-3 gap-8">
                <span className="text-gray-600 font-medium">Profile Image</span>

            <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="Profile" value="img2" className="w-4 h-4 accent-gray-500" />
                <span><img className='w-20' src={avatar} alt="" /></span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="Profile" value="img1" className="w-4 h-4 accent-gray-500" />
                <span><img className='w-20' src={avatar} alt="" /></span>
            </label>
        </div>

        <div className="flex items-center ml-25 mt-3 gap-8">
                <span className="text-gray-600 font-medium">Gender</span>

            <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="gender" value="male" className="w-4 h-4 accent-gray-500" />
                <span className="text-gray-600">Male</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="gender" value="female" className="w-4 h-4 accent-gray-500" />
                <span className="text-gray-600">Female</span>
            </label>
        </div>

        <div className="flex items-center ml-25 mt-3 gap-8">
                <span className="text-gray-600 font-medium">Department</span>

            <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="gender" value="male" className="w-4 h-4 accent-gray-500" />
                <span className="text-gray-600">HR</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="gender" value="female" className="w-4 h-4 accent-gray-500" />
                <span className="text-gray-600">Sales</span>
            </label>
             <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="gender" value="female" className="w-4 h-4 accent-gray-500" />
                <span className="text-gray-600">Finance</span>
            </label>
             <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="gender" value="female" className="w-4 h-4 accent-gray-500" />
                <span className="text-gray-600">Engineering</span>
            </label>
             <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="gender" value="female" className="w-4 h-4 accent-gray-500" />
                <span className="text-gray-600">other</span>
            </label>
        </div>
        <div className='ml-25 font-medium mt-9'>
            Salary
            <select className='ml-10 border-2 border-black w-80 py-2' name="" id="">
                <option value="">Select Salary</option>
                <option value="">40,000</option>
                <option value="">30,000</option>
                <option value="">20,000</option>
            </select>
        </div>
        <div className='ml-25 font-medium mt-9'>
            Start Date
            <select className='ml-10 border-2 text-center border-black w-30 py-2' name="" id="">
                <option value="">Day</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
            </select>
            <select className='ml-10 border-2 text-center border-black w-30 py-2' name="" id="">
                <option value="">Month</option>
                <option value="">jan</option>
                <option value="">feb</option>
                <option value="">mar</option>
            </select>
            <select className='ml-10 text-center border-2 border-black w-30 py-2' name="" id="">
                <option value="">Year</option>
                <option value="">2024</option>
                <option value="">2025</option>
                <option value="">2026</option>
            </select>
        </div>
        <div className='ml-25 relative font-medium mt-9'>
                <label ><h1 className='absolute top-0'>Note</h1>  <input type="text" className='bg-gray-200 ml-30 rounded-[3px] border-2 border-black w-100 h-30 ' /></label><br />
            </div>
            <div className='flex gap-3 ml-25 relative font-medium mt-9'>
                <div>
                    <button className='bg-gray-300 px-5 rounded-xl py-2 text-black' >Cancle</button>
                </div>
                <div className='pl-70'>
                    <button className='bg-gray-300 rounded-xl px-5 py-2 text-black'>Submit</button>
                </div>
                <div>
                    <button className='bg-gray-300 px-5 rounded-xl py-2 text-black'>Reset</button>
                </div>
            </div>
            
            

            </div>
    </div>
  )
}

export default Add