import React from 'react';
import { useSelector } from 'react-redux';

export default function JournalTab() {
    var teacherTab=useSelector((state)=>state.studentProfile.journalTab);
    var user=useSelector((state)=>state.user.user);
    return (
        <>
            <div className={`journaltab ${teacherTab ? undefined : "d-none"}`}>
                <table >

                    <thead>
                        <tr>
                            <th>
                                <p >№</p>
                            </th>
                            <th>
                                <p >S.A.A</p>
                            </th>
                            <th>
                                <p>15.09.2022</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr >
                            <td>
                                <p className='mb-0'>1</p>
                            </td>
                            <td>
                                <p className='mb-0'>{user.FirstName} {user.LastName}</p>
                            </td>
                            <td>
                                <p className='mb-0'>i.e</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
