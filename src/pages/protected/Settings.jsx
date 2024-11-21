// import React, { useEffect, useState } from "react";
// import {
//   Nav,
//   NavItem,
//   NavLink,
//   TabContent,
//   TabPane,
//   Button,
//   Card,
//   Table,
//   Label,
//   Input,
//   InputGroup,
//   InputGroupText,
//   List,
//   CardTitle,
//   FormGroup,
//   Col,
//   Row,
// } from "reactstrap";

// import CustomDateRangePicker from "../../components/CustomDateRangePicker";
// import { useNavigate } from "react-router-dom";
// import AddNewCardModal from "../../components/modals/AddNewCardModal";
// import { useSelector } from "react-redux";
// import CreateAndEditClassModal from "../../components/modals/CreateAndEditClassModal";
// import AddHolidayModal from "../../components/modals/AddHolidayModal";

// const Settings = () => {
//   const navigate = useNavigate();
//   const [userType, setUserType] = useState("");
//   const loginType = useSelector((state) => state.userCredential.user.loginType);
//   console.log("userType>>", userType);
//   console.log("loginType>>", loginType);
//   const [pageName, setPageName] = useState("");
//   const [formFields, setFormFields] = useState([
//     {
//       class: "",
//       academicYear: "",
//       Fee: "",
//     },
//   ]);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const _toggleModal = (isOpen, name) => {
//     setIsModalOpen(isOpen);
//     setPageName(name);
//   };
//   const [isModal2Open, setIsModal2Open] = useState(false);
//   const _toggleModal2 = (isOpen, name) => {
//     setIsModal2Open(isOpen);
//   };

//   useEffect(() => {
//     if (loginType === "admin") {
//       setUserType(loginType);
//     }
//   }, []);

//   const [activeTab, setActiveTab] = useState("7");
//   const _toggleTab = (newTab = "1") => {
//     if (activeTab !== newTab) setActiveTab(newTab);
//   };

//   // const handleInputChange = (index, event) => {
//   //   // console.log("index>>>", index);
//   //   // console.log("event>>>", event);

//   //   const updatedFormFields = [...formFields]
//   //   updatedFormFields[field] = event.target.value
//   // }

//   const handlePlusButton = () => {
//     const newClass = formFields[formFields.length - 1]?.class || "";
//     setFormFields([
//       ...formFields,
//       {
//         class: "",
//         academicYear: "",
//         Fee: "",
//       },
//     ]);
//   };

//   return (
//     <>
//       <div className="disputes_tab">
//         <Nav pills>
//           <NavItem>
//             {userType === "admin" && (
//               <NavLink
//                 className={activeTab === "1" ? "active" : ""}
//                 onClick={() => _toggleTab("1")}
//               >
//                 Bus Service
//               </NavLink>
//             )}
//           </NavItem>

//           <NavItem>
//             {userType === "admin" && (
//               <NavLink
//                 className={activeTab === "2" ? "active" : ""}
//                 onClick={() => _toggleTab("2")}
//               >
//                 Salary
//               </NavLink>
//             )}
//           </NavItem>

//           <NavItem>
//             {userType === "admin" && (
//               <NavLink
//                 className={activeTab === "3" ? "active" : ""}
//                 onClick={() => _toggleTab("3")}
//               >
//                 Class
//               </NavLink>
//             )}
//           </NavItem>

//           <NavItem>
//             {userType === "admin" && (
//               <NavLink
//                 className={activeTab === "4" ? "active" : ""}
//                 onClick={() => _toggleTab("4")}
//               >
//                 Schedule
//               </NavLink>
//             )}
//           </NavItem>

//           <NavItem>
//             {userType === "admin" && (
//               <NavLink
//                 className={activeTab === "5" ? "active" : ""}
//                 onClick={() => _toggleTab("5")}
//               >
//                 Promote
//               </NavLink>
//             )}
//           </NavItem>

//           <NavItem>
//             {userType === "admin" && (
//               <NavLink
//                 className={activeTab === "6" ? "active" : ""}
//                 onClick={() => _toggleTab("6")}
//               >
//                 Holidays
//               </NavLink>
//             )}
//           </NavItem>

//           <NavItem>
//             <NavLink
//               className={activeTab === "7" ? "active" : ""}
//               onClick={() => _toggleTab("7")}
//             >
//               Personal
//             </NavLink>
//           </NavItem>

//           <NavItem>
//             {userType === "admin" && (
//               <NavLink
//                 className={activeTab === "8" ? "active" : ""}
//                 onClick={() => _toggleTab("8")}
//               >
//                 Organization
//               </NavLink>
//             )}
//           </NavItem>

//           <NavItem>
//             {userType === "admin" && (
//               <NavLink
//                 className={activeTab === "9" ? "active" : ""}
//                 onClick={() => _toggleTab("9")}
//               >
//                 Leave
//               </NavLink>
//             )}
//           </NavItem>
//         </Nav>

//         <TabContent
//           style={{ maxWidth: "800px", margin: "auto", padding: "0" }}
//           activeTab={activeTab}
//         >
//           <h6 style={{ textAlign: "center", marginTop: "10px" }}>Settings</h6>

//           <TabPane tabId="1">
//             <section>
//               <Card body>
//                 <NavLink
//                   style={{ textAlign: "center" }}
//                   className={activeTab === "1" ? "active" : ""}
//                 >
//                   <div className="innerHeader">
//                     <h2>Bus Service</h2>

//                     <div>
//                       <Button color="dark" outline>
//                         <i className="fa fa-plus"></i>
//                       </Button>
//                     </div>
//                   </div>

//                   <div
//                     style={{
//                       textAlign: "center",
//                       display: "flex",
//                       flexWrap: "wrap",
//                       justifyContent: "space-evenly",
//                     }}
//                   >
//                     <Input
//                       style={{
//                         marginTop: "30px",
//                         maxWidth: "350px",
//                         textAlign: "center",
//                       }}
//                       type="select"
//                     >
//                       <option hidden>Range in kms</option>
//                       <option>1-5 (kms)</option>
//                       <option>6-10 (kms)</option>
//                       <option>11-20 (kms)</option>
//                       <option>21-25 (kms)</option>
//                       <option>26-30 (kms)</option>
//                     </Input>

//                     <Input
//                       style={{
//                         marginTop: "30px",
//                         maxWidth: "350px",
//                         textAlign: "center",
//                       }}
//                       type="number"
//                     ></Input>

//                     <Input
//                       style={{
//                         marginTop: "30px",
//                         maxWidth: "350px",
//                         textAlign: "center",
//                       }}
//                       type="select"
//                     >
//                       <option hidden>Range in kms</option>
//                       <option>1-5 (kms)</option>
//                       <option>6-10 (kms)</option>
//                       <option>11-20 (kms)</option>
//                       <option>21-25 (kms)</option>
//                       <option>26-30 (kms)</option>
//                     </Input>

//                     <Input
//                       style={{
//                         marginTop: "30px",
//                         maxWidth: "350px",
//                         textAlign: "center",
//                       }}
//                       type="number"
//                     ></Input>

//                     <Input
//                       style={{
//                         marginTop: "30px",
//                         maxWidth: "350px",
//                         textAlign: "center",
//                       }}
//                       type="select"
//                     >
//                       <option hidden>Range in kms</option>
//                       <option>1-5 (kms)</option>
//                       <option>6-10 (kms)</option>
//                       <option>11-20 (kms)</option>
//                       <option>21-25 (kms)</option>
//                       <option>26-30 (kms)</option>
//                     </Input>

//                     <Input
//                       style={{
//                         marginTop: "30px",
//                         maxWidth: "350px",
//                         textAlign: "center",
//                       }}
//                       type="number"
//                     ></Input>

//                     <Button style={{ marginTop: "30px" }} color="primary">
//                       Save
//                     </Button>
//                   </div>
//                 </NavLink>
//               </Card>
//             </section>
//           </TabPane>
//         </TabContent>

//         <TabContent
//           style={{ maxWidth: "800px", margin: "auto", padding: "0" }}
//           activeTab={activeTab}
//         >
//           <TabPane tabId="2">
//             <section>
//               <Card body>
//                 <NavLink
//                   style={{ textAlign: "center" }}
//                   className={activeTab === "2" ? "active" : ""}
//                 >
//                   <div className="innerHeader">
//                     <h2>Salary</h2>

//                     <div>
//                       <Button color="dark" outline>
//                         <i className="fa fa-plus"></i>
//                       </Button>
//                     </div>
//                   </div>

//                   <div
//                     style={{
//                       textAlign: "center",
//                       display: "flex",
//                       flexWrap: "wrap",
//                       justifyContent: "space-evenly",
//                     }}
//                   >
//                     <Input
//                       style={{
//                         marginTop: "30px",
//                         maxWidth: "350px",
//                         textAlign: "center",
//                       }}
//                       type="select"
//                     >
//                       <option hidden>Experience</option>
//                       <option>Freshers</option>
//                       <option>1- 2 yrs experience</option>
//                       <option>2- 4 yrs experience</option>
//                       <option>4- 6 yrs experience</option>
//                       <option>Above 6 yrs experience</option>
//                     </Input>

//                     <Input
//                       style={{
//                         marginTop: "30px",
//                         maxWidth: "350px",
//                         textAlign: "center",
//                       }}
//                       type="number"
//                       value={"10000"}
//                     ></Input>

//                     <Input
//                       style={{
//                         marginTop: "30px",
//                         maxWidth: "350px",
//                         textAlign: "center",
//                       }}
//                       type="select"
//                     >
//                       <option hidden>Experience</option>
//                       <option>Freshers</option>
//                       <option>1- 2 yrs experience</option>
//                       <option>2- 4 yrs experience</option>
//                       <option>4- 6 yrs experience</option>
//                       <option>Above 6 yrs experience</option>
//                     </Input>

//                     <Input
//                       style={{
//                         marginTop: "30px",
//                         maxWidth: "350px",
//                         textAlign: "center",
//                       }}
//                       type="number"
//                       value={"10000"}
//                     ></Input>

//                     <Input
//                       style={{
//                         marginTop: "30px",
//                         maxWidth: "350px",
//                         textAlign: "center",
//                       }}
//                       type="select"
//                     >
//                       <option hidden>Experience</option>
//                       <option>Freshers</option>
//                       <option>1- 2 yrs experience</option>
//                       <option>2- 4 yrs experience</option>
//                       <option>4- 6 yrs experience</option>
//                       <option>Above 6 yrs experience</option>
//                     </Input>

//                     <Input
//                       style={{
//                         marginTop: "30px",
//                         maxWidth: "350px",
//                         textAlign: "center",
//                       }}
//                       type="number"
//                       value={"10000"}
//                     ></Input>

//                     <Button style={{ marginTop: "30px" }} color="primary">
//                       Save
//                     </Button>
//                   </div>
//                 </NavLink>
//               </Card>
//             </section>
//           </TabPane>
//         </TabContent>

//         <TabContent
//           style={{ maxWidth: "700px", margin: "auto", padding: "0" }}
//           activeTab={activeTab}
//         >
//           <TabPane tabId="3">
//             {/* Personal Information */}
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "baseline",
//               }}
//             ></div>
//             <section>
//               <Card body>
//                 <div className="innerHeader">
//                   <h2>Classes</h2>

//                   <div style={{ display: "flex" }}>
//                     {/* <div>
//                     <Button style={{margin:"2px"}} color="dark" outline onClick={() => _toggleModal2(true)}>
//                      Promote 
//                     </Button>
//                   </div> */}

//                     <div>
//                       <Button
//                         style={{ margin: "2px" }}
//                         color="primary"
//                         outline
//                         onClick={() => _toggleModal(true, "Create Class")}
//                       >
//                         {/* <i className="fa fa-plus"></i> */}
//                         Create Class
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             </section>
//             <section>
//               <Card body>
//                 <Table responsive style={{ textAlign: "center" }}>
//                   <thead>
//                     <tr>
//                       <th>Class</th>
//                       <th>Sections</th>
//                       <th>Fees(INR)</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>1</td>
//                       <td>A, B, C, D</td>
//                       <td>
//                         <Input style={{ textAlign: "center" }}></Input>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>2</td>
//                       <td>A, B, C, D</td>
//                       <td>
//                         <Input style={{ textAlign: "center" }}></Input>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </Table>
//                 <div style={{ textAlign: "center", marginTop: "30px" }}>
//                   <Button color="primary">Save</Button>
//                 </div>

//                 {/* <PaginatedItems itemsPerPage={4} /> */}
//                 {isModalOpen && (
//                   <CreateAndEditClassModal
//                     isOpen={isModalOpen}
//                     pageName={pageName}
//                     toggle={() => _toggleModal()}
//                     // fetchAllStudentData={() => fetchAllStudentData()}
//                   />
//                 )}
//               </Card>
//             </section>
//           </TabPane>
//         </TabContent>

//         <TabContent
//           style={{ maxWidth: "1200px", margin: "auto", padding: "0" }}
//           activeTab={activeTab}
//         >
//           <TabPane tabId="4">
//             <section>
//               <Card body>
//                 <NavLink
//                   style={{ textAlign: "center" }}
//                   className={activeTab === "4" ? "active" : ""}
//                 >
//                   <Table responsive>
//                     <thead>
//                       <tr>
//                         <th>Days</th>
//                         <th>Start-Time</th>
//                         <th>End-Time</th>
//                         <th>Class Duration</th>
//                         <th>Recess Time</th>
//                         <th>Recess Duration</th>
//                         <th></th>
//                       </tr>
//                     </thead>

//                     <tbody>
//                       <tr>
//                         <td>
//                           <Input type="select">
//                             <option hidden>Select</option>
//                             <option>Monday</option>
//                             <option>Tuesday</option>
//                             <option>Wednesday</option>
//                             <option>Thursday</option>
//                             <option>Friday</option>
//                             <option>Saturday</option>
//                           </Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>
//                           <Input type="select">
//                             <option hidden>Select</option>
//                             <option>Monday</option>
//                             <option>Tuesday</option>
//                             <option>Wednesday</option>
//                             <option>Thursday</option>
//                             <option>Friday</option>
//                             <option>Saturday</option>
//                           </Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>
//                           <Input type="select">
//                             <option hidden>Select</option>
//                             <option>Monday</option>
//                             <option>Tuesday</option>
//                             <option>Wednesday</option>
//                             <option>Thursday</option>
//                             <option>Friday</option>
//                             <option>Saturday</option>
//                           </Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>
//                           <Input type="select">
//                             <option hidden>Select</option>
//                             <option>Monday</option>
//                             <option>Tuesday</option>
//                             <option>Wednesday</option>
//                             <option>Thursday</option>
//                             <option>Friday</option>
//                             <option>Saturday</option>
//                           </Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>
//                           <Input type="select">
//                             <option hidden>Select</option>
//                             <option>Monday</option>
//                             <option>Tuesday</option>
//                             <option>Wednesday</option>
//                             <option>Thursday</option>
//                             <option>Friday</option>
//                             <option>Saturday</option>
//                           </Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>
//                           <Input type="select">
//                             <option hidden>Select</option>
//                             <option>Monday</option>
//                             <option>Tuesday</option>
//                             <option>Wednesday</option>
//                             <option>Thursday</option>
//                             <option>Friday</option>
//                             <option>Saturday</option>
//                           </Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                         <td>
//                           <Input></Input>
//                         </td>
//                       </tr>
//                     </tbody>
//                   </Table>
//                   <Button color="primary">Save</Button>
//                 </NavLink>
//               </Card>
//             </section>
//           </TabPane>
//         </TabContent>

//         <TabContent
//           style={{ maxWidth: "800px", margin: "auto", padding: "0" }}
//           activeTab={activeTab}
//         >
//           <TabPane tabId="5">
//             <section>
//               <Card body>
//                 <NavLink
//                   style={{ textAlign: "center" }}
//                   className={activeTab === "5" ? "active" : ""}
//                 >
//                   Promote
//                   <div
//                     style={{
//                       textAlign: "center",
//                       display: "flex",
//                       flexWrap: "wrap",
//                       justifyContent: "space-evenly",
//                     }}
//                   >
//                     <Input
//                       style={{
//                         marginTop: "30px",
//                         maxWidth: "350px",
//                         textAlign: "center",
//                       }}
//                       type="select"
//                     >
//                       <option hidden>Select Class</option>
//                       <option>1</option>
//                       <option>2</option>
//                       <option>3</option>
//                       <option>4</option>
//                       <option>5</option>
//                       <option>6</option>
//                       <option>7</option>
//                       <option>8</option>
//                       <option>9</option>
//                       <option>10</option>
//                     </Input>

//                     <Input
//                       style={{
//                         marginTop: "30px",
//                         maxWidth: "350px",
//                         textAlign: "center",
//                       }}
//                       type="select"
//                     >
//                       <option hidden>Select Section</option>
//                       <option>A</option>
//                       <option>B</option>
//                       <option>C</option>
//                       <option>D</option>
//                     </Input>

//                     <Input
//                       style={{
//                         marginTop: "30px",
//                         maxWidth: "350px",
//                         textAlign: "center",
//                       }}
//                       type="select"
//                     >
//                       <option hidden>From Acedemic Year</option>
//                       <option>2024-2025</option>
//                       <option>2025-2026</option>
//                       <option>2026-2027</option>
//                       <option>2027-2028</option>
//                       <option>2028-2029</option>
//                       <option>2029-2030</option>
//                     </Input>

//                     <Input
//                       style={{
//                         marginTop: "30px",
//                         maxWidth: "350px",
//                         textAlign: "center",
//                       }}
//                       type="select"
//                     >
//                       <option hidden>To Acedemic Year</option>
//                       <option>2024-2025</option>
//                       <option>2025-2026</option>
//                       <option>2026-2027</option>
//                       <option>2027-2028</option>
//                       <option>2028-2029</option>
//                       <option>2029-2030</option>
//                     </Input>
//                   </div>
//                   <Button
//                     style={{ marginTop: "30px", textAlign: "center" }}
//                     color="primary"
//                   >
//                     Promote Class
//                   </Button>
//                 </NavLink>
//               </Card>
//             </section>
//           </TabPane>
//         </TabContent>

//         <TabContent
//           style={{ maxWidth: "900px", margin: "auto", padding: "0" }}
//           activeTab={activeTab}
//         >
//           <TabPane tabId="6">
//             {/* Personal Information */}
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "baseline",
//               }}
//             ></div>
//             <section>
//               <Card body>
//                 <div className="innerHeader">
//                   <h2> List of Holidays</h2>

//                   <div>
//                     <Button
//                       color="dark"
//                       outline
//                       onClick={() => _toggleModal2(true)}
//                     >
//                       <i className="fa fa-plus"></i>
//                     </Button>
//                   </div>
//                 </div>
//               </Card>
//             </section>
//             <section>
//               <Card body>
//                 <Table responsive style={{ textAlign: "center" }}>
//                   <thead>
//                     <tr>
//                       <th>Date</th>
//                       <th>Occasion</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>
//                         <Input
//                           style={{
//                             marginTop: "10px",

//                             margin: "auto",
//                             maxWidth: "300px",
//                             textAlign: "center",
//                           }}
//                           type="date"
//                           // onChange={(e) => handleInputChange(index, e)}
//                         ></Input>
//                       </td>
//                       <td>
//                         <Input
//                           style={{
//                             marginTop: "10px",

//                             margin: "auto",
//                             maxWidth: "300px",
//                             textAlign: "center",
//                           }}
//                           type="text"
//                           placeholder="Ocassion"
//                           // onChange={(e) => handleInputChange(index, e)}
//                         ></Input>
//                       </td>
//                       <td>
//                         <Button
//                           color="danger"
//                           style={{ border: "none" }}
//                           outline
//                         >
//                           <i className="fa fa-trash"></i>
//                         </Button>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         <Input
//                           style={{

//                             margin: "auto",
//                             maxWidth: "300px",
//                             textAlign: "center",
//                           }}
//                           type="date"
//                           // onChange={(e) => handleInputChange(index, e)}
//                         ></Input>
//                       </td>
//                       <td>
//                         <Input
//                           style={{

//                             margin: "auto",
//                             maxWidth: "300px",
//                             textAlign: "center",
//                           }}
//                           type="text"
//                           placeholder="Ocassion"
//                           // onChange={(e) => handleInputChange(index, e)}
//                         ></Input>
//                       </td>
//                       <td>
//                         <Button
//                           color="danger"
//                           style={{ border: "none" }}
//                           outline
//                         >
//                           <i className="fa fa-trash"></i>
//                         </Button>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </Table>
//                 <div style={{ textAlign: "center", marginTop: "10px" }}>
//                   <Button color="primary">Save</Button>
//                 </div>

//                 {/* <PaginatedItems itemsPerPage={4} /> */}
//               </Card>
//               {isModal2Open && (
//                 <AddHolidayModal
//                   isOpen={isModal2Open}
//                   toggle={() => _toggleModal2()}
//                   // fetchAllStudentData={() => fetchAllStudentData()}
//                 />
//               )}
//             </section>
//           </TabPane>
//         </TabContent>

//         <TabContent
//           style={{ maxWidth: "800px", margin: "auto" }}
//           activeTab={activeTab}
//         >
//           <TabPane tabId="7">
//             {/* Personal Information */}
//             <section>
//               <Card body>
//                 <NavLink
//                   style={{ textAlign: "center" }}
//                   className={activeTab === "7" ? "active" : ""}
//                 >
//                   <div
//                     style={{
//                       textAlign: "center",
//                       display: "flex",
//                       flexDirection: "column",
//                       // flexWrap: "wrap",
//                       maxWidth: "90%",
//                       margin: "auto",
//                       marginTop: "5px",
//                     }}
//                   >
//                     Theme
//                     <Input
//                       style={{ marginTop: "10px", textAlign: "center" }}
//                       type="select"
//                     >
//                       <option>Light Mode</option>
//                       <option>Dark Mode</option>
//                     </Input>
//                   </div>
//                 </NavLink>
//               </Card>
//             </section>

//             <section>
//               <Card body>
//                 <NavLink
//                   style={{ textAlign: "center" }}
//                   className={activeTab === "7" ? "active" : ""}
//                 >
//                   <div
//                     style={{
//                       textAlign: "center",
//                       display: "flex",
//                       flexDirection: "column",
//                       // flexWrap: "wrap",
//                       maxWidth: "90%",
//                       margin: "auto",
//                       marginTop: "5px",
//                     }}
//                   >
//                     Change your Password
//                     <Input
//                       style={{ marginTop: "10px", textAlign: "center" }}
//                       type="password"
//                       placeholder="Old Password"
//                     ></Input>
//                     <Input
//                       style={{ marginTop: "10px", textAlign: "center" }}
//                       type="password"
//                       placeholder="New Password"
//                     ></Input>
//                     <Input
//                       style={{ marginTop: "10px", textAlign: "center" }}
//                       type="password"
//                       placeholder="Confirm New Password"
//                     ></Input>
//                   </div>
//                   <Button style={{ marginTop: "30px" }} color="primary">
//                     Change
//                   </Button>
//                 </NavLink>
//               </Card>
//             </section>
//           </TabPane>
//         </TabContent>

//         <TabContent
//           style={{ maxWidth: "900px", margin: "auto", padding: "0" }}
//           activeTab={activeTab}
//         >
//           {/* <h6 style={{ textAlign: "center" }}>Settings</h6> */}
//           <TabPane tabId="8">
//             {/* Personal Information */}

//             <section>
//               <Card body>
//                 <NavLink
//                   style={{ textAlign: "center" }}
//                   className={activeTab === "8" ? "active" : ""}
//                 >
//                   <Card body className="profileCard">
//                     <div className="cardImg">
//                       {/* {userDetails?.profileImage ? (
//                   <img src={userDetails.profileImage} alt="" />
//                 ) : ( */}
//                       <img
//                         src={require("../../assets/img/school management logo.jpg")}
//                         alt="defult profile image"
//                       />
//                       {/* )} */}
//                     </div>
//                     {/* <CardTitle>{userDetails.fullname}</CardTitle> */}
//                     {/* <span>{userDetails.email}</span> */}
//                     <div className="form-group">
//                       {/* <Label>Change Profile Photo</Label> */}
//                       <div className="customFileUpload">
//                         <Input type="file" id="customFileUpload" />
//                         {true ? (
//                           <Label for="customFileUpload" className="p-3">
//                             <i
//                               className="fa fa-edit"
//                               style={{ fontSize: "25px" }}
//                             ></i>

//                             <div className="customUploadText">
//                               <h6>Change Logo</h6>
//                               <span>File size must be less than 1mb</span>
//                             </div>
//                           </Label>
//                         ) : (
//                           <Label
//                             for="customFileUpload"
//                             className="uploaded p-3"
//                           >
//                             <img
//                               src={
//                                 require("../../assets/img/sign-up-doc.svg")
//                                   .default
//                               }
//                               alt=""
//                             />
//                             <div className="customUploadText">
//                               <span>File size must be less than 5mb</span>
//                             </div>
//                           </Label>
//                         )}
//                       </div>
//                     </div>
//                   </Card>
//                   <div
//                     style={{
//                       textAlign: "center",
//                       display: "flex",
//                       flexDirection: "column",
//                       // flexWrap: "wrap",
//                       alignItems: "baseline",
//                       maxWidth: "80%",
//                       margin: "auto",
//                       marginTop: "5px",
//                     }}
//                   >
//                     <Label>School Name :</Label>
//                     <Input type="text"></Input>

//                     <Label>Map URL :</Label>
//                     <Input type="text"></Input>

//                     <Label>Website :</Label>
//                     <Input type="text"></Input>

//                     <Label>Email :</Label>
//                     <Input type="text"></Input>

//                     <Label>Phone no. :</Label>
//                     <Input type="number"></Input>

//                     <h6 style={{ marginTop: "2%" }}>Address</h6>

//                     <Label>Locality</Label>
//                     <Input type="text" name="Locality" />

//                     <Label>City</Label>
//                     <Input
//                       style={{
//                         maxWidth: "100%",
//                         padding: "0",
//                         margin: "0",
//                       }}
//                       type="text"
//                       name="city"
//                     />

//                     <Label>State</Label>
//                     <Input type="text" name="state"></Input>

//                     <Label>Country</Label>
//                     <Input type="text" name="country"></Input>

//                     <Label>PinCode</Label>
//                     <Input type="text" name="pinCode" />
//                   </div>

//                   <Button style={{ marginTop: "30px" }} color="primary">
//                     Update
//                   </Button>
//                 </NavLink>
//               </Card>
//             </section>
//           </TabPane>
//         </TabContent>
//       </div>
//     </>
//   );
// };

// export default Settings;
