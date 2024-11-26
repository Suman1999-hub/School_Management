// OrganizationSettings.js
import React from 'react';
import { Card, Button, Input, NavLink, TabPane, Label } from 'reactstrap';

const OrganizationSettings = ({ activeTab, tabId, title, onAddClick }) => {

  const [formFields, setFormFields] = useState(settings);
console.log("formFields>>>", formFields);

  const contentStyles = {
    marginTop: "30px",
    maxWidth: "350px",
    textAlign: "center",
  };

  return (
    <TabPane tabId={tabId}>
       <section>
              <Card body>
                <NavLink
                  style={{ textAlign: "center" }}
                  className={activeTab === "8" ? "active" : ""}
                >
                  <Card body className="profileCard">
                    <div className="cardImg">
                      {/* {userDetails?.profileImage ? (
                  <img src={userDetails.profileImage} alt="" />
                ) : ( */}
                      <img
                        src={require("../../assets/img/school management logo.jpg")}
                        alt="defult profile image"
                      />
                      {/* )} */}
                    </div>
                    {/* <CardTitle>{userDetails.fullname}</CardTitle> */}
                    {/* <span>{userDetails.email}</span> */}
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
                              <h6>Change Logo</h6>
                              <span>File size must be less than 1mb</span>
                            </div>
                          </Label>
                        ) : (
                          <Label
                            for="customFileUpload"
                            className="uploaded p-3"
                          >
                            <img
                              src={
                                require("../../assets/img/sign-up-doc.svg")
                                  .default
                              }
                              alt=""
                            />
                            <div className="customUploadText">
                              <span>File size must be less than 5mb</span>
                            </div>
                          </Label>
                        )}
                      </div>
                    </div>
                  </Card>
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      // flexWrap: "wrap",
                      alignItems: "baseline",
                      maxWidth: "80%",
                      margin: "auto",
                      marginTop: "5px",
                    }}
                  >
                    <Label>School Name :</Label>
                    <Input type="text"></Input>

                    <Label>Map URL :</Label>
                    <Input type="text"></Input>

                    <Label>Website :</Label>
                    <Input type="text"></Input>

                    <Label>Email :</Label>
                    <Input type="text"></Input>

                    <Label>Phone no. :</Label>
                    <Input type="number"></Input>

                    <h6 style={{ marginTop: "2%" }}>Address</h6>

                    <Label>Locality</Label>
                    <Input type="text" name="Locality" />

                    <Label>City</Label>
                    <Input
                      style={{
                        maxWidth: "100%",
                        padding: "0",
                        margin: "0",
                      }}
                      type="text"
                      name="city"
                    />

                    <Label>State</Label>
                    <Input type="text" name="state"></Input>

                    <Label>Country</Label>
                    <Input type="text" name="country"></Input>

                    <Label>PinCode</Label>
                    <Input type="text" name="pinCode" />
                  </div>

                  <Button style={{ marginTop: "30px" }} color="primary">
                    Update
                  </Button>
                </NavLink>
              </Card>
            </section>
    </TabPane>
  );
};

export default OrganizationSettings;
