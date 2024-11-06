import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardTitle,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Table,
  TabPane,
} from "reactstrap";
import { getAddressFormate } from "../../helper-methods";
import AllotedSubjectTeachersModal from "../../components/modals/AllotedSubjectTeachersModal";

function CreateSchedule() {
  const [schedule, setSchedule] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [data, setData] = useState({
    class: "",
    section: ""
  });
  const _toggleModal = (isOpenModal = false) => {
    setIsOpenModal(isOpenModal);
  };

  console.log("data>>", data);
  

  //   const fetchAllSchoolData = async () => {
  //     try {
  //       const schoolData = await findAllSchool();
  //       console.log("school>>>", schoolData.school);
  //       setAllSchool(schoolData.school);
  //     } catch (err) {
  //       console.log("All School Error", err);
  //     }
  //   };

  //   console.log("allschool", allSchool);

  //   useEffect(() => {
  //     fetchAllSchoolData();
  //   }, []);

  const handleChange = (event, field) => {
    const updatedData = {...data}
    updatedData[field] = event.target.value
    setData(updatedData)
  }

  return (
    <TabPane tabId="1">
      {/* filter */}
      <div className="innerHeader">
          <h2>Schedule</h2>
        </div>
      <div className="filterWrapper">
        
        <div className="filterForm">
          <div className="formGroup">
            <Label>Class</Label>
            <Input type="select" onChange={(e) => handleChange(e, "class")}>
              <option>Select Class</option>
              <option>I</option>
              <option>II</option>
              <option>III</option>
              <option>IV</option>
              <option>V</option>
              <option>VI</option>
              <option>VII</option>
              <option>VIII</option>
              <option>IX</option>
              <option>X</option>
            </Input>
          </div>
          <div className="formGroup">
            <Label>Section</Label>
            <Input type="select" onChange={(e) => handleChange(e, "section")}>
              <option>Select Section</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </Input>
          </div>
        </div>
      </div>
      <div>
        
      {data?.class && data?.section && (
         <Card body>
         <Table responsive>
           <thead>
             <tr>
               <th>Days</th>
               <th>1st period</th>
               <th>2nd period</th>
               <th>3rd period</th>
               <th>4th period</th>
               <th>
                 <strong>Recess</strong>
               </th>
               <th>5th period</th>
               <th>6th period</th>
               <th>7th period</th>
               <th>8th period</th>
             </tr>
             <tr>
               <th></th>
               <th>(8:00 - 8:30)</th>
               <th>(8:30 - 9:00)</th>
               <th>(9:00 - 9:30)</th>
               <th>(9:30 - 10:00)</th>
               <th>(10:00 - 10:30)</th>
               <th>(10:30 - 11:00)</th>
               <th>(11:00 - 11:30)</th>
               <th>(11:30 - 12:00)</th>
               <th>(12:00 - 12:30)</th>
             </tr>
           </thead>

           <tbody>
             <tr>
               <td>
                 <strong>Monday</strong>
               </td>
               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>               
              
               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>-</td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>              
             </tr>

             <tr>
               <td>
                 <strong>Tuesday</strong>
               </td>
               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>               
              
               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>-</td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>              
             </tr>

             <tr>
               <td>
                 <strong>Wednesday</strong>
               </td>
               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>               
              
               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>-</td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>              
             </tr>

             <tr>
               <td>
                 <strong>Thursday</strong>
               </td>
               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>               
              
               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>-</td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>              
             </tr>

             <tr>
               <td>
                 <strong>Friday</strong>
               </td>
               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>               
              
               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>-</td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>              
             </tr>

             <tr>
               <td>
                 <strong>Saturday</strong>
               </td>
               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>               
              
               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>-</td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>

               <td>
                 <div className="scheduleDiv">
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Subject</option>
                       <option>Maths</option>
                       <option>Science</option>
                       <option>Hindi</option>
                       <option>English</option>
                       <option>Computer</option>
                     </Input>
                   </div>
                   <div>
                     <Input style={{ width: 185 }} type="select">
                       <option>Availavle Teachers</option>
                       <option>Suman Rana</option>
                       <option>Mrinal Bera</option>
                       <option>Ritik Sahoo</option>
                     </Input>
                   </div>
                 </div>
               </td>              
             </tr>


            
           </tbody>
         
         </Table>
       </Card>
      )}

      { data?.class && data.section && (
        <div style={{textAlign:"center"}}>
            <Button color="primary">
              Create
            </Button>
          </div>
      )}
       
        
        
      </div>
    </TabPane>
  );
}

export default CreateSchedule;
