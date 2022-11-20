import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux'

export default function StudentDetail(props) {
    var isActiveStudentDetail = useSelector((state) => state.studentProfile.isActiveStudentDetail);
    var subjectId = props.subjectId;
    var studentDetail = props.studentDetail;
    const [firstKollekvum, setFirstKollekvum] = useState(0);
    const [secondKollekvum, setSecondKollekvum] = useState(0);
    const [thirdKollekvum, setThirdKollekvum] = useState(0);
    const[firstSerbestIs,setFirstSerbestIs]=useState(0);
    const[secondSerbestIs,setSecondSerbestIs]=useState(0);
    const[thirdSerbestIs,setThirdSerbestIs]=useState(0);
    const[fourhtSerbestIs,setfourhtSerbestIs]=useState(0);
    const[fiveSerbestIs,setfiveSerbestIs]=useState(0);
    const[sixSerbestIs,setsixSerbestIs]=useState(0);
    const[sevenSerbestIs,setsevenSerbestIs]=useState(0);
    const[eightSerbestIs,seteightSerbestIs]=useState(0);
    const[nineSerbestIs,setnineSerbestIs]=useState(0);
    const[tenSerbestIs,settenSerbestIs]=useState(0);
    const[kollekvumAlertMessage,setKollekvumAlertMessage]=useState("");
    const[serbestIsAlertMessage,setSerbestIsAlertMessage]=useState("");
    useEffect(() => {
        if (studentDetail != null) {
            setFirstKollekvum(studentDetail.firstKollekvum);
            setSecondKollekvum(studentDetail.secondKollekvum);
            setThirdKollekvum(studentDetail.thirdKollekvum);
            setFirstSerbestIs(studentDetail.firstSerbestIs);
            setSecondSerbestIs(studentDetail.secondSerbestIs);
            setThirdSerbestIs(studentDetail.thirdSerbestIs);
            setfourhtSerbestIs(studentDetail.fourthSerbestIs);
            setfiveSerbestIs(studentDetail.fiveSerbestIs);
            setsixSerbestIs(studentDetail.sixSerbestIs);
            setsevenSerbestIs(studentDetail.sevenSerbestIs);
            seteightSerbestIs(studentDetail.eightSerbestIs);
            setnineSerbestIs(studentDetail.nineSerbestIs);
            settenSerbestIs(studentDetail.tenSerbestIs);
        }

    }, [studentDetail]);
    function handleClick(){
        let kollekvums={First:firstKollekvum,Second:secondKollekvum,Third:thirdKollekvum,SubjectId:subjectId,StudentId:studentDetail.id}
        let serbestIss={One:firstSerbestIs,Two:secondSerbestIs,Three:thirdSerbestIs,Four:fourhtSerbestIs,Five:fiveSerbestIs,Six:sixSerbestIs,Seven:sevenSerbestIs,Eight:eightSerbestIs,Nine:nineSerbestIs,Ten:tenSerbestIs,SubjectId:subjectId,StudentId:studentDetail.id}
        axios.post(`https://localhost:7049/api/teacher/addkollekvum/`,kollekvums).then(response => {response.data.message=="not change" ? setKollekvumAlertMessage(response.data.message) : alert("Kollekvum qiymetleri ugurla elave olundu!")  }).catch(response => alert("Xais edirik 0-10 arası ədəd daxil edin!!")) 
        axios.post(`https://localhost:7049/api/teacher/addserbestis/`,serbestIss).then(response=>{response.data.message=="not change" ? setSerbestIsAlertMessage(response.data.message) : alert("serbest is ballarinda ugurla deyisiklikler edildi!")}).catch(response=>alert("Xais edirik serbest is ballarina 0 ve ya 1 elave edin!"))
    }
    return (
        <div className={isActiveStudentDetail ? "col-12" : "d-none"} >
            <table style={{ display: "block", overflow: "scroll" }}>
                <thead>
                    <tr>
                        <th>
                            Tələbənin id-si
                        </th>
                        <th>
                            Tələbənin adı
                        </th>
                        <th>
                            Tələbənin soyadı
                        </th>
                        <th>
                            İlk Kollekvum
                        </th>
                        <th>
                            İkinci Kollekvum
                        </th>
                        <th>
                            Üçüncü Kollekvum
                        </th>
                        <th>
                            İlk Sərbəst İş
                        </th>
                        <th>
                            Ikinci Sərbəst İş
                        </th>
                        <th>
                            Üçüncü Sərbəst İş
                        </th>
                        <th>
                            Dördüncü Sərbəst İş
                        </th>
                        <th>
                            Beşinci Sərbəst İş
                        </th>
                        <th>
                            Altıncı Sərbəst İş
                        </th>
                        <th>
                            Yeddinci Sərbəst İş
                        </th>
                        <th>
                            Səkkizinci Sərbəst İş
                        </th>
                        <th>
                            Doqquzuncu Sərbəst İş
                        </th>
                        <th>
                            Onuncu Sərbəst İş
                        </th>
                        <th>
                            Detallar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {studentDetail.id}
                        </td>
                        <td>
                            {studentDetail.name}
                        </td>
                        <td>
                            {studentDetail.lastname}
                        </td>
                        <td>
                            <input type="text" style={{ backgroundColor: "transparent", border: "0" }} onChange={(e) => setFirstKollekvum(e.target.value)} defaultValue={studentDetail.firstKollekvum} />
                        </td>
                        <td>
                            <input type="text" style={{ backgroundColor: "transparent", border: "0" }} onChange={(e) => setSecondKollekvum(e.target.value)} defaultValue={studentDetail.secondKollekvum} />
                        </td>
                        <td>
                            <input type="text" style={{ backgroundColor: "transparent", border: "0" }} onChange={(e) => setThirdKollekvum(e.target.value)} defaultValue={studentDetail.thirdKollekvum} />
                        </td>
                        <td>
                            <input type="text" style={{ backgroundColor: "transparent", border: "0" }} onChange={(e) => setFirstSerbestIs(e.target.value)} defaultValue={studentDetail.firstSerbestIs} />
                        </td>
                        <td>
                            <input type="text" style={{ backgroundColor: "transparent", border: "0" }} onChange={(e) => setSecondSerbestIs(e.target.value)} defaultValue={studentDetail.secondSerbestIs} />
                        </td>
                        <td>
                            <input type="text" style={{ backgroundColor: "transparent", border: "0" }} onChange={(e) => setThirdSerbestIs(e.target.value)} defaultValue={studentDetail.thirdSerbestIs} />
                        </td>
                        <td>
                            <input type="text" style={{ backgroundColor: "transparent", border: "0" }} onChange={(e) => setfourhtSerbestIs(e.target.value)} defaultValue={studentDetail.fourthSerbestIs} />
                        </td>
                        <td>
                            <input type="text" style={{ backgroundColor: "transparent", border: "0" }} onChange={(e) => setfiveSerbestIs(e.target.value)} defaultValue={studentDetail.fiveSerbestIs} />
                        </td>
                        <td>
                            <input type="text" style={{ backgroundColor: "transparent", border: "0" }} onChange={(e) => setsixSerbestIs(e.target.value)} defaultValue={studentDetail.sixSerbestIs} />
                        </td>
                        <td>
                            <input type="text" style={{ backgroundColor: "transparent", border: "0" }} onChange={(e) => setsevenSerbestIs(e.target.value)} defaultValue={studentDetail.sevenSerbestIs} />
                        </td>
                        <td>
                            <input type="text" style={{ backgroundColor: "transparent", border: "0" }} onChange={(e) => seteightSerbestIs(e.target.value)} defaultValue={studentDetail.eightSerbestIs} />
                        </td>
                        <td>
                            <input type="text" style={{ backgroundColor: "transparent", border: "0" }} onChange={(e) => setnineSerbestIs(e.target.value)} defaultValue={studentDetail.nineSerbestIs} />
                        </td>
                        <td>
                            <input type="text" style={{ backgroundColor: "transparent", border: "0" }} onChange={(e) => settenSerbestIs(e.target.value)} defaultValue={studentDetail.tenSerbestIs} />
                        </td>
                        <td>
                            <button className='btn btn-primary' onClick={() =>handleClick()} >Təsdiqlə</button>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
