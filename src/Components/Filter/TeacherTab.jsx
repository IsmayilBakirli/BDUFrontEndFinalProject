import React from 'react'
import { useSelector } from 'react-redux';

export default function TeacherTab() {
    var teacherTab=useSelector((state)=>state.studentProfile.teacherTab);
    var teachers=useSelector((state)=>state.studentProfile.teachers);
    return (
        <>
            <div className={`teacherTab ${teacherTab ? undefined : 'd-none'}`}>
                <table >
                    <thead>
                        <tr>
                            <th>
                                <p>№</p>
                            </th>
                            <th>
                                <p>Müəllim S.A.A</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {teachers.map((teacher) => {
                            return (
                                <tr key={teacher.id}>
                                    <td>
                                        <p className='mb-0 '>{teacher.id}</p>
                                    </td>
                                    <td>
                                        <p className='mb-0 '>{teacher.appUser.firstName} {teacher.appUser.lastName}</p>

                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
