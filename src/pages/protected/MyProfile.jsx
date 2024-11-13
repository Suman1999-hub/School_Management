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
import { CheckFormUpdate, errorHandler, formatDate } from "../../helper-methods";
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
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Lakshadweep",
  "Delhi ",
  "Puducherry",
  "Jammu and Kashmir",
  "Ladakh"  
];

const AllGender = ["Male", "Female", "Transgender"];
const Roles = ["admin", "teacher", "student"];

const MyProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [userDetails, setUserDetails] = useState({});
  const [data, setData] = useState({});
  const [address, setAddress] = useState({});
  const [DOB, setDOB] = useState(null);

  const _toggleTab = (newTab = "1") => {
    if (activeTab !== newTab) setActiveTab(newTab);
  };

  console.log("data>>", data);
  console.log("userDetails>>", userDetails);
  // console.log("address>>", address);

  // console.log("address>>", userDetails.address.city);

  // userDetails.address.country
  // const userID = useSelector((state) => {
  //   return state.userCredential.user.id;
  // });
  // // console.log("userID>>>", userID);

  const fetchData = async () => {
    try {
      const response = await getLoggedInUserDetail();
      // console.log("response>>", response.user);
      setUserDetails(response.user);
      setData(response.user)
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
      setAddress(userDetails.address)
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

  const handleAddress = (event, field) => {
    const updatedAddress = { ...address };
    updatedAddress[field] = event.target.value;
    setAddress(updatedAddress);
    setUserDetails(prev => ({
      ...prev,
      address: updatedAddress
    }));
  };

  const handleSave = async () => {
    const payload = CheckFormUpdate(data, userDetails)
    console.log("payload>>>", payload);
    
    try {
      if (payload) {
        const response = await updateProfile(payload);
      // console.log("response>>", response.user);
      setUserDetails(response.user);
      alert("successfully updated");
      } else {
        alert("Changes up-to-date")
      }
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <>
      <section>
        <Row className="gy-3 gy-xl-0">
          <Col xl="4">
            <Card body className="profileCard">
              <div className="cardImg">
                <img
                  src={userDetails.profileImage}
                  alt=""
                />
              </div>
              <CardTitle>{userDetails.fullname}</CardTitle>
              {/* <span>{userDetails.email}</span> */}
              <div className="form-group">
                {/* <Label>Change Profile Photo</Label> */}
                <div className="customFileUpload">
                  <Input type="file" id="customFileUpload" />
                  {true ? (
                    <Label for="customFileUpload" className="p-3">
                      <i className="fa fa-edit" style={{ fontSize: '25px' }}></i> 
                      
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
                    {userDetails.firstName && (
                      <div className="form-group">
                        <Label>First Name</Label>
                        <Input
                          placeholder="Enter your name"
                          value={userDetails.firstName}
                          onChange={(e) => handleChange(e, "firstName")}
                        />
                      </div>
                    )}
                  </Col>
                  <Col md="6" lg="4">
                    {/* name */}
                    {userDetails.lastName && (
                      <div className="form-group">
                        <Label>Last Name</Label>
                        <Input
                          placeholder="Enter your name"
                          value={userDetails.lastName}
                          onChange={(e) => handleChange(e, "lastName")}
                        />
                      </div>
                    )}
                  </Col>
                  <Col md="6" lg="4">
                    {/* Email */}
                    {userDetails.email && (
                      <div className="form-group">
                        <Label>Email</Label>
                        <Input
                          readOnly={userDetails.loginType === "student"}
                          placeholder="Enter your email"
                          value={userDetails.email}
                          onChange={(e) => handleChange(e, "email")}
                        />
                      </div>
                    )}
                  </Col>
                  <Col md="6" lg="4">
                    {/* phone number */}
                    {userDetails.gender && (
                      <div className="form-group">
                        <Label>Gender</Label>
                        {userDetails.loginType === "student" ? (
                          <Input readOnly value={userDetails.gender} />
                        ) : (
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
                    )}
                  </Col>
                  <Col md="6" lg="4">
                    {/* phone number */}
                    {userDetails.phone && (
                      <div className="form-group">
                        <Label>Phone Number</Label>
                        <Input
                          readOnly={userDetails.loginType === "student"}
                          placeholder="Enter your Phone Number"
                          value={userDetails.phone}
                          onChange={(e) => handleChange(e, "phone")}
                        />
                      </div>
                    )}
                  </Col>
                  <Col md="6" lg="4">
                    {/* Year of Birth */}
                    {DOB && (
                      <div className="form-group">
                        <Label>Date of Birth</Label>
                        <Input
                          readOnly={userDetails.loginType === "student"}
                          type="date"
                          value={DOB}
                          onChange={(e) => handleChange(e, "dob")}
                        ></Input>
                      </div>
                    )}
                  </Col>
                  <Col md="6" lg="4">
                    {/* Last 4 SSN */}
                    {userDetails.username && (
                      <div className="form-group">
                        <Label>Username</Label>
                        <InputGroup>
                          <Input
                            readOnly
                            placeholder="Enter your Username"
                            type="text"
                            value={userDetails.username}
                          />
                        </InputGroup>
                      </div>
                    )}
                  </Col>

                  <Col md="6" lg="4">
                    {/* Login Type */}
                    {userDetails.loginType && (
                      <div className="form-group">
                        <Label>Role</Label>
                        <Input readOnly value={userDetails.loginType} />
                      </div>
                    )}
                  </Col>
                </Row>
                <h6>Address</h6>
                {/* Current Address */}
                {userDetails.address && (
                  <div className="form-group">
                    <Label>Locality</Label>
                    <Input
                      type="text"
                      placeholder="Enter your Address"
                      value={userDetails.address.locality}
                      onChange={(e) => handleAddress(e, "locality")}
                    />
                  </div>
                )}
                <Row className="gy-3 gy-xl-0">
                  <Col lg="6" xl="4">
                    {/* City */}
                    {userDetails.address && (
                      <div className="form-group mb-0">
                        <Label>City</Label>
                        <Input
                          placeholder="Enter your City"
                          type="text"
                          value={userDetails.address.city}
                          onChange={(e) => handleAddress(e, "city")}
                        ></Input>
                      </div>
                    )}
                  </Col>

                  <Col lg="6" xl="4">
                    {/* State */}
                    {userDetails.address && (
                      <div className="form-group mb-0">
                        <Label>State</Label>
                        <Input
                          type="select"
                          value={userDetails.address.state}
                          onChange={(e) => handleAddress(e, "state")}
                        >
                          <option hidden>Select State</option>
                          {states.map((state, index) => (
                            <option key={index} value={state}>
                              {state}
                            </option>
                          ))}
                        </Input>
                      </div>
                    )}
                  </Col>

                  <Col lg="6" xl="4">
                    {/* Zip */}
                    {userDetails.address && (
                      <div className="form-group mb-0">
                        <Label>Zip</Label>
                        <Input
                          placeholder="Enter your Zip Code"
                          value={userDetails.address.pin}
                          onChange={(e) => handleAddress(e, "pin")}

                        />
                      </div>
                    )}
                  </Col>

                  <Col lg="6" xl="4">
                    {/* Zip */}
                    {userDetails.address && (
                      <div className="form-group mb-0">
                        <Label>Country</Label>
                        <Input
                          type="select"
                          value={userDetails.address.country}
                          onChange={(e) => handleAddress(e, "country")}

                        >
                          <option hidden>Select Country</option>
                          <option>India</option>
                          <option>USA</option>
                        </Input>
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
          <Button color="primary" className="btn-submit" onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      </section>
    </>
  );
};

export default MyProfile;







