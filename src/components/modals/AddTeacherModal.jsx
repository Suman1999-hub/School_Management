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
  Card,
  Spinner,
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
  const [loading, setLoading] = useState(false);
  //Create
  const _createTeacherApiCall = async () => {
    setLoading(true);
    try {
      const createTeacherRes = await createTeacher(payload);
      if (!createTeacherRes?.error) {
        getAllTeacherAPiCall();
        toggle();
      }
      console.log(payload);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  console.log("teacherDetails", teacherDetails);

  //Edit
  const _EditTeacherApiCall = async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
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
    <>
      <Modal
        isOpen={isOpen}
        toggle={() => _closeModal()}
        scrollable
        centered
        size="lg"
      >
        <ModalHeader toggle={toggle}>{pageName}</ModalHeader>
        <ModalBody>
          <div className="userAvatar" style={{ textAlign: "center" }}>
            <img
              ref={uploadedImage}
              src={
                imageUrl
                  ? imageUrl
                  : "https://static.vecteezy.com/system/resources/thumbnails/013/360/247/small/default-avatar-photo-icon-social-media-profile-sign-symbol-vector.jpg"
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
                multiple={false}
                onChange={handleImageUpload}
                style={{ maxHeight: "35px" }}
              />
            </FormGroup>
          </div>

          <div>
            <Card style={{ backgroundColor: "#e6f6ff", padding: "5%" }}>
              <Row>
                <Col md="6">
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
                <Col md="3">
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
                <Col md="3">
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
                <Col md="4">
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
                <Col md="4">
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
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      {/* <option value="Others">Others</option> */}
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="4">
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
              <Row>
                <Col md="4">
                  <FormGroup>
                    <Label>
                      Date of Joining<span style={{ color: "red" }}>*</span>
                    </Label>
                    <Input
                      type="date"
                      name="DoJ"
                      value={formData.DoJ}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>

                <Col md="4">
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
                <Col md="4">
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
                    <Label>
                      Subject<span style={{ color: "red" }}>*</span>
                    </Label>
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
              </Row>

              <Row>
                <Col md="4">
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
                      Country<span style={{ color: "red" }}>*</span>
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
              </Row>
              <Row>
                <Col md="6">
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
            </Card>

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
                  onClick={() => _EditTeacherApiCall()}
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
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddTeacherModal;
