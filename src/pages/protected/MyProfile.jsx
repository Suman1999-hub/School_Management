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
import {
  CheckFormUpdate,
  errorHandler,
  formatDate,
  successHandler,
} from "../../helper-methods";
import { getLoggedInUserDetail, updateProfile } from "../../http/http-calls";
import { useSelector } from "react-redux";

const AllGender = ["Male", "Female"];

const MyProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [updatedUserDetails, setUpdatedUserDetails] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [address, setAddress] = useState({});
  const [DOB, setDOB] = useState(null);
  const [isChanged, setIsChanged] = useState(false);

  const _toggleTab = (newTab = "1") => {
    if (activeTab !== newTab) setActiveTab(newTab);
  };

  // console.log("userDetails>>", userDetails);
  console.log("updatedUserDetails>>", updatedUserDetails);

  const fetchuserDetails = async () => {
    try {
      const response = await getLoggedInUserDetail();
      // console.log("response>>", response.user);
      setUpdatedUserDetails(response.user);
      setUserDetails(response.user);
    } catch (error) {
      errorHandler(error);
    }
  };

  useEffect(() => {
    fetchuserDetails();
  }, []);

  useEffect(() => {
    if (updatedUserDetails) {
      const formattedDOB = formatDate(updatedUserDetails.dob);
      setDOB(formattedDOB);
      setAddress(updatedUserDetails.address);
    }
  }, [updatedUserDetails.dob]);

  const handleChange = (event, field) => {
    if (field === "dob") {
      setDOB(event.target.value);
    }
    const updatedNewDetails = { ...updatedUserDetails };
    updatedNewDetails[field] = event.target.value;
    setUpdatedUserDetails(updatedNewDetails);
  };

  const handleAddress = (event, field) => {
    const updatedAddress = { ...address };
    updatedAddress[field] = event.target.value;
    setAddress(updatedAddress);
    setUpdatedUserDetails((prev) => ({
      ...prev,
      address: updatedAddress,
    }));
  };

  const handleSave = async () => {
    const payload = CheckFormUpdate(userDetails, updatedUserDetails);
    console.log("payload>>>", payload);

    try {
      if (payload) {
        setIsChanged(true)
        const response = await updateProfile(payload);
        // console.log("response>>", response.user);
        setUpdatedUserDetails(response.user);
        alert("successfully updated");
      } else {
        const message = "Changes up-to-date"
        successHandler(message);
        // alert("Changes up-to-date");
      }
    } catch (error) {
      successHandler(error);
    }
  };

  return (
    <>
      <section>
        <Row className="gy-3 gy-xl-0">
          <Col xl="4">
            <Card body className="profileCard">
              <div className="cardImg">
                {updatedUserDetails?.profileImage ? (
                  <img src={updatedUserDetails.profileImage} alt="" />
                ) : (
                  <img
                    src={require("../../assets/img/SidebarMenu/profile.png")}
                    alt="defult profile image"
                  />
                )}
              </div>
              <CardTitle>{updatedUserDetails.fullname}</CardTitle>
              {/* <span>{updatedUserDetails.email}</span> */}
              <div className="form-group">
                {/* <Label>Change Profile Photo</Label> */}
                <div className="customFileUpload">
                  <Input type="file" id="customFileUpload" />
                  {true ? (
                    <Label for="customFileUpload" className="p-3">
                      <i
                        className="fa fa-edit"
                        style={{ fontSize: "25px" }}
                      ></i>

                      <div className="customUploadText">
                        <h6>Change Profile Picture</h6>
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
            </Card>

            <hr />
          </Col>
          <Col xl="8">
            <Card body>
              <div>
                <h6>Basic Info</h6>

                <Row>
                  <Col md="6" lg="4">
                    {/* name */}
                    {updatedUserDetails.firstName && (
                      <div className="form-group">
                        <Label>First Name</Label>
                        <Input
                          placeholder="Enter your name"
                          value={updatedUserDetails.firstName}
                          onChange={(e) => handleChange(e, "firstName")}
                        />
                      </div>
                    )}
                  </Col>
                  <Col md="6" lg="4">
                    {/* name */}
                    {updatedUserDetails.lastName && (
                      <div className="form-group">
                        <Label>Last Name</Label>
                        <Input
                          placeholder="Enter your name"
                          value={updatedUserDetails.lastName}
                          onChange={(e) => handleChange(e, "lastName")}
                        />
                      </div>
                    )}
                  </Col>
                  <Col md="6" lg="4">
                    {/* phone number */}
                    {updatedUserDetails.gender && (
                      <div className="form-group">
                        <Label>Gender</Label>
                        {updatedUserDetails.loginType === "student" ? (
                          <Input disabled value={updatedUserDetails.gender} />
                        ) : (
                          <Input
                            type="select"
                            value={updatedUserDetails.gender}
                            onChange={(e) => handleChange(e, "gender")}
                            disabled={
                              updatedUserDetails.loginType === "student"
                            }
                          >
                            <option hidden>Select</option>
                            {AllGender.map((gender, index) => (
                              <option key={index} value={gender}>
                                {gender}
                              </option>
                            ))}
                          </Input>
                        )}
                      </div>
                    )}
                  </Col>
                  {updatedUserDetails?.class?.name ? (
                    <Col md="6" lg="4">
                      {/* Login Type */}
                      <div className="form-group">
                        <Label>Class</Label>
                        <Input disabled value={updatedUserDetails.class.name} />
                      </div>
                    </Col>
                  ) : (
                    ""
                  )}

                  {updatedUserDetails?.class?.section ? (
                    <Col md="6" lg="4">
                      {/* Login Type */}
                      <div className="form-group">
                        <Label>Section</Label>
                        <Input
                          disabled
                          value={updatedUserDetails.class.section}
                        />
                      </div>
                    </Col>
                  ) : (
                    ""
                  )}
                  {updatedUserDetails?.rollNo ? (
                    <Col md="6" lg="4">
                      {/* Login Type */}
                      <div className="form-group">
                        <Label>Roll No.</Label>
                        <Input disabled value={updatedUserDetails.rollNo} />
                      </div>
                    </Col>
                  ) : (
                    ""
                  )}

                  {updatedUserDetails?.currentAcademicYear ? (
                    <Col md="6" lg="4">
                      {/* Login Type */}
                      <div className="form-group">
                        <Label>Academic-Year</Label>
                        <Input
                          disabled
                          value={updatedUserDetails.currentAcademicYear}
                        />
                      </div>
                    </Col>
                  ) : (
                    ""
                  )}
                  <Col md="6" lg="4">
                    {/* Year of Birth */}
                    {DOB && (
                      <div className="form-group">
                        <Label>Date of Birth</Label>
                        <Input
                          disabled={updatedUserDetails.loginType === "student"}
                          type="date"
                          value={DOB}
                          onChange={(e) => handleChange(e, "dob")}
                        ></Input>
                      </div>
                    )}
                  </Col>
                  <Col md="6" lg="4">
                    {/* Last 4 SSN */}
                    {updatedUserDetails.username && (
                      <div className="form-group">
                        <Label>Username</Label>
                        <InputGroup>
                          <Input
                            disabled
                            placeholder="Enter your Username"
                            type="text"
                            value={updatedUserDetails.username}
                          />
                        </InputGroup>
                      </div>
                    )}
                  </Col>

                  {updatedUserDetails?.guardian?.fathersName ? (
                    <Col md="6" lg="4">
                      {/* Login Type */}
                      <div className="form-group">
                        <Label>Father's Name</Label>
                        <Input
                          disabled
                          value={updatedUserDetails.guardian.fathersName}
                        />
                      </div>
                    </Col>
                  ) : (
                    ""
                  )}

                  {updatedUserDetails?.guardian?.fathersOccupation ? (
                    <Col md="6" lg="4">
                      {/* Login Type */}
                      <div className="form-group">
                        <Label>Father's Occupation</Label>
                        <Input
                          disabled
                          value={updatedUserDetails.guardian.fathersOccupation}
                        />
                      </div>
                    </Col>
                  ) : (
                    ""
                  )}

                  {updatedUserDetails?.guardian?.mothersName ? (
                    <Col md="6" lg="4">
                      {/* Login Type */}
                      <div className="form-group">
                        <Label>Mother's Name</Label>
                        <Input
                          disabled
                          value={updatedUserDetails.guardian.mothersName}
                        />
                      </div>
                    </Col>
                  ) : (
                    ""
                  )}

                  {updatedUserDetails?.guardian?.mothersOccupation ? (
                    <Col md="6" lg="4">
                      {/* Login Type */}
                      <div className="form-group">
                        <Label>Mother's Name</Label>
                        <Input
                          disabled
                          value={updatedUserDetails.guardian.mothersOccupation}
                        />
                      </div>
                    </Col>
                  ) : (
                    ""
                  )}

                  <Col md="6" lg="4">
                    {/* Email */}
                    {updatedUserDetails.email ? (
                      <div className="form-group">
                        <Label>Email</Label>
                        <Input
                          disabled={updatedUserDetails.loginType === "student"}
                          placeholder="Enter your email"
                          value={updatedUserDetails.email}
                          onChange={(e) => handleChange(e, "email")}
                        />
                      </div>
                    ) : (
                      <div className="form-group">
                        <Label>Email</Label>
                        <Input
                          disabled={updatedUserDetails.loginType === "student"}
                          placeholder="No email ID Given"
                          value={""}
                          onChange={(e) => handleChange(e, "email")}
                        />
                      </div>
                    )}
                  </Col>

                  <Col md="6" lg="4">
                    {/* phone number */}
                    {updatedUserDetails.phone && (
                      <div className="form-group">
                        <Label>Phone Number</Label>
                        <Input
                          type="number"
                          disabled={updatedUserDetails.loginType === "student"}
                          placeholder="Enter your Phone Number"
                          value={updatedUserDetails.phone}
                          onChange={(e) => handleChange(e, "phone")}
                        />
                      </div>
                    )}
                  </Col>
                </Row>
                <h6>Address</h6>
                {/* Current Address */}
                {updatedUserDetails.address && (
                  <div className="form-group">
                    <Label>Locality</Label>
                    <Input
                      type="text"
                      placeholder="Enter your Address"
                      value={updatedUserDetails.address.locality}
                      onChange={(e) => handleAddress(e, "locality")}
                    />
                  </div>
                )}
                <Row className="gy-3 gy-xl-0">
                  <Col lg="6" xl="4">
                    {/* City */}
                    {updatedUserDetails.address && (
                      <div className="form-group mb-0">
                        <Label>City</Label>
                        <Input
                          placeholder="Enter your City"
                          type="text"
                          value={updatedUserDetails.address.city}
                          onChange={(e) => handleAddress(e, "city")}
                        ></Input>
                      </div>
                    )}
                  </Col>

                  <Col lg="6" xl="4">
                    {/* State */}
                    {updatedUserDetails.address && (
                      <div className="form-group mb-0">
                        <Label>State</Label>
                        <Input
                          type="text"
                          value={updatedUserDetails.address.state}
                          onChange={(e) => handleAddress(e, "state")}
                        ></Input>
                      </div>
                    )}
                  </Col>

                  <Col lg="6" xl="4">
                    {/* Zip */}
                    {updatedUserDetails.address && (
                      <div className="form-group mb-0">
                        <Label>Pin</Label>
                        <Input
                          type="number"
                          placeholder="Enter your Pin Code"
                          value={updatedUserDetails.address.pin}
                          onChange={(e) => handleAddress(e, "pin")}
                        />
                      </div>
                    )}
                  </Col>

                  <Col lg="6" xl="4">
                    {/* Zip */}
                    {updatedUserDetails.address && (
                      <div className="form-group mb-0">
                        <Label>Country</Label>
                        <Input
                          type="text"
                          value={updatedUserDetails.address.country}
                          onChange={(e) => handleAddress(e, "country")}
                        ></Input>
                      </div>
                    )}
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>

        {/* submit button */}
        <div className="d-flex justify-content-center mt-5">
          <Button hidden={userDetails === updatedUserDetails}  color="primary" className="btn-submit" onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      </section>
    </>
  );
};

export default MyProfile;
