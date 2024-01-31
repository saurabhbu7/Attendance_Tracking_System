import React from 'react';
import { useNavigate } from 'react-router-dom';

function AddStudent({ setModal }) {
    const Navigate = useNavigate()
    async function FormHandler(event) {
        event.preventDefault()
        const studentData = window.localStorage.getItem("students")
        if (studentData) {
            const parsedData = JSON.parse(studentData)
            let updatedData = [...parsedData, { StudentID: `0${parsedData.length + 1}`, StudentName: event.target.name.value, ClassName: event.target.class.value }]
            window.localStorage.setItem("students", JSON.stringify(updatedData))
        }
        Navigate('/dashboard')
        setModal(false)
    }
    return (
        <div className={`fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center backdrop-blur-[2px] bg-[rgba(0,0,0,0.5)]`}>
            <form onSubmit={FormHandler} className='w-[650px] flex flex-col gap-10 bg-white rounded-md p-7'>
                <div className='w-full text-center text-2xl font-bold'>
                    Add Student
                </div>
                <div className='w-full flex flex-col gap-5'>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-base font-semibold'>
                            {`Name of Student`}
                        </span>
                        <input name='name' className='w-full h-[40px] bg-white border border-gray-400 focus:border-[#53D0A4] outline-none text-base text-black rounded-md px-3' type='text' placeholder='Enter Name' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <span className='text-base font-semibold'>
                            {`Class Name`}
                        </span>
                        <input name='class' className='w-full h-[40px] bg-white border border-gray-400 focus:border-[#53D0A4] outline-none text-base text-black rounded-md px-3' type='text' placeholder='Enter Class Name' />
                    </div>
                </div>
                <div className='w-full flex justify-end items-center mt-5 select-none'>
                    <div className='flex items-center gap-4'>
                        <div onClick={() => setModal(false)} className='h-[40px] flex justify-center items-center text-[#7B7B7B] pr-4 border-r-2 border-[#7B7B7B] cursor-pointer'>
                            {`Cancel`}
                        </div>
                        <button type='submit' className='h-[40px] font-semibold text-white bg-[#53D0A4] rounded-full px-10 '>
                            {`Save`}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddStudent;