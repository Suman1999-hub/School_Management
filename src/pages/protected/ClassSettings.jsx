// // ClassSettings.js
// import React, { useState } from 'react';
// import { Card, Button, Input, NavLink, TabPane, Table } from 'reactstrap';
// import CreateAndEditClassModal from '../../components/modals/CreateAndEditClassModal';

// const ClassSettings = ({ activeTab, tabId, title, onAddClick }) => {

//   const [pageName, setPageName] = useState("");

//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const _toggleModal = (isOpen, name) => {
//       setIsModalOpen(isOpen);
//       setPageName(name);
//     };

//   const contentStyles = {
//     marginTop: "30px",
//     maxWidth: "350px",
//     textAlign: "center",
//   };

//   return (
//     <TabPane tabId={tabId}>
//       <div
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
//     </TabPane>
//   );
// };

// export default ClassSettings;


// ClassSettings.js
import React, { useEffect, useState } from "react";
import { Card, Button, Input, NavLink, TabPane, Label } from "reactstrap";
import {
  getAvailableClasses,
  getAvailableSettings,
  setSettings,
} from "../../http/http-calls";
import SpinnerLoading from "../../components/SpinnerLoading";

const ClassSettings = ({ activeTab, tabId, title, settings }) => {
  const [fee, setFee] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [formFields, setFormFields] = useState(settings);
  const [errors, setErrors] = useState([
    {
      grade: "",
      fee: "",
    },
  ]);
  const contentStyles = {
    marginTop: "30px",
    maxWidth: "350px",
    textAlign: "center",
  };

  console.log("formFields>>>", formFields);
  console.log("errors>>>", errors);

  const handleChange = (index, event) => {
    const { value, name } = event.target;
    const updatedFormFields = formFields.map((field, i) =>
      i === index
        ? { ...field, [name]: name === "fee" ? parseFloat(value) : value }
        : field
    );
    setFormFields(updatedFormFields);
    validateForm(updatedFormFields);
  };

  const handleAdd = async () => {
    try {
      // Use a temporary email for the new row
      const newgrade = formFields[formFields.length - 1]?.grade || "";

      // Check for duplicate emails in the formFields excluding the new one
      const isEmailDuplicate = check(
        formFields.slice(0, formFields.length - 1),
        newgrade
      );
      if (isEmailDuplicate) {
        return;
      }
      const isValid = await validateForm(formFields);
      if (isValid) {
        setFormFields([...formFields, { grade: "", fee: "" }]);
        setErrors([...errors, { grade: "", fee: "" }]);
      }
    } catch (error) {}
  };

  const handleDelete = (indexToDelete) => {
    const updatedFormFields = formFields.filter(
      (_, index) => index !== indexToDelete
    );
    const updatedErrors = errors.filter((_, index) => index !== indexToDelete);
    setFormFields(updatedFormFields);
    setErrors(updatedErrors);
  };

  const check = (formFields, newgrade) => {
    return formFields.some((field) => field.grade === newgrade);
  };

  const validateForm = (updatedFormFields) => {
    return new Promise((resolve) => {
      const updatedErrors = updatedFormFields.map((field) => ({
        grade: "",
        fee: "",
      }));
      let isFormValid = true;

      updatedFormFields.forEach((field, rowIndex) => {
        // Check for grade field errors
        if (!field.grade) {
          updatedErrors[rowIndex].grade = "*Required";
          isFormValid = false;
        } else if (check(updatedFormFields.slice(0, rowIndex), field.grade)) {
          updatedErrors[rowIndex].grade = "grade already exists!";
          isFormValid = false;
        } else {
          updatedErrors[rowIndex].grade = "";
        }

        // Check for amount field errors
        if (!field.fee) {
          updatedErrors[rowIndex].fee = "*Required";
          isFormValid = false;
        } else {
          updatedErrors[rowIndex].fee = "";
        }
      });

      setErrors(updatedErrors);
      resolve(isFormValid);
    });
  };

  const handleSave = async () => {
    const isValid = await validateForm(formFields);
    if (isValid) {
      try {
        const payload = {
          setField: "busFee",
          busFee: formFields,
        };

        const response = await setSettings(payload);
        console.log("response>>>", response);
      } catch (e) {
        console.log(e);
      }
    } else {
    }
  };

  return (
    <>
     
        <TabPane tabId={tabId}>
          <section>
            <Card body>
              <NavLink
                style={{ textAlign: "center" }}
                className={activeTab === tabId ? "active" : ""}
              >
                <div className="innerHeader">
                  <h2>{title}</h2>
                  <div>
                    <Button color="dark" outline onClick={handleAdd}>
                      <i className="fa fa-plus"></i>
                    </Button>
                  </div>
                </div>
              
                {formFields.map((fields, index) => (
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-evenly",
                    }}
                    key={index}
                  >
                    <div>
                    {/* {index === 1 &&  <div>grade</div>} */}
                    
                      <div>
                        <Input
                          name="grade"
                          style={contentStyles}
                          type="select"
                          value={fields.grade}
                          onChange={(e) => handleChange(index, e)}
                        >
                          <option>Select Class</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </Input>
                      </div>
                      <div>
                        <span
                          style={{
                            color: "red",
                            display: "block",
                            marginTop: "5px",
                            fontSize: "12px",
                          }}
                        >
                          {errors[index]?.grade}
                        </span>
                      </div>
                    </div>

                    <div>
                    {/* {index === 1 &&  <div>Amount</div>} */}

                      <div>
                      <Input
                          name="fee"
                          style={contentStyles}
                          type="number"
                          value={fields.fee}
                          placeholder="Fees"
                          onChange={(e) => handleChange(index, e)}
                        />
                      </div>
                      <div>
                        <span style={{ color: "red" }}>
                          {errors[index]?.fee}
                        </span>
                      </div>
                    </div>

                    {formFields.length > 1 && (
                      <Button
                        color="danger" outline
                        style={{
                          marginTop: "30px",  
                          maxWidth: "350px",
                          textAlign: "center",
                        }}
                        onClick={() => handleDelete(index)}
                      >
                        <i className="fa fa-trash"></i>
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  style={{ marginTop: "30px" }}
                  color="primary"
                  onClick={handleSave}
                >
                  Save
                </Button>
              </NavLink>
            </Card>
          </section>
        </TabPane>
    </>
  );
};

export default ClassSettings;

