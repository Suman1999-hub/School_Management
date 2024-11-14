import React, { useEffect, useState } from "react";
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
  updateStudent,
} from "../../http/http-calls";

const AddStudentModal = ({
  isOpen,
  pageName,
  toggle,
  id,
  studentDetails,
  fetchAllStudentData,
  getStudentAPICall,
}) => {
  const _closeModal = () => {
    toggle();
  };

console.log("studentDetails",studentDetails);


  const [formData, setFormData] = useState({
    Locality: studentDetails?.address?.locality || "",
    city: studentDetails?.address?.city || "",
    state: studentDetails?.address?.state || "",
    country: studentDetails?.address?.country || "",
    pinCode: studentDetails?.address?.pin || "",
    email: studentDetails?.email || "",
    firstName: studentDetails?.firstName || "",
    lastName: studentDetails?.lastName || "",
    DOB: studentDetails?.dob || "",
    gender: studentDetails?.gender || "",
    section: studentDetails?._class?.section || "",
    class: studentDetails?._class?.name || "",
    phoneNumber: studentDetails?.phone || "",
    FatherName: studentDetails?.guardian?.fathersName || "",
    MotherName: studentDetails?.guardian?.mothersName || "",
    MotherOccupation: studentDetails?.mothersOccupation || "",
    FatherOccupation: studentDetails?.fathersOccupation || "",
    session : studentDetails?.currentAcademicYear || "",
    joinDate: studentDetails?.joinDate || "",
    profileUrl: studentDetails?.profileUrl || ""
  });

  const payload = {
    firstName: formData?.firstName,
    lastName: formData?.lastName,
    gender: formData?.gender,
    guardian: {
      fathersName: formData?.FatherName,
      fathersOccupation: formData?.FatherOccupation,
      mothersName: formData?.MotherName,
      mothersOccupation: formData?.MotherOccupation,
    },
    address: {
      locality: formData?.Locality,
      city: formData?.city,
      state: formData?.state,
      pin: formData?.pinCode,
      country: formData?.country,
    },
    phone: formData?.phoneNumber,
    currentAcademicYear: formData?.session,
    dob: formData?.DOB,
    rollNo: "",
    joinDate: "2024",
    classname: formData?.class,
    section: formData?.section,
    signature: "base64EncodedString",
    profileImage: formData?.profileUrl,
    autoAssignRoll: true,
   
  };

  //Create
  const _createStudentApiCall = async () => {
    try {
      const createStudentRes = await createStudent(payload);
      if (!createStudentRes?.error) {
        fetchAllStudentData();
      }
      console.log(payload);
    } catch (err) {
      console.log(err);
    }
    _closeModal();

  };

  //Edit
  const _EditStudentApiCall = async () => {
    try {
      if (id !== undefined) {
        const updateStudentRes = await updateStudent({ payload, id });
        if (!updateStudentRes?.error) {
          getStudentAPICall(id);
        }

        console.log(updateStudentRes);
      }
    } catch (error) {
      console.log(error);
    }
    _closeModal();
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={() => _closeModal()}
      scrollable
      centered
      style={{ maxWidth: "600px" }}
    >
      {pageName === "Create Student" ? (
        <ModalHeader>Add Student</ModalHeader>
      ) : (
        <ModalHeader>Edit Student</ModalHeader>
      )}

      <ModalBody>
      <div className="userAvatar" style={{ textAlign: "center" }}>
            <img
              src={
                formData?.profileUrl
                  ? formData?.profileUrl
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
              <Input name="file" type="file" style={{ maxHeight: "35px" }} />
            </FormGroup>
          </div>
          <div>
          <Row>
          <Col md="6">
            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>Class</Label>
              <Input
                type="select"
                name="class"
                value={formData.class}
                onChange={handleInputChange}
              >
                <option value="">Select Class</option>
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
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>Section</Label>
              <Input
                type="select"
                name="section"
                value={formData.section}
                onChange={handleInputChange}
              >
                <option value="">Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                {/* <option value="Others">Others</option> */}
              </Input>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>Session</Label>
              <Input
                type="select"
                name="session"
                value={formData.session}
                onChange={handleInputChange}
              >
                <option value="">Select Session</option>
                <option value="2024-2025">2024-2025</option>
                <option value="2025-2026<">2025-2026</option>
                <option value="2026-2027">2026-2027</option>
                {/* <option value="Others">Others</option> */}
              </Input>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>Gender</Label>
              <Input
                type="select"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
                {/* <option value="Others">Others</option> */}
              </Input>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>DOB</Label>
              <Input
                type="date"
                name="DOB"
                value={formData.DOB}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label>Father's Name</Label>
          <Input
            type="text"
            name="FatherName"
            value={formData.FatherName}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Father's Occupation</Label>
          <Input
            type="text"
            name="FatherOccupation"
            value={formData.FatherOccupation}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>MotherName</Label>
          <Input
            type="text"
            name="MotherName"
            value={formData.MotherName}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Mother's Occupation</Label>
          <Input
            type="text"
            name="MotherOccupation"
            value={formData.MotherOccupation}
            onChange={handleInputChange}
          />
        </FormGroup>
        <h6>Address</h6>
        <Row>
          <FormGroup>
            <Label>Locality</Label>
            <Input
              type="text"
              name="Locality"
              value={formData.Locality}
              onChange={handleInputChange}
            />
          </FormGroup>
          <Col md="6">
            <FormGroup>
              <Label>City</Label>
              <Input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>State</Label>
              <Input
                type="select"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              >
                <option>Select State</option>
                {stateData.states?.map((curr) => (
                  <option key={curr.value} value={curr.state}>
                    {curr.state}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <FormGroup>
              <Label>Country</Label>
              <Input
                type="select"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              >
                <option>Select Country</option>
                <option value="India">India</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>PinCode</Label>
              <Input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label>email</Label>
          <Input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Mobile no.</Label>
          <Input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </FormGroup>
        {/* submit button */}
        <div className="inlineBtnWrapper">
          <Button color="primary" outline onClick={() => _closeModal()}>
            Cancel
          </Button>
          {pageName === "Create Student" ? (
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
