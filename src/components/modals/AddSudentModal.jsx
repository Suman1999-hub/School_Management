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
import { createSchool } from "../../http/http-calls";

const AddStudentModal = ({ isOpen, toggle }) => {
  const _closeModal = () => {
    toggle();
  };

  const [formData, setFormData] = useState({
    schoolName: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    website: "",
    email: "",
    firstName: "",
    lastName: "",
    DOB: "",
    gender: "",
    phoneNumber: "",
  });
  const payload = {
    name: formData.schoolName,
    schoolAddress: {
      city: formData.city,
      state: formData.state,
      country: formData.country,
      pinCode: formData.pinCode,
    },
    contact: {
      phoneNo: "24355465665",
      email: "jhdsg@gmail.com",
      website: "www.hcjss.com",
    },
    location: {
      type: "Point",
      coordinates: [73.323, 88.323],
    },
    email: formData.email,
    firstName: formData.firstName,
    lastName: formData.lastName,
    dob: formData.DOB,
    gender: formData.gender,
    phone: formData.phoneNumber,
  };
  const _createSchoolAPiCall = async (payload) => {
    try {
      const createSchoolApi = await createSchool(payload);
      console.log(createSchoolApi);
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

  return (
    <Modal
      isOpen={isOpen}
      toggle={() => _closeModal()}
      scrollable
      centered
      style={{ maxWidth: "600px" }}
    >
      <ModalHeader>Add Student</ModalHeader>
      <ModalBody>
        {/* Card Number */}
        <h6>Add Student details</h6>        
        
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
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>Section</Label>
              <Input
                type="select"
                name="gender"
                value={formData.gender}
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
        </Row>
        <Row>
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
        </Row>
        <FormGroup>
          <Label>Father's Name</Label>
          <Input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Father's Occupation</Label>
          <Input
            type="text"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Mother's Name</Label>
          <Input
            type="text"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Mother's Occupation</Label>
          <Input
            type="text"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleInputChange}
          />
        </FormGroup>
        <h6>Address</h6>
        <Row>
        <FormGroup>
          <Label>Locality</Label>
          <Input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
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
            name="website"
            value={formData.website}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Mobile no.</Label>
          <Input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
          />
        </FormGroup>
        {/* submit button */}
        <div className="inlineBtnWrapper">
          <Button color="primary" outline onClick={() => _closeModal()}>
            Cancel
          </Button>
          <Button
            color="primary"
            className="ms-3"
            // onClick={() => _createSchoolAPiCall(payload)}
          >
            Add Student
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default AddStudentModal;
