// // HolidateSettings.js
// import React, { useState } from 'react';
// import { Card, Button, Input, NavLink, TabPane, Table } from 'reactstrap';
// import AddHolidayModal from '../../components/modals/AddHolidayModal';

// const HolidateSettings = ({ activeTab, tabId, title, onAddClick }) => {

//     const [isModal2Open, setIsModal2Open] = useState(false);
//     const _toggleModal2 = (isOpen, name) => {
//       setIsModal2Open(isOpen);
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
//                   <h2> List of Holidate</h2>

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
//                           name="date"
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
//                           name="text"
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
//                           name="date"
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
//                           name="text"
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
//     </TabPane>
//   );
// };

// export default HolidateSettings;


// HolidateSettings.js
import React, { useEffect, useState } from "react";
import { Card, Button, Input, NavLink, TabPane } from "reactstrap";
import {
  getAvailableClasses,
  getAvailableSettings,
  setSettings,
} from "../../http/http-calls";

const HolidateSettings = ({ activeTab, tabId, title, settings }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [formFields, setFormFields] = useState(settings);
  const [errors, setErrors] = useState([
    {
      date: "",
      name: "",
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
        ? { ...field, [name] : value }
        : field
    );
    setFormFields(updatedFormFields);
    validateForm(updatedFormFields);
  };

  const handleAdd = async () => {
    try {
      // Use a temporary email for the new row
      const newname = formFields[formFields.length - 1]?.name || "";

      // Check for duplicate emails in the formFields excluding the new one
      const isEmailDuplicate = check(
        formFields.slice(0, formFields.length - 1),
        newname
      );
      if (isEmailDuplicate) {
        return;
      }
      const isValid = await validateForm(formFields);
      if (isValid) {
        setFormFields([...formFields, { name: "", date: "" }]);
        setErrors([...errors, { name: "", date: "" }]);
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

  const check = (formFields, newname) => {
    return formFields.some((field) => field.name === newname);
  };

  const validateForm = (updatedFormFields) => {
    return new Promise((resolve) => {
      const updatedErrors = updatedFormFields.map((field) => ({
        date: "",
        name: "",
      }));
      let isFormValid = true;

      updatedFormFields.forEach((field, rowIndex) => {
        // Check for name field errors
        if (!field.name) {
          updatedErrors[rowIndex].name = "*Required";
          isFormValid = false;
        } else if (check(updatedFormFields.slice(0, rowIndex), field.name)) {
          updatedErrors[rowIndex].name = "name already exists!";
          isFormValid = false;
        } else {
          updatedErrors[rowIndex].name = "";
        }

        // Check for date field errors
        if (!field.date) {
          updatedErrors[rowIndex].date = "*Required";
          isFormValid = false;
        } else {
          updatedErrors[rowIndex].date = "";
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
          setField: "holidays",
          holidays: formFields,
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
                <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                }}
              >
                <div>
                  <div>
                    <h6>Date</h6>
                  </div>
                </div>
                <div>
                  <div>
                    <h6>Occasion</h6>
                  </div>
                </div>
                <div>
                  <div>
                    <h6>Action</h6>
                  </div>
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
                      <div>
                        <Input
                          name="date"
                          style={contentStyles}
                          type="date"
                          value={fields.date}
                          onChange={(e) => handleChange(index, e)}
                        >                          
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
                          {errors[index]?.date}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div>
                        <Input
                          name="name"
                          style={contentStyles}
                          type="text"
                          value={fields.name}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </div>
                      <div>
                        <span style={{ color: "red" }}>
                          {errors[index]?.name}
                        </span>
                      </div>
                    </div>

                    {formFields.length > 1 && (
                      <Button
                        color="danger" outline
                        style={contentStyles}
                        onClick={() => handleDelete(index)}
                      >
                        <i className="fa fa-trash"></i>
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  // hidden={!validateForm(formFields)}
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

export default HolidateSettings;
