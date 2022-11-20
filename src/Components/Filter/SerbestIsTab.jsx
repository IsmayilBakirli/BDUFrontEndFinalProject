import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'

export default function SerbestIsTab(props) {
    var isActiveTab = useSelector((state) => state.studentProfile.serbestIsTab);
    var subjectId=props.subjectId;
    var user = useSelector(state => state.user.user);
    const[serbestIss,setSerbestIss]=useState({});
    useEffect(()=>{
    if(subjectId!=0){
        axios.get(`https://localhost:7049/api/serbestis/getforuserid/${user.UserID}/${subjectId}`).then((response)=>setSerbestIss(response.data)).catch((error)=>console.log(error))
    }
    },[subjectId])
    return (
        <div className={isActiveTab ? "undefined" : "d-none"}>
            <table style={{overflow:"scroll",display:"block"}}>
                <thead>
                    <tr>
                        <th>
                            <p> №</p>
                        </th>
                        <th>
                            <p>S.A.A</p>
                        </th>
                        <th>
                            <p>1-ci</p>
                        </th>
                        <th>
                            <p>2-ci</p>
                        </th>
                        <th>
                            <p>3-cü</p>
                        </th>
                        <th>
                            <p>4-cü</p>
                        </th>
                        <th>
                            <p>5-ci</p>
                        </th>
                        <th>
                            <p>6-cı</p>
                        </th>
                        <th>
                            <p>7-ci</p>
                        </th>
                        <th>
                            <p>8-ci</p>
                        </th>
                        <th>
                            <p>9-cu</p>
                        </th>
                        <th>
                            <p>10-cu</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p>{serbestIss.id}</p>
                        </td>
                        <td>
                            <p>{user.LastName} {user.FirstName} </p>
                        </td>
                        <td>
                            {serbestIss.firstGrade == null ? "----" : serbestIss.firstGrade}
                        </td>
                        <td>
                            {serbestIss.secondGrade ==null ? "----" :serbestIss.secondGrade}
                        </td>
                        <td>
                            {serbestIss.thirdGrade ==null ? "----" :serbestIss.thirdGrade}
                        </td>
                        <td>
                            {serbestIss.fourthGrade ==null ? "----" : serbestIss.fourthGrade}
                        </td>
                        <td>
                            {serbestIss.fiveGrade ==null ? "----" :serbestIss.fiveGrade}
                        </td>
                        <td>
                            {serbestIss.sixGrade ==null ? "----" :serbestIss.sixGrade}
                        </td>
                        <td>
                            {serbestIss.sevenGrade ==null ? "----" :serbestIss.sevenGrade}
                        </td>
                        <td>
                            {serbestIss.eightGrade ==null ? "----" :serbestIss.eightGrade}
                        </td>
                        <td>
                            {serbestIss.nineGrade ==null ? "----" :serbestIss.nineGrade}
                        </td>
                        <td>
                            {serbestIss.tenGrade ==null ? "----" :serbestIss.tenGrade}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
