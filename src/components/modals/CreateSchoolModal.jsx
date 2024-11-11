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
import { createSchool, updateSchool } from "../../http/http-calls";

const CreateSchoolModal = ({
  isOpen,
  pageName,
  toggle,
  index,
  data,
  fetchAllSchoolData,
}) => {
  const _closeModal = () => {
    toggle();
  };
  const [schoolId, setSchoolId] = useState();
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
    SchoolPhNumber: "",
    schoolEmail: "",
    locationUrl: "",
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
      phoneNo: formData.SchoolPhNumber,
      email: formData.schoolEmail,
      website: formData.website,
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

  const _createSchoolAPiCall = async () => {
    try {
      const createSchoolApi = await createSchool(payload);
      toggle();
      console.log(createSchoolApi);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (index !== null && data) {
      const found = data[index];
      if (found) {
        setFormData({
          schoolName: found.name || "",
          city: found.address?.city || "",
          state: found.address?.state || "",
          country: found.address?.country || "",
          pinCode: found.address?.pinCode || "",
          website: found.contact?.website || "",
          email: found.admin?.email || "",
          firstName: found.admin?.firstName || "",
          lastName: found.admin?.lastName || "",
          DOB: found.admin?.dob || "",
          gender: found.admin?.gender || "",
          phoneNumber: found.admin?.phoneNumber || "",
          SchoolPhNumber: found.contact?.phoneNo || "",
          schoolEmail: found.contact?.email || "",
          locationUrl: found.locationUrl || "",
        });
        setSchoolId(found._id);
      }
    }
  }, [index, data]);

  const _updateSchoolAPiCall = async () => {
    try {
      if (schoolId !== undefined) {
        const updateSchoolRes = await updateSchool({ payload, schoolId });
        if (!updateSchoolRes?.error) {
          fetchAllSchoolData();
        }
        console.log(schoolId);

        toggle();
        console.log(updateSchoolRes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={_closeModal} scrollable centered size="lg">
      <ModalHeader>{pageName}</ModalHeader>
      <ModalBody>
        {console.log("schoollId", schoolId)}
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
        <Row>
          <Col md="6">
            <FormGroup>
              <Label>School Phone Number</Label>
              <Input
                type="text"
                name="SchoolPhNumber"
                value={formData.SchoolPhNumber}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>School Email</Label>
              <Input
                type="text"
                name="schoolEmail"
                value={formData.schoolEmail}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label>Location Url</Label>
          <Input
            type="text"
            name="locationUrl"
            value={formData.locationUrl}
            onChange={handleInputChange}
          />
        </FormGroup>
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
        <div className="inlineBtnWrapper">
          <Button color="primary" outline onClick={_closeModal}>
            Cancel
          </Button>
          {pageName !== "Edit School" ? (
            <Button
              color="primary"
              className="ms-3"
              onClick={() => _createSchoolAPiCall()}
            >
              {pageName}
            </Button>
          ) : (
            <Button
              color="primary"
              className="ms-3"
              onClick={() => _updateSchoolAPiCall()}
            >
              {pageName}
            </Button>
          )}
        </div>
      </ModalBody>
    </Modal>
  );
};

export default CreateSchoolModal;
