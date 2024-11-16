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
  Spinner,
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
  currentPage,
  itemsPerPage,
}) => {
  const _closeModal = () => {
    toggle();
  };
  const [schoolId, setSchoolId] = useState();
  const [loading, setLoading] = useState(false);
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

  const createPayload = {
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
    locationUrl: formData.locationUrl,
    email: formData.email,
    firstName: formData.firstName,
    lastName: formData.lastName,
    dob: formData.DOB,
    gender: formData.gender,
    phone: formData.phoneNumber,
  };
  const editPayload = {
    name: formData.schoolName,
    address: {
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
    locationUrl: formData.locationUrl,
    admin: {
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      dob: formData.DOB,
      gender: formData.gender,
      phone: formData.phoneNumber,
    },
  };
  const _createSchoolAPiCall = async () => {
    setLoading(true);
    try {
      const createSchoolApiRes = await createSchool(createPayload);
      if (!createSchoolApiRes.error) {
        fetchAllSchoolData(currentPage, itemsPerPage);
        toggle();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false after the API call finishes
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
          phoneNumber: found.admin?.phone || "",
          SchoolPhNumber: found.contact?.phoneNo || "",
          schoolEmail: found.contact?.email || "",
          locationUrl: found.locationUrl || "",
        });
        setSchoolId(found._id);
      }
    }
  }, [index, data]);

  const _updateSchoolAPiCall = async () => {
    setLoading(true);
    try {
      if (schoolId !== undefined) {
        const updateSchoolRes = await updateSchool({ editPayload, schoolId });
        if (!updateSchoolRes?.error) {
          fetchAllSchoolData(currentPage, itemsPerPage);
        }
        console.log(schoolId);

        toggle();
        console.log(updateSchoolRes);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const [imageUrl, setImageUrl] = useState(""); // State to store image URL
  const uploadedImage = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imagePreviewUrl = URL.createObjectURL(file);
      console.log(imagePreviewUrl);
      setImageUrl(imagePreviewUrl);
    }
  };
  return (
    <Modal isOpen={isOpen} toggle={_closeModal} scrollable centered size="lg">
      <ModalHeader toggle={toggle}>{pageName}</ModalHeader>
      <ModalBody>
        <div className="userAvatar" style={{ textAlign: "center" }}>
          <img
            ref={uploadedImage}
            src={
              imageUrl
                ? imageUrl
                : "https://www.shutterstock.com/image-vector/image-icon-trendy-flat-style-260nw-643080895.jpg"
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
              accept="image/*"
              multiple={false} // should be boolean not string
              onChange={handleImageUpload}
              style={{ maxHeight: "35px" }}
            />
          </FormGroup>
        </div>
        <h6>School details</h6>
        <div
          style={{
            // border: "1px solid black",
            padding: "3%",
            backgroundColor: "#e6f4f5",
            borderRadius: "10px",
            marginBottom: "5px",
          }}
        >
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>
                  School Name<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>
                  School Phone Number<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="text"
                  name="SchoolPhNumber"
                  value={formData.SchoolPhNumber}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>
                  School Email<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="text"
                  name="schoolEmail"
                  value={formData.schoolEmail}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label>Location Url</Label>
                <Input
                  type="text"
                  name="locationUrl"
                  value={formData.locationUrl}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
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
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <FormGroup>
                <Label>
                  State<span style={{ color: "red" }}>*</span>
                </Label>
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
            <Col md="4">
              <FormGroup>
                <Label>
                  Country <span style={{ color: "red" }}>*</span>
                </Label>
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
            <Col md="4">
              <FormGroup>
                <Label>
                  PinCode<span style={{ color: "red" }}>*</span>
                </Label>
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
                <Label>Website</Label>
                <Input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </div>

        <h6>Admin details</h6>
        <div
          style={{
            padding: "3%",
            backgroundColor: "#ebf7ff",
            borderRadius: "10px",
          }}
        >
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>
                  Email<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="4">
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
              </FormGroup>
            </Col>
            <Col md="4">
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
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="3">
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
            <Col md="3">
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
            <Col md="6">
              <FormGroup>
                <Label>
                  Phone Number<span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </div>
        <div className="inlineBtnWrapper">
          <Button color="primary" outline onClick={_closeModal}>
            Cancel
          </Button>
          {pageName !== "Edit School" ? (
            <Button
              color="primary"
              className="ms-3"
              onClick={() => _createSchoolAPiCall()}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm">Loading...</Spinner>
                  <span style={{ color: "white" }}> Creating...</span>
                </>
              ) : (
                pageName
              )}
            </Button>
          ) : (
            <Button
              color="primary"
              className="ms-3"
              onClick={() => _updateSchoolAPiCall()}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm">Loading...</Spinner>
                  <span style={{ color: "white" }}> Update...</span>
                </>
              ) : (
                pageName
              )}
            </Button>
          )}
        </div>
      </ModalBody>
    </Modal>
  );
};

export default CreateSchoolModal;
