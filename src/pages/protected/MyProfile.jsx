import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Row,
  Col,
  CardTitle,
  Label,
  InputGroup,
  Input,
  InputGroupText,
} from "reactstrap";
import { errorHandler, formatDate } from "../../helper-methods";
import { getLoggedInUserDetail, updateProfile } from "../../http/http-calls";
import { useSelector } from "react-redux";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const AllGender = ["Male", "Female", "Transgender"];
const Roles = ["admin", "teacher", "student"];

const MyProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [userDetails, setUserDetails] = useState({});
  const [DOB, setDOB] = useState(null);

  const _toggleTab = (newTab = "1") => {
    if (activeTab !== newTab) setActiveTab(newTab);
  };

  console.log("DOB>>", DOB);
  console.log("userDetails>>", userDetails);

  // const userID = useSelector((state) => {
  //   return state.userCredential.user.id;
  // });
  // // console.log("userID>>>", userID);

  const fetchData = async () => {
    try {
      const response = await getLoggedInUserDetail();
      // console.log("response>>", response.user);
      setUserDetails(response.user);
    } catch (error) {
      errorHandler(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (userDetails) {
      const formattedDOB = formatDate(userDetails.dob);
      setDOB(formattedDOB);
    }
  }, [userDetails.dob]);

  const handleChange = (event, field) => {
    if (field === "dob") {
      setDOB(event.target.value);
    }
    const updatedNewDetails = { ...userDetails };
    updatedNewDetails[field] = event.target.value;
    setUserDetails(updatedNewDetails);
  };

  const handleSave = async () => {
    try {
      const response = await updateProfile(userDetails);
      // console.log("response>>", response.user);
      setUserDetails(response.user);
      alert("successfully updated")
    } catch (error) {
      errorHandler(error);
    }
  }

  return (
    <>
      <section>
        <Row className="gy-3 gy-xl-0">
          <Col xl="4">
            <Card body className="profileCard">
              <div className="cardImg">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt=""
                />
              </div>
              <CardTitle>{userDetails.fullname}</CardTitle>
              <span>{userDetails.email}</span>
            </Card>

            <hr />

            <Card body className="mt-2">
              {/* My Doc */}
              <h6>My Docs</h6>
              {/* Photo */}
              <div className="form-group">
                <Label>Change Profile Photo</Label>
                <div className="customFileUpload">
                  <Input type="file" id="customFileUpload" />
                  {true ? (
                    <Label for="customFileUpload" className="p-3">
                      <img
                        src={require("../../assets/img/uploadDoc.svg").default}
                        alt=""
                      />
                      <div className="customUploadText">
                        <h6>Upload File</h6>
                        <span>File size must be less than 5mb</span>
                      </div>
                    </Label>
                  ) : (
                    <Label for="customFileUpload" className="uploaded p-3">
                      <img
                        src={
                          require("../../assets/img/sign-up-doc.svg").default
                        }
                        alt=""
                      />
                      <div className="customUploadText">
                        <h6>Group 378961.svg</h6>
                        <span>File size must be less than 5mb</span>
                      </div>
                    </Label>
                  )}
                </div>
              </div>

              {/* Address Proof */}
              {/* <div className="form-group mb-0">
                <Label>Address Proof</Label>
                <div className="customFileUpload">
                  <Input type="file" id="customFileUpload" />
                  {false ? (
                    <Label for="customFileUpload" className="p-3">
                      <img
                        src={require("../../assets/img/uploadDoc.svg").default}
                        alt=""
                      />
                      <div className="customUploadText">
                        <h6>Upload Document</h6>
                        <span>File size must be less than 5mb</span>
                      </div>
                    </Label>
                  ) : (
                    <Label for="customFileUpload" className="uploaded p-3">
                      <img
                        src={
                          require("../../assets/img/sign-up-doc.svg").default
                        }
                        alt=""
                      />
                      <div className="customUploadText">
                        <h6>Group 378961.svg</h6>
                        <span>File size must be less than 5mb</span>
                      </div>
                    </Label>
                  )}
                </div>
              </div> */}
            </Card>
          </Col>
          <Col xl="8">
            <Card body>
              <div>
                <h6>Basic Info</h6>

                <Row>
                  <Col md="6" lg="4">
                    {/* name */}
                    <div className="form-group">
                      <Label>First Name</Label>
                      <Input
                        placeholder="Enter your name"
                        value={userDetails.firstName}
                        onChange={(e) => handleChange(e, "firstName")}
                      />
                    </div>
                  </Col>
                  <Col md="6" lg="4">
                    {/* name */}
                    <div className="form-group">
                      <Label>Last Name</Label>
                      <Input
                        placeholder="Enter your name"
                        value={userDetails.lastName}
                        onChange={(e) => handleChange(e, "lastName")}
                      />
                    </div>
                  </Col>
                  <Col md="6" lg="4">
                    {/* Email */}
                    <div className="form-group">
                      <Label>Email</Label>
                      <Input
                        readOnly={userDetails.loginType === "student"}
                        placeholder="Enter your email"
                        value={userDetails.email}
                        onChange={(e) => handleChange(e, "email")}
                      />
                    </div>
                  </Col>
                  <Col md="6" lg="4">
                    {/* phone number */}
                    <div className="form-group">
                      <Label>Gender</Label>
                      {userDetails.loginType === "student" ? (<Input readOnly value={userDetails.gender}/>) :(
                        <Input
                          type="select"
                          value={userDetails.gender}
                          onChange={(e) => handleChange(e, "gender")}
                          readOnly={userDetails.loginType === "student"}
                        >
                          <option value="">Select</option>
                          {AllGender.map((gender, index) => (
                            <option key={index} value={gender}>
                              {gender}
                            </option>
                          ))}
                        </Input>
                      )}
                    </div>
                  </Col>
                  <Col md="6" lg="4">
                    {/* phone number */}
                    <div className="form-group">
                      <Label>Phone Number</Label>
                      <Input
                        readOnly={userDetails.loginType === "student"}
                        placeholder="Enter your Phone Number"
                        value={userDetails.phone}
                        onChange={(e) => handleChange(e, "phone")}
                      />
                    </div>
                  </Col>
                  <Col md="6" lg="4">
                    {/* Year of Birth */}
                    <div className="form-group">
                      <Label>Date of Birth</Label>
                      <Input
                        readOnly={userDetails.loginType === "student"}
                        type="date"
                        value={DOB}
                        onChange={(e) => handleChange(e, "dob")}
                      >
                      </Input>
                    </div>
                  </Col>
                  <Col md="6" lg="4">
                    {/* Last 4 SSN */}
                    <div className="form-group">
                      <Label>Username</Label>
                      <InputGroup>
                        <Input
                          readOnly
                          placeholder="Enter your Username"
                          type="text"
                          value={userDetails.username}
                        />
                        {/* <InputGroupText
                          className="cursorPointer"
                          onClick={() => {
                            setShowPassword(!showPassword);
                          }}
                        >
                          <i
                            className={`far ${
                              showPassword ? "fa-eye" : "fa-eye-slash"
                            }`}
                          />
                        </InputGroupText> */}
                      </InputGroup>
                    </div>
                  </Col>

                  <Col md="6" lg="4">
                    {/* Login Type */}
                    <div className="form-group">
                      <Label>Role</Label>
                      {userDetails.loginType ==="student" ? (<Input readOnly value={userDetails.loginType}/>) : (
                        <Input
                          type="select"
                          value={userDetails.loginType}
                          onChange={(e) => handleChange(e, "loginType")}
                          // readOnly={userDetails.loginType === "student"}
                        >
                          <option disabled value="">
                            Select
                          </option>
                          {Roles.map((role, index) => (
                            <option key={index} value={role}>
                              {role}
                            </option>
                          ))}
                        </Input>
                      )}
                    </div>
                  </Col>
                </Row>

                {/* Current Address */}
                <div className="form-group">
                  <Label>Current Address</Label>
                  <Input type="textarea" placeholder="Enter your Address" />
                </div>

                <Row className="gy-3 gy-xl-0">
                  <Col lg="6" xl="4">
                    {/* City */}
                    <div className="form-group mb-0">
                      <Label>City</Label>
                      <Input placeholder="Enter your City" type="text"></Input>
                    </div>
                  </Col>

                  <Col lg="6" xl="4">
                    {/* State */}
                    <div className="form-group mb-0">
                      <Label>State</Label>
                      <Input type="select">
                        <option>Select</option>
                        {states.map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                      </Input>
                    </div>
                  </Col>

                  <Col lg="6" xl="4">
                    {/* Zip */}
                    <div className="form-group mb-0">
                      <Label>Zip</Label>
                      <Input placeholder="Enter your Zip Code" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>

        {/* submit button */}
        <div className="d-flex justify-content-center mt-5">
          <Button color="primary" className="btn-submit" onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      </section>
    </>
  );
};

export default MyProfile;
