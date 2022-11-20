import React from 'react';
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { faC } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
export default function FacultyDatas() {
  const [faculties, setFaculties] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7049/api/faculty/get").then(response => setFaculties(response.data)).catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="container">
        <div className="row mt-3 align-items-center " style={{ backgroundColor: "red", height: "40px", borderRadius: "15px" }}>
          <span className='text-light' style={{ fontSize: "20px" }}>Faculties</span>
        </div>
        <div className="row">
          <div className="button d-flex justify-content-end mt-4">
            <Link to="/profile/faculties/createfaculty"><button className='btn btn-success'>Create</button></Link>
          </div>
        </div>
        <div className="row">
          <table className='styled-table'>
            <thead>
              <tr>
                <th>
                  <p>Id</p>
                </th>
                <th>
                  <p>Name</p>
                </th>
                <th>
                  <p>
                    Faculty's Dekan
                  </p>
                </th>
                <th>
                  <p>
                    CreatedDate
                  </p>
                </th>
                <th className='details'>
                  <p>
                    Details
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {faculties.map((faculty) => {
                return (
                  <tr key={faculty.id}>
                    <td>
                      <p>
                        {faculty.id}
                      </p>
                    </td>
                    <td>
                      <p>
                        {faculty.name}
                      </p>
                    </td>
                    <td>
                      <p>
                        {faculty.dekanName} {faculty.dekanSurname}
                      </p>
                    </td>
                    <td>
                      <p>

                        {faculty.createdDate}
                      </p>
                    </td>
                    <td className="details">
                      <p><button className='btn btn-danger mt-5 ms-3 '>Update</button>
                        <button className='btn btn-warning mt-5 ms-3'>Delete</button></p>
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
