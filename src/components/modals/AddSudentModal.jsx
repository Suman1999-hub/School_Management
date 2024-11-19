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
} from "reactstrap";
import stateData from "../../State.json";
import {
  createSchool,
  createStudent,
  getAvailableClasses,
  updateStudent,
} from "../../http/http-calls";
import { errorHandler, showerrorToast, successHandler } from "../../helper-methods";

const AddStudentModal = ({
  isOpen,
  pageName,
  toggle,
  id,
  studentDetails,
  fetchAllStudentData,
  getStudentAPICall,
  updateStudentData,
}) => {
  const _closeModal = () => {
    toggle();
  };

  const [classes, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    locality: studentDetails?.locality || "",
    city: studentDetails?.city || "",
    state: studentDetails?.state || "",
    country: studentDetails?.country || "",
    pin: studentDetails?.pin || "",
    email: studentDetails?.email || "",
    firstName: studentDetails?.firstName || "",
    lastName: studentDetails?.lastName || "",
    dob: studentDetails?.dob || "",
    gender: studentDetails?.gender || "",
    section: studentDetails?.section || "",
    class: studentDetails?.class || "",
    phone: studentDetails?.phone || "",
    fathersName: studentDetails?.fathersName || "",
    mothersName: studentDetails?.mothersName || "",
    mothersOccupation: studentDetails?.mothersOccupation || "",
    fathersOccupation: studentDetails?.fathersOccupation || "",
    currentAcademicYear: studentDetails?.currentAcademicYear || "",
    joinDate: studentDetails?.joinDate || "",
    profileUrl: studentDetails?.profileUrl || "",
    rollNo: studentDetails?.rollNo,
    username: studentDetails?.username || "",
  });

  console.log("formData", formData);

  const [profileUrl, setProfileUrl] = useState(formData?.profileUrl || ""); // State to store image URL
  const uploadedImage = useRef(null);

  useEffect(() => {
    if (isOpen) {
      fetchClasses();
    }
  }, [isOpen]);

  const fetchClasses = async () => {
    setIsLoading(true);

    try {
      const response = await getAvailableClasses();
      console.log("response>>", response.settings);
      const updatedformdata = { ...formData };
      updatedformdata["currentAcademicYear"] = response.settings.academicYear;
      setFormData(updatedformdata);
      setClasses(response.settings.availableClasses);
    } catch (err) {
      // setError('Failed to load classes. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const payload = {
    firstName: formData?.firstName,
    lastName: formData?.lastName,
    email: formData?.email,
    gender: formData?.gender,
    guardian: {
      fathersName: formData?.fathersName,
      fathersOccupation: formData?.fathersOccupation,
      mothersName: formData?.mothersName,
      mothersOccupation: formData?.mothersOccupation,
    },
    address: {
      locality: formData?.locality,
      city: formData?.city,
      state: formData?.state,
      pin: formData?.pin,
      country: formData?.country,
    },
    phone: formData?.phone,
    currentAcademicYear: formData?.currentAcademicYear,
    dob: formData?.dob,
    classname: formData?.class,
    section: formData?.section,
    profileImage: formData?.profileUrl,
    autoAssignRoll: true,
  };

  //Create
  const _createStudentApiCall = async () => {
    const isvalid = await validateForm(formData)
    if (isvalid) {
      try {
        const createStudentRes = await createStudent(payload);
        if (!createStudentRes?.error) {
          fetchAllStudentData();
        }
        console.log(payload);
      } catch (error) {
        errorHandler(error);
      }
      _closeModal();
    } else {
      showerrorToast("Please fill all the required fields correctly!", "error", 4000)
    }

    
  };

  //Edit
  const _EditStudentApiCall = async () => {
    const isvalid = await validateForm(formData)
    if (isvalid) {
      try {
        if (id !== undefined) {
          const updateStudentRes = await updateStudent({ payload, id });
          if (!updateStudentRes?.error) {
            getStudentAPICall(id);
          }
  
          console.log(updateStudentRes);
        }
      } catch (error) {
        successHandler(error);
      }
      updateStudentData(formData);
      _closeModal();
    } else {
      showerrorToast("Please fill all the required fields correctly!", "error", 4000)
    }
   
    // console.log("formData", formData);

   
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormdata = { ...formData };
    updatedFormdata[name] = value.trim();
    setFormData(updatedFormdata);
    validateForm(updatedFormdata);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imagePreviewUrl = URL.createObjectURL(file);
      console.log(imagePreviewUrl);
      setProfileUrl(imagePreviewUrl);
    }
  };

  const validateForm = (updatedUserDetails) => {
    const updatedErrors = { ...errors };
    let isFormValid = true;
    return new Promise((resolve) => {
      Object.keys(updatedUserDetails).forEach((each) => {
        switch (each) {
          case "firstName":
            if (updatedUserDetails?.firstName) {
              delete updatedErrors?.firstName;
            } else {
              updatedErrors.firstName = "*Required";
              isFormValid = false;
            }
            setErrors(updatedErrors);
            break;
          case "lastName":
            if (updatedUserDetails?.lastName) {
              delete updatedErrors?.lastName;
            } else {
              updatedErrors.lastName = "*Required";
              isFormValid = false;
            }
            setErrors(updatedErrors);
            break;
          case "mothersOccupation":
            if (updatedUserDetails?.mothersOccupation) {
              delete updatedErrors?.mothersOccupation;
            } else {
              updatedErrors.mothersOccupation = "*Required";
              isFormValid = false;
            }
            setErrors(updatedErrors);
            break;
          case "mothersName":
            if (updatedUserDetails?.mothersName) {
              delete updatedErrors?.mothersName;
            } else {
              updatedErrors.mothersName = "*Required";
              isFormValid = false;
            }
            setErrors(updatedErrors);
            break;
          case "fathersName":
            if (updatedUserDetails?.fathersName) {
              delete updatedErrors?.fathersName;
            } else {
              updatedErrors.fathersName = "*Required";
              isFormValid = false;
            }
            setErrors(updatedErrors);
            break;
          case "fathersOccupation":
            if (updatedUserDetails?.fathersOccupation) {
              delete updatedErrors?.fathersOccupation;
            } else {
              updatedErrors.fathersOccupation = "*Required";
              isFormValid = false;
            }
            setErrors(updatedErrors);
            break;
          case "dob":
            if (updatedUserDetails?.dob) {
              delete updatedErrors?.dob;
            } else {
              updatedErrors.dob = "*Required";
              isFormValid = false;
            }
            setErrors(updatedErrors);
            break;
          case "email":
            if (updatedUserDetails?.email) {
              if (emailRegex.test(updatedUserDetails?.email)) {
                delete updatedErrors?.email;
              } else {
                updatedErrors.email = "Invalid email!";
                isFormValid = false;
              }
            } else {
              delete updatedErrors?.email;
            }
            setErrors(updatedErrors);
            break;
          case "phone":
            if (updatedUserDetails?.phone) {
              if (phoneRegex.test(updatedUserDetails?.phone)) {
                delete updatedErrors?.phone;
              } else {
                updatedErrors.phone = "Invalid mobile No.!";
                isFormValid = false;
              }
            } else {
              updatedErrors.phone = "*Required";
              isFormValid = false;
            }
            setErrors(updatedErrors);
            break;

          case "city":
            if (updatedUserDetails?.city) {
              delete updatedErrors?.city;
            } else {
              updatedErrors.city = "*Required";
              isFormValid = false;
            }
            setErrors(updatedErrors);
            break;

          case "state":
            if (updatedUserDetails?.state) {
              delete updatedErrors?.state;
            } else {
              updatedErrors.state = "*Required";
              isFormValid = false;
            }
            setErrors(updatedErrors);
            break;

          case "pin":
            if (updatedUserDetails?.pin) {
              delete updatedErrors?.pin;
            } else {
              updatedErrors.pin = "*Required";
              isFormValid = false;
            }
            setErrors(updatedErrors);
            break;

          case "country":
            if (updatedUserDetails?.country) {
              delete updatedErrors?.country;
            } else {
              updatedErrors.country = "*Required";
              isFormValid = false;
            }
            setErrors(updatedErrors);
            break;

          default:
            break;
        }
      });
      resolve(isFormValid);
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={() => _closeModal()}
      scrollable
      centered
      style={{ maxWidth: "600px" }}
    >
      {pageName === "Add Student" ? (
        <ModalHeader toggle={toggle}>Add Student</ModalHeader>
      ) : (
        <ModalHeader toggle={toggle}>Edit Student</ModalHeader>
      )}

      <ModalBody>
        <div className="userAvatar" style={{ textAlign: "center" }}>
          <img
            ref={uploadedImage}
            src={
              profileUrl
                ? profileUrl
                : "https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg"
              // : require("../../assets/img/SidebarMenu/user .png")
            }
            alt="Profile"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
        <div style={{ margin: "auto", maxWidth: "300px", marginTop: "10px" }}>
          <FormGroup>
            <Input
              name="file"
              type="file"
              style={{ maxHeight: "35px" }}
              onChange={handleImageUpload}
            />
          </FormGroup>
        </div>
        <div>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label>
                  First Name<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {errors?.firstName && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "5px",
                    }}
                  >
                    {errors.firstName}
                  </p>
                )}
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>
                  Last Name<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {errors?.lastName && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "5px",
                    }}
                  >
                    {errors.lastName}
                  </p>
                )}
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>
                  Class<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="select"
                  name="class"
                  value={formData.class || ""}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select Class
                  </option>
                  {classes.map((classItem) => (
                    <option key={classItem.id} value={classItem.id}>
                      {classItem.grade}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>
                  Section<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="select"
                  name="section"
                  value={formData.section || ""}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select Section
                  </option>
                  {classes.slice(0, 4).map((classItem, index) => (
                    <option key={classItem.id} value={classItem.id}>
                      {classItem.sections[index]}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Academic-Year</Label>
                <Input
                  disabled
                  // name="currentAcademicYear"
                  value={formData.currentAcademicYear}
                  // onChange={handleInputChange}
                ></Input>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>
                  Gender<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>
                  dob<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                />
                {errors?.dob && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "5px",
                    }}
                  >
                    {errors.dob}
                  </p>
                )}
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Label>
              Father's Name<span style={{ color: "red" }}>*</span>
            </Label>
            <Input
              type="text"
              name="fathersName"
              value={formData.fathersName}
              onChange={handleInputChange}
            />
            {errors?.fathersName && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  marginTop: "5px",
                }}
              >
                {errors.fathersName}
              </p>
            )}
          </FormGroup>
          <FormGroup>
            <Label>
              Father's Occupation<span style={{ color: "red" }}>*</span>
            </Label>
            <Input
              type="text"
              name="fathersOccupation"
              value={formData.fathersOccupation}
              onChange={handleInputChange}
            />
            {errors?.fathersOccupation && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  marginTop: "5px",
                }}
              >
                {errors.fathersOccupation}
              </p>
            )}
          </FormGroup>
          <FormGroup>
            <Label>
              mothersName<span style={{ color: "red" }}>*</span>
            </Label>
            <Input
              type="text"
              name="mothersName"
              value={formData.mothersName}
              onChange={handleInputChange}
            />
            {errors?.mothersName && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  marginTop: "5px",
                }}
              >
                {errors.mothersName}
              </p>
            )}
          </FormGroup>
          <FormGroup>
            <Label>
              Mother's Occupation<span style={{ color: "red" }}>*</span>
            </Label>
            <Input
              type="text"
              name="mothersOccupation"
              value={formData.mothersOccupation}
              onChange={handleInputChange}
            />
            {errors?.mothersOccupation && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  marginTop: "5px",
                }}
              >
                {errors.mothersOccupation}
              </p>
            )}
          </FormGroup>
          <h6>Address</h6>
          <Row>
            <FormGroup>
              <Label>locality</Label>
              <Input
                type="text"
                name="locality"
                value={formData.locality}
                onChange={handleInputChange}
              />
            </FormGroup>
            <Col md="6">
              <FormGroup>
                <Label>
                  City<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
                {errors?.city && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "5px",
                    }}
                  >
                    {errors.city}
                  </p>
                )}
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>
                  State<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                />
                {errors?.state && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "5px",
                    }}
                  >
                    {errors.state}
                  </p>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label>
                  Country<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
                {errors?.country && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "5px",
                    }}
                  >
                    {errors.country}
                  </p>
                )}
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>
                  pin<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="text"
                  name="pin"
                  value={formData.pin}
                  onChange={handleInputChange}
                />
                {errors?.pin && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "5px",
                    }}
                  >
                    {errors.pin}
                  </p>
                )}
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label>email</Label>
            <Input
              type="text"
              name="email"
              value={formData.email || ""}
              onChange={handleInputChange}
            />
            {errors?.email && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  marginTop: "5px",
                }}
              >
                {errors.email}
              </p>
            )}
          </FormGroup>
          <FormGroup>
            <Label>
              Mobile no.<span style={{ color: "red" }}>*</span>
            </Label>
            <Input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors?.phone && (
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  marginTop: "5px",
                }}
              >
                {errors.phone}
              </p>
            )}
          </FormGroup>
          {/* submit button */}
          <div className="inlineBtnWrapper">
            <Button color="primary" outline onClick={() => _closeModal()}>
              Cancel
            </Button>
            {pageName === "Add Student" ? (
              <Button
                color="primary"
                className="ms-3"
                onClick={() => _createStudentApiCall()}
              >
                {pageName}
              </Button>
            ) : (
              <Button
                color="primary"
                className="ms-3"
                onClick={() => _EditStudentApiCall()}
              >
                {pageName}
              </Button>
            )}
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default AddStudentModal;
