import React from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
export default function StudentDatas() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7049/api/student/get").then(response => { setStudents(response.data); }).catch(error => console.log(error));
  }, []);
  return (
    <>
      <div className="container">
        <div className="row mt-3 align-items-center " style={{ backgroundColor: "red", height: "40px", borderRadius: "15px" }}>
          <span className='text-light' style={{ fontSize: "20px" }}>Tələbələr</span>
        </div>
        <div className="row  ">
          <div className="button d-flex justify-content-end mt-4">
            <Link to="/profile/students/createstudent"><button className='btn btn-success'>Create</button></Link>
          </div>
        </div>
        <div className="row mt-5">
          <table className='styled-table'>
            <thead>
              <tr>
                <th>
                  Image
                </th>
                <th>
                  Name
                </th>
                <th>
                  Surname
                </th>
                <th>
                  Faculty name
                </th>
                <th>
                  Group Name
                </th>
                <th>
                  Details
                </th>

              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                return (
                  <tr key={student.id}>
                    <td>
                      <img src={student.imageUrl} style={{ width: "100px", height: "100px", borderRadius: "50%" }} alt="just an image" />
                    </td>
                    <td>
                      <p>{student.name}</p>
                    </td>
                    <td>
                      <p>  {student.surname}</p>
                    </td>
                    <td>
                      <p>{student.facultyname}</p>
                    </td>
                    <td>
                      <p>{student.groupId}</p>
                    </td>
                    <td>
                      <td style={{ width: "200px" }} className="details">
                        <p><button className='btn btn-danger mt-5 ms-3 '>Update</button>
                          <button className='btn btn-warning mt-5 ms-3'>Delete</button>
                          <button className='btn btn-primary mt-5 ms-3'>Detail</button></p>
                      </td>
                    </td>
                  </tr>

                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
