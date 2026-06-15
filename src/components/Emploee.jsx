import React from 'react'
import bin from '../assets/bin.svg'
import pen from '../assets/pen.svg'

function Emploee() {
    const Employee =[
        {
            "id":1,
            "name":'Sanjay',
            "gender":'male',
            "department":['salse','HR'],
            "salary":'10,000',
            "date":'01 JUN 2026',
        },
         {
            "id":2,
            "name":'Ram',
            "gender":'male',
            "department":['salse','HR'],
            "salary":'10,000',
            "date":'01 JUN 2026',
        },
         {
            "id":3,
            "name":'San',
            "gender":'male',
            "department":['salse','HR'],
            "salary":'10,000',
            "date":'01 JUN 2026',
        },
         {
            "id":4,
            "name":'Jay',
            "gender":'male',
            "department":['salse','HR'],
            "salary":'10,000',
            "date":'01 JUN 2026',
        },
        {
            "id":5,
            "name":'Jay',
            "gender":'male',
            "department":['salse','HR'],
            "salary":'10,000',
            "date":'01 JUN 2026',
        },

    ];
  return (
    <div className='p-5 px-10 text-center'>
        <div className='bg-gray-600 text-white flex font-semibold relative py-4'>
            <div className='ml-20 w-10'><h1>NAME</h1></div>
            <div className='ml-62 w-10'><h1>GENDER</h1></div>
            <div className='ml-32 w-10'><h1>DEPARTMENT</h1></div>
            <div className='ml-32 w-10'><h1>SALARY</h1></div>
            <div className='ml-17 w-40'><h1>START DATE</h1></div>
            <div className='ml-15 w-10'><h1>ACTION</h1></div>
        </div>
        {Employee.map((employee)=>{
            return(
                <div key={employee.id} className='bg-white text-gray-600 flex font-semibold py-4'>
                    <div className='ml-20 w-10'><h1>{employee.name}</h1></div>
                    <div className='ml-62 w-10'><h1>{employee.gender}</h1></div>
                    <div className='ml-32 w-10'><h1 className='bg-yellow-400 py-1 px-3'>{employee.department}</h1></div>
                    <div className='ml-32 w-10'><h1>{employee.salary}</h1></div>
                    <div className='ml-17 w-40'><h1>{employee.date}</h1></div>
                    <div className='ml-15 gap-6 flex w-10'> <img className='w-6' src={bin} alt="" />
                    <img className='w-6' src={pen} alt="" />
                    </div>
                </div>
            )
        })}
        
    </div>
  )
}

export default Emploee