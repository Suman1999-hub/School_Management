import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Row,
  Col,
  Input,
  NavLink,
  Card,
} from "reactstrap";
import stateData from "../../State.json";
import {
  createSchool,
  createStudent,
  getAvailableClasses,
  updateStudent,
} from "../../http/http-calls";
import {
  errorHandler,
  showerrorToast,
  successHandler,
} from "../../helper-methods";

const AddHolidayModal = ({ isOpen, toggle }) => {
  const _closeModal = () => {
    toggle();
  };

  const [classes, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //   // Handle form input changes
  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     const updatedFormdata = { ...formData };
  //     updatedFormdata[name] = value.trim();
  //     setFormData(updatedFormdata);
  //     validateForm(updatedFormdata);
  //   };

  //   const validateForm = (updatedUserDetails) => {
  //     const updatedErrors = { ...errors };
  //     let isFormValid = true;
  //     return new Promise((resolve) => {
  //       Object.keys(updatedUserDetails).forEach((each) => {
  //         switch (each) {
  //           case "firstName":
  //             if (updatedUserDetails?.firstName) {
  //               delete updatedErrors?.firstName;
  //             } else {
  //               updatedErrors.firstName = "*Required";
  //               isFormValid = false;
  //             }
  //             setErrors(updatedErrors);
  //             break;
  //           case "lastName":
  //             if (updatedUserDetails?.lastName) {
  //               delete updatedErrors?.lastName;
  //             } else {
  //               updatedErrors.lastName = "*Required";
  //               isFormValid = false;
  //             }
  //             setErrors(updatedErrors);
  //             break;
  //           case "mothersOccupation":
  //             if (updatedUserDetails?.mothersOccupation) {
  //               delete updatedErrors?.mothersOccupation;
  //             } else {
  //               updatedErrors.mothersOccupation = "*Required";
  //               isFormValid = false;
  //             }
  //             setErrors(updatedErrors);
  //             break;
  //           case "mothersName":
  //             if (updatedUserDetails?.mothersName) {
  //               delete updatedErrors?.mothersName;
  //             } else {
  //               updatedErrors.mothersName = "*Required";
  //               isFormValid = false;
  //             }
  //             setErrors(updatedErrors);
  //             break;
  //           case "fathersName":
  //             if (updatedUserDetails?.fathersName) {
  //               delete updatedErrors?.fathersName;
  //             } else {
  //               updatedErrors.fathersName = "*Required";
  //               isFormValid = false;
  //             }
  //             setErrors(updatedErrors);
  //             break;
  //           case "fathersOccupation":
  //             if (updatedUserDetails?.fathersOccupation) {
  //               delete updatedErrors?.fathersOccupation;
  //             } else {
  //               updatedErrors.fathersOccupation = "*Required";
  //               isFormValid = false;
  //             }
  //             setErrors(updatedErrors);
  //             break;
  //           case "dob":
  //             if (updatedUserDetails?.dob) {
  //               delete updatedErrors?.dob;
  //             } else {
  //               updatedErrors.dob = "*Required";
  //               isFormValid = false;
  //             }
  //             setErrors(updatedErrors);
  //             break;
  //           case "email":
  //             if (updatedUserDetails?.email) {
  //               if (emailRegex.test(updatedUserDetails?.email)) {
  //                 delete updatedErrors?.email;
  //               } else {
  //                 updatedErrors.email = "Invalid email!";
  //                 isFormValid = false;
  //               }
  //             } else {
  //               delete updatedErrors?.email;
  //             }
  //             setErrors(updatedErrors);
  //             break;
  //           case "phone":
  //             if (updatedUserDetails?.phone) {
  //               if (phoneRegex.test(updatedUserDetails?.phone)) {
  //                 delete updatedErrors?.phone;
  //               } else {
  //                 updatedErrors.phone = "Invalid mobile No.!";
  //                 isFormValid = false;
  //               }
  //             } else {
  //               updatedErrors.phone = "*Required";
  //               isFormValid = false;
  //             }
  //             setErrors(updatedErrors);
  //             break;

  //           case "city":
  //             if (updatedUserDetails?.city) {
  //               delete updatedErrors?.city;
  //             } else {
  //               updatedErrors.city = "*Required";
  //               isFormValid = false;
  //             }
  //             setErrors(updatedErrors);
  //             break;

  //           case "state":
  //             if (updatedUserDetails?.state) {
  //               delete updatedErrors?.state;
  //             } else {
  //               updatedErrors.state = "*Required";
  //               isFormValid = false;
  //             }
  //             setErrors(updatedErrors);
  //             break;

  //           case "pin":
  //             if (updatedUserDetails?.pin) {
  //               delete updatedErrors?.pin;
  //             } else {
  //               updatedErrors.pin = "*Required";
  //               isFormValid = false;
  //             }
  //             setErrors(updatedErrors);
  //             break;

  //           case "country":
  //             if (updatedUserDetails?.country) {
  //               delete updatedErrors?.country;
  //             } else {
  //               updatedErrors.country = "*Required";
  //               isFormValid = false;
  //             }
  //             setErrors(updatedErrors);
  //             break;

  //           default:
  //             break;
  //         }
  //       });
  //       resolve(isFormValid);
  //     });
  //   };

  return (
    <Modal
      isOpen={isOpen}
      toggle={() => _closeModal()}
      scrollable
      centered
      style={{ maxWidth: "800px" }}
    >
      <ModalHeader toggle={toggle}>Add Holiday</ModalHeader>

      <ModalBody>
      <section>
          <Card body>
            <NavLink
              style={{ textAlign: "center" }}
              //   className={activeTab === "5" ? "active" : ""}
            >
              <div style={{margin:"20px"}} className="innerHeader">

              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                }}
              >
                <Input
                  style={{
                    marginTop: "10px",

                    margin: "auto",
                    maxWidth: "300px",
                    textAlign: "center",
                  }}
                  type="date"
                  name="class"
                  // onChange={(e) => handleInputChange(index, e)}
                >
                 
                </Input>

                <Input
                  style={{
                    marginTop: "10px",

                    margin: "auto",
                    maxWidth: "300px",
                    textAlign: "center",
                  }}
                  placeholder="Occasion"
                  type="text"
                  name="fee"
                  // onChange={(e) => handleInputChange(index, e)}
                ></Input>

                 <Button color="dark" outline>
                 <i className="fa fa-plus"></i>
               </Button>

               
              </div>
            </NavLink>
          </Card>
        </section>

        <div>
          {/* submit button */}
          <div className="inlineBtnWrapper">
            <Button color="primary" outline onClick={() => _closeModal()}>
              Cancel
            </Button>
            <Button
              color="primary"
              className="ms-3"
              // onClick={() => _createStudentApiCall()}
            >
              Add
            </Button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default AddHolidayModal;
