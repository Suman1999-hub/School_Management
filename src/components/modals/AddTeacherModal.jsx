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
import { createTeacher, updateTeacher } from "../../http/http-calls";
import { dateFormat } from "../../helper-methods";

const AddTeacherModal = ({
  isOpen,
  pageName,
  toggle,
  id,
  teacherDetails,
  getTeacherAPiCall,
  getAllTeacherAPiCall,
}) => {
  const _closeModal = () => {
    toggle();
  };
  const [formData, setFormData] = useState({
    subject: teacherDetails?.subject?.[0] || "",
    city: teacherDetails?.address?.city || "",
    state: teacherDetails?.address?.state || "",
    locality: teacherDetails?.address?.locality || "",
    country: teacherDetails?.address?.country || "",
    pinCode: teacherDetails?.address?.pin || "",
    profileUrl: teacherDetails?.profileImage || "",
    email: teacherDetails?.email || "",
    firstName: teacherDetails?.firstName || "",
    lastName: teacherDetails?.lastName || "",
    DoB: teacherDetails?.dob || "",
    DoJ: teacherDetails?.joinDate || "",
    gender: teacherDetails?.gender || "",
    phoneNumber: teacherDetails?.phone || "",
    qualification: teacherDetails?.qualification || "",
    experience: teacherDetails?.experience || "",
  });
  const payload = {
    firstName: formData?.firstName,
    lastName: formData.lastName,
    gender: formData.gender,
    email: formData.email,
    phone: formData.phoneNumber,
    dob: formData.DoB,
    address: {
      locality: formData.locality,
      city: formData.city,
      state: formData.state,
      pin: formData.pinCode,
      country: formData.country,
    },
    profileImage:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    subject: [formData.subject],
    qualification: formData.qualification,
    experience: formData.experience,
    joinDate: formData.DoJ,
  };
  //Create
  const _createTeacherApiCall = async () => {
    try {
      const createTeacherRes = await createTeacher(payload);
      if (!createTeacherRes?.error) {
        getAllTeacherAPiCall();
        toggle();
      }
      console.log(payload);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("teacherDetails", teacherDetails);

  //Edit
  const _EditTeacherApiCall = async () => {
    try {
      if (id !== undefined) {
        const updateTeacherRes = await updateTeacher({ payload, id });
        if (!updateTeacherRes?.error) {
          getTeacherAPiCall(id);
        }
        console.log(id);

        toggle();
        console.log(updateTeacherRes);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log("288>>>>", teacherDetails, formData);

  return (
    <>
      <Modal
        isOpen={isOpen}
        toggle={() => _closeModal()}
        scrollable
        centered
        size="lg"
      >
        <ModalHeader>{pageName}</ModalHeader>
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
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormGroup>
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
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>DOB</Label>
                  <Input
                    type="date"
                    name="DoB"
                    value={formData.DoB}
                    onChange={handleInputChange}
                  />
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
                    {/* <option value="Others">Others</option> */}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>Phone Number</Label>
                  <Input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Date of Joining</Label>
                  <Input
                    type="date"
                    name="DoJ"
                    value={formData.DoJ}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>Qualification</Label>
                  <Input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Experience</Label>
                  <Input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>Address (Area and Street)</Label>
                  <Input
                    type="text"
                    name="locality"
                    value={formData.locality}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Subject</Label>
                  <Input
                    type="select"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  >
                    <option>Select Subject</option>
                    <option>Bengali</option>
                    <option>English</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <Row>
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

            {/* submit button */}
            <div className="inlineBtnWrapper">
              <Button color="primary" outline onClick={() => _closeModal()}>
                Cancel
              </Button>
              {pageName === "Create Teacher" ? (
                <Button
                  color="primary"
                  className="ms-3"
                  onClick={() => _createTeacherApiCall()}
                >
                  {pageName}
                </Button>
              ) : (
                <Button
                  color="primary"
                  className="ms-3"
                  onClick={() => _EditTeacherApiCall()}
                >
                  {pageName}
                </Button>
              )}
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddTeacherModal;
