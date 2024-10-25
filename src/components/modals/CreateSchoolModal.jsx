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

const CreateSchoolModal = ({ isOpen, toggle }) => {
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
      size="xl"
    >
      <ModalHeader>Create School</ModalHeader>
      <ModalBody>
        {/* Card Number */}
        <h6>Add School details</h6>
        <FormGroup>
          <Label>School Name</Label>
          <Input
            type="text"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleInputChange}
          />
        </FormGroup>
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
        <FormGroup>
          <Label>Website</Label>
          <Input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
          />
        </FormGroup>
        <h6>Add Admin details</h6>
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
                {/* <option value="Others">Others</option> */}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label>Phone Number</Label>
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
          <Button
            color="primary"
            className="ms-3"
            onClick={() => _createSchoolAPiCall(payload)}
          >
            Create School
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default CreateSchoolModal;
