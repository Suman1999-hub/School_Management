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
  showerrorToast,
  successHandler,
} from "../../helper-methods";
import { getLoggedInUserDetail, updateProfile } from "../../http/http-calls";
import { useSelector } from "react-redux";
import SpinnerLoading from "../../components/SpinnerLoading";

const AllGender = ["Male", "Female"];

const MyProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [updatedUserDetails, setUpdatedUserDetails] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [address, setAddress] = useState({});
  const [DOB, setDOB] = useState(null);
  const [isChanged, setIsChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
  const [errors, setErrors] = useState({});
  console.log("updatedUserDetails>>", updatedUserDetails);
  const _toggleTab = (newTab = "1") => {
    if (activeTab !== newTab) setActiveTab(newTab);
  };

  const fetchuserDetails = async () => {
    setIsLoading(true);

    try {
      const response = await getLoggedInUserDetail();
      // console.log("response>>", response.user);
      setUpdatedUserDetails(response.user);
      setUserDetails(response.user);
    } catch (error) {
      errorHandler(error);
    } finally {
      setIsLoading(false);
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
    setIsChanged(true);
    if (field === "dob") {
      setDOB(event.target.value.trim());
    }
    const updatedNewDetails = { ...updatedUserDetails };
    updatedNewDetails[field] = event.target.value.trim();
    setUpdatedUserDetails(updatedNewDetails);
    if (_CheckFormUpdate(userDetails, updatedNewDetails)) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
    validateForm(updatedNewDetails);
  };

  const handleAddress = (event, field) => {
    setIsChanged(true);
    // const changedUserDetails = { ...updatedUserDetails }
    const updatedAddress = { ...address };
    updatedAddress[field] = event.target.value.trim();
    setAddress(updatedAddress);
    setUpdatedUserDetails((prev) => ({
      ...prev,
      address: updatedAddress,
    }));

    if (
      _CheckFormUpdate(userDetails, {
        ...updatedUserDetails,
        address: updatedAddress,
      })
    ) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
    validateForm(updatedAddress);

  };

  const _CheckFormUpdate = (initialState, updatedState) => {
    if (typeof initialState !== "object" || typeof updatedState !== "object") {
      throw new Error("Both initialState and updatedState should be objects.");
    }

    const changes = {}; // Initialize an empty object to store changes

    for (const key in initialState) {
      // If the key is not "address", or any other key you'd like to handle
      if (initialState.hasOwnProperty(key)) {
        // If the key is an object, compare nested fields
        if (
          typeof initialState[key] === "object" &&
          initialState[key] !== null
        ) {
          if (
            JSON.stringify(initialState[key]) !==
            JSON.stringify(updatedState[key])
          ) {
            changes[key] = updatedState[key]; // Push the whole object if it has changed
          }
        } else {
          // Compare simple field values
          if (initialState[key] !== updatedState[key]) {
            changes[key] = updatedState[key]; // Store only the changed field
          }
        }
      }
    }

    // Return the changes object with updated fields, or null if no changes
    return Object.keys(changes).length > 0 ? changes : null;
  };

  const validateForm = (updatedUserDetails) => {
    const updatedErrors = { ...errors };
    let isFormValid = true;
    return new Promise((resolve) => {
      Object.keys(updatedUserDetails).forEach((each) => {
        switch (each) {
          case "firstName":
            if (updatedUserDetails?.firstName) {
              delete updatedErrors?.firstName;
            } else {
              updatedErrors.firstName = "*Required";
              isFormValid = false;
            }
            setErrors(updatedErrors);
            break;
          case "lastName":
            if (updatedUserDetails?.lastName) {
              delete updatedErrors?.lastName;
            } else {
              updatedErrors.lastName = "*Required";
              isFormValid = false;
            }
            setErrors(updatedErrors);
            break;
          case "email":
            if (updatedUserDetails?.email) {
              if (emailRegex.test(updatedUserDetails?.email)) {
                delete updatedErrors?.email;
              } else {
                updatedErrors.email = "Invalid email!";
                isFormValid = false;
              }
            } else {
              updatedErrors.email = "*Required";
              isFormValid = false;
            }
            setErrors(updatedErrors);
            break;
            case "phone":
              if (updatedUserDetails?.phone) {
                if (phoneRegex.test(updatedUserDetails?.phone)) {
                  delete updatedErrors?.phone;
                } else {
                  updatedErrors.phone = "Invalid phone number!";
                  isFormValid = false;
                }
              } else {
                updatedErrors.phone = "*Required";
                isFormValid = false;
              }
              setErrors(updatedErrors);
              break;
             

                case "city":
                if (updatedUserDetails?.city) {
                  delete updatedErrors?.city;
                } else {
                  updatedErrors.city = "*Required";
                  isFormValid = false;
                }
                setErrors(updatedErrors);
                break;

                case "state":
                if (updatedUserDetails?.state) {
                  delete updatedErrors?.state;
                } else {
                  updatedErrors.state = "*Required";
                  isFormValid = false;
                }
                setErrors(updatedErrors);
                break;

                case "pin":
                if (updatedUserDetails?.pin) {
                  delete updatedErrors?.pin;
                } else {
                  updatedErrors.pin = "*Required";
                  isFormValid = false;
                }
                setErrors(updatedErrors);
                break;

                case "country":
                if (updatedUserDetails?.country) {
                  delete updatedErrors?.country;
                } else {
                  updatedErrors.country = "*Required";
                  isFormValid = false;
                }
                setErrors(updatedErrors);
                break;

          default:
            break;
        }
      });
      resolve(isFormValid);
    });
  };

  const handleSave = async () => {
    setIsChanged(false);
    console.log("updatedUserDetails>>", updatedUserDetails);
    console.log("userDetails>>", userDetails);

    const payload = _CheckFormUpdate(userDetails, updatedUserDetails);
    console.log("payload>>>", payload);
    const isvalid = await validateForm(updatedUserDetails)
    if (isvalid) {
      try {
        if (payload) {
          const response = await updateProfile(payload);
          setUpdatedUserDetails(response.user);
        } else {
          showerrorToast("Changes Up-to-date!", "success", 5000);
        }
      } catch (error) {
        successHandler(error);
      }
    } else {
      showerrorToast("please fill all the required field correctly!", "error", 5000);
    }
  };

  return (
    <>
      {isLoading ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "auto",
          }}
        >
          <SpinnerLoading />
        </div>
      ) : (
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
                      <div className="form-group">
                        <Label>First Name</Label>
                        <Input
                          placeholder="Enter your name"
                          value={updatedUserDetails?.firstName || ""}
                          onChange={(e) => handleChange(e, "firstName")}
                        />
                        {/* Display error message below the input */}
                        {errors?.firstName && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "12px",
                              marginTop: "5px",
                            }}
                          >
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                    </Col>

                    <Col md="6" lg="4">
                      {/* name */}
                      {/* {updatedUserDetails.lastName && ( */}
                      <div className="form-group">
                        <Label>Last Name</Label>
                        <Input
                          placeholder="Enter your name"
                          value={updatedUserDetails?.lastName || ""}
                          onChange={(e) => handleChange(e, "lastName")}
                        />
                        {errors?.lastName && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "12px",
                              marginTop: "5px",
                            }}
                          >
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                      {/* )} */}
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
                          <Input
                            disabled
                            value={updatedUserDetails.class.name}
                          />
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
                            disabled={
                              updatedUserDetails.loginType === "student"
                            }
                            type="date"
                            value={DOB || ""}
                            onChange={(e) => handleChange(e, "dob")}
                          ></Input>
                        </div>
                      )}
                    </Col>
                    {updatedUserDetails.isSuperAdmin !== true && (
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
                                value={updatedUserDetails?.username || ""}
                              />
                            </InputGroup>
                          </div>
                        )}
                      </Col>
                    )}

                    {updatedUserDetails?.guardian?.fathersName ? (
                      <Col md="6" lg="4">
                        {/* Login Type */}
                        <div className="form-group">
                          <Label>Father's Name</Label>
                          <Input
                            disabled
                            value={
                              updatedUserDetails?.guardian?.fathersName || ""
                            }
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
                            value={
                              updatedUserDetails?.guardian?.fathersOccupation ||
                              ""
                            }
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
                            value={
                              updatedUserDetails?.guardian?.mothersName || ""
                            }
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
                            value={
                              updatedUserDetails?.guardian?.mothersOccupation ||
                              ""
                            }
                          />
                        </div>
                      </Col>
                    ) : (
                      ""
                    )}

                    <Col md="6" lg="4">
                      {/* Email */}
                        <div className="form-group">
                          <Label>Email</Label>
                          <Input
                            disabled={
                              updatedUserDetails.loginType === "student"
                            }
                            placeholder="Enter your email ID"
                            value={updatedUserDetails?.email || ""}
                            onChange={(e) => handleChange(e, "email")}
                          />
                           {errors?.email && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "12px",
                              marginTop: "5px",
                            }}
                          >
                            {errors.email}
                          </p>
                        )}
                        </div>
                    </Col>

                    <Col md="6" lg="4">
                      {/* phone number */}
                        <div className="form-group">
                          <Label>Phone Number</Label>
                          <Input
                            type="number"
                            disabled={
                              updatedUserDetails.loginType === "student"
                            }
                            placeholder="Enter your Phone Number"
                            value={updatedUserDetails.phone || ""}
                            onChange={(e) => handleChange(e, "phone")}
                          />
                          {errors?.phone && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "12px",
                              marginTop: "5px",
                            }}
                          >
                            {errors.phone}
                          </p>
                        )}
                        </div>
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
                      {errors?.locality && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "12px",
                              marginTop: "5px",
                            }}
                          >
                            {errors.locality}
                          </p>
                        )}
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
                          />
                          {errors?.city && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "12px",
                              marginTop: "5px",
                            }}
                          >
                            {errors.city}
                          </p>
                        )}
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
                          />
                          {errors?.state && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "12px",
                              marginTop: "5px",
                            }}
                          >
                            {errors.state}
                          </p>
                        )}
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
                          {errors?.pin && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "12px",
                              marginTop: "5px",
                            }}
                          >
                            {errors.pin}
                          </p>
                        )}
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
                          />
                          {errors?.country && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "12px",
                              marginTop: "5px",
                            }}
                          >
                            {errors.country}
                          </p>
                        )}
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
            <Button
              hidden={!isChanged}
              color="primary"
              className="btn-submit"
              onClick={handleSave}
            >
              Save Changes
            </Button>
          </div>
        </section>
      )}
    </>
  );
};

export default MyProfile;
