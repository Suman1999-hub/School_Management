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

const AddTeacherModal = ({ isOpen, toggle }) => {
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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        toggle={() => _closeModal()}
        scrollable
        centered
        size="xl"
      >
        <ModalHeader>Add Teacher</ModalHeader>
        <ModalBody>
          <div className="userAvatar">
            <img
              src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
              alt="Profile"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <Row>
              <Col md="4">
                <FormGroup>
                  <Input name="file" type="file" />
                </FormGroup>
              </Col>
            </Row>
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
                  <Label>Full Name</Label>
                  <Input
                    type="text"
                    name="full Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Subject</Label>
                  <Input
                    type="select"
                    name=""
                    value={formData.lastName}
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
                    name="joiningDate"
                    value={formData.gender}
                    onChange={handleInputChange}
                  />
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
              <Button color="primary" className="ms-3" onClick={() => null}>
                Add Teacher
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddTeacherModal;
