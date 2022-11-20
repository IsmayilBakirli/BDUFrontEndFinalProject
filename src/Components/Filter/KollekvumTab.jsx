import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function KollekvumTab(props) {
    var kollekvumTab = useSelector((state) => state.studentProfile.kollekvumTab);
    const [kollekvumGrades, setKollekvumGrades] = useState({});
    var user = useSelector((state) => state.user.user);
    useEffect(() => {
        if (props.subjectid != 0) {
            axios.get(`https://localhost:7049/api/kollekvum/getforuserid/${user.UserID}/${props.subjectid}`).then((response) => setKollekvumGrades(response.data))
        }
    }, [props.subjectid]);
    console.log(kollekvumGrades);
    return (
        <>
            <div className={`kollekvumTab ${kollekvumTab ? undefined : "d-none"}`}>
                <table >

                    <thead>
                        <tr>
                            <th>
                                <p >№</p>
                            </th>
                            <th>
                                <p>S.A.A</p>
                            </th>
                            <th>
                                <p >1-ci Kollekvum</p>
                            </th>
                            <th>
                                <p>2-ci Kollekvum</p>
                            </th>
                            <th>
                                <p>3-ci Kollekvum</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td>
                                <p className='mb-0'>{kollekvumGrades.id}</p>
                            </td>
                            <td>
                                <p className='mb-0 '>{user.LastName} {user.FirstName} </p>
                            </td>
                            <td>
                                <p className='mb-0 '>{kollekvumGrades.firstKollekvum}</p>
                            </td>
                            <td>
                                <p className='mb-0 '>{kollekvumGrades.secondKollekvum}</p>
                            </td>
                            <td>
                                <p className='mb-0 '>{kollekvumGrades.thirdKollekvum}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
