import React, { useEffect, useState } from 'react'
import AddStudent from '../Component/Modal/AddStudent';

function Settings() {

    const [studentData, setStudentData] = useState([]);
    const [modalVisibility, setModalVisibility] = useState(false);

    useEffect(() => {
        const data = window.localStorage.getItem("students");
        if (data) setStudentData(JSON.parse(data));
    }, []);

    useEffect(() => {
        if (studentData.length) window.localStorage.setItem("students", JSON.stringify(studentData));
    }, [studentData]);
    return (
        <div className='w-full min-h-[calc(100%-64px)] flex flex-col gap-8 p-7 py-10'>
            {modalVisibility && <AddStudent setModal={setModalVisibility} />}
            <div className='w-full flex justify-between items-center'>
                <div className='text-2xl font-bold'>
                    {`Settings`}
                </div>
                <button onClick={() => setModalVisibility(true)} className='text-white bg-[#FCA63A] font-semibold rounded-md p-2 px-3'>
                    {`Add Student`}
                </button>
            </div>
            <div className='w-full flex flex-col gap-2'>
                <div className='font-semibold'>
                    {`Manage Students`}
                </div>
                <SettingsTable data={studentData} />
            </div>
        </div>
    );
};

export default Settings;


function SettingsTable({ data }) {
    const pageSize = 10;
    const [currentPage, setCurrentPage] = useState(0);

    const paginatedData = data.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

    const totalPages = Math.ceil(data.length / pageSize);

    const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    const goToPreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
    return (
        <>
            <table className='min-w-full bg-white rounded-md'>
                <thead>
                    <tr>
                        <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                            Student ID
                        </th>
                        <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                            Student Name
                        </th>
                        <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                            Phone no.
                        </th>
                        <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {
                        paginatedData.map((student) => (
                            <tr key={student.StudentID}>
                                <td className="py-3 px-4 border-b border-gray-200 text-[#2D2D2D] min-h-[52px]">
                                    {student.StudentID}
                                </td>
                                <td className="py-3 px-4 border-b border-gray-200 text-[#2D2D2D] min-h-[52px]">
                                    {student.StudentName}
                                </td>
                                <td className="py-3 px-4 border-b border-gray-200 text-[#2D2D2D] min-h-[52px]">
                                    {student.PhoneNo}
                                </td>
                                <td className="py-3 px-4 border-b border-gray-200 text-[#2D2D2D] min-h-[52px] flex items-center gap-6">
                                    <img className='cursor-pointer' src="/edit.svg" alt="edit" />
                                    <img className='cursor-pointer' src="/bin.svg" alt="bin" />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 0}
                    className="px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 disabled:opacity-50 text-sm"
                >
                    Previous
                </button>
                <span className="text-sm">
                    Page {currentPage + 1} of {totalPages}
                </span>
                <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages - 1}
                    className="px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 disabled:opacity-50 text-sm"
                >
                    Next
                </button>
            </div>
        </>
    );
};