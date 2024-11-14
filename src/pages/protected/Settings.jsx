import React, { useEffect, useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button,
  Card,
  Table,
  Label,
  Input,
  InputGroup,
  InputGroupText,
  List,
} from "reactstrap";

import CustomDateRangePicker from "../../components/CustomDateRangePicker";
import { useNavigate } from "react-router-dom";
import AddNewCardModal from "../../components/modals/AddNewCardModal";
import { useSelector } from "react-redux";

const Settings = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");
  const loginType = useSelector((state) => state.userCredential.user.loginType);
  console.log("userType>>", userType);
  console.log("loginType>>", loginType);

  useEffect(() => {
    if (loginType === "admin") {
      setUserType(loginType);
    }
  }, []);

  const [activeTab, setActiveTab] = useState("1");
  const _toggleTab = (newTab = "1") => {
    if (activeTab !== newTab) setActiveTab(newTab);
  };

  const handleClick = () => {};

  return (
    <>
      <div className="disputes_tab">
        <Nav pills>
          <NavItem>
            {userType === "admin" && (
              <NavLink
                className={activeTab === "1" ? "active" : ""}
                onClick={() => _toggleTab("1")}
              >
                Bus Service
              </NavLink>
            )}
          </NavItem>

          <NavItem>
            {userType === "admin" && (
              <NavLink
                className={activeTab === "2" ? "active" : ""}
                onClick={() => _toggleTab("2")}
              >
                Salary
              </NavLink>
            )}
          </NavItem>

          <NavItem>
            {userType === "admin" && (
              <NavLink
                className={activeTab === "4" ? "active" : ""}
                onClick={() => _toggleTab("4")}
              >
                Schedule
              </NavLink>
            )}
          </NavItem>

          <NavItem>
            {userType === "admin" && (
              <NavLink
                className={activeTab === "5" ? "active" : ""}
                onClick={() => _toggleTab("5")}
              >
                Class
              </NavLink>
            )}
          </NavItem>

          <NavItem>
            {userType === "admin" && (
              <NavLink
                className={activeTab === "6" ? "active" : ""}
                onClick={() => _toggleTab("6")}
              >
                Holidays
              </NavLink>
            )}
          </NavItem>

          <NavItem>
            <NavLink
              className={activeTab === "7" ? "active" : ""}
              onClick={() => _toggleTab("7")}
            >
              Personal
            </NavLink>
          </NavItem>

          <NavItem>
            {userType === "admin" && (
              <NavLink
                className={activeTab === "8" ? "active" : ""}
                onClick={() => _toggleTab("8")}
              >
                Organization
              </NavLink>
            )}
          </NavItem>
        </Nav>

        <TabContent
          style={{ maxWidth: "800px", margin: "auto" }}
          activeTab={activeTab}
        >
          <h6 style={{ textAlign: "center" }}>Settings</h6>
          <TabPane tabId="7">
            {/* Personal Information */}
            <section>
              <Card body>
                <NavLink
                  style={{ textAlign: "center" }}
                  className={activeTab === "7" ? "active" : ""}
                >
                  Theme
                  <Input
                    style={{ marginTop: "30px", textAlign: "center" }}
                    type="select"
                  >
                    <option>Light Mode</option>
                    <option>Dark Mode</option>
                  </Input>
                </NavLink>
              </Card>
            </section>

            <section>
              <Card body>
                <NavLink
                  style={{ textAlign: "center" }}
                  className={activeTab === "7" ? "active" : ""}
                >
                  Change your Password
                  <div style={{ textAlign: "center" }}>
                    <Input
                      style={{ marginTop: "30px", textAlign: "center" }}
                      type="password"
                      placeholder="Old Password"
                    ></Input>
                    <Input
                      style={{ marginTop: "30px", textAlign: "center" }}
                      type="password"
                      placeholder="New Password"
                    ></Input>
                    <Input
                      style={{ marginTop: "30px", textAlign: "center" }}
                      type="password"
                      placeholder="Confirm New Password"
                    ></Input>
                    <Button style={{ marginTop: "30px" }} color="primary">
                      Change
                    </Button>
                  </div>
                </NavLink>
              </Card>
            </section>
          </TabPane>
        </TabContent>

        <TabContent
          style={{ maxWidth: "800px", margin: "auto", padding: "0" }}
          activeTab={activeTab}
        >
          <TabPane tabId="5">
            <section>
              <Card body>
                <NavLink
                  style={{ textAlign: "center" }}
                  className={activeTab === "5" ? "active" : ""}
                >
                  <div className="innerHeader">
                    <h2> Create Class</h2>

                    <div>
                      <Button color="dark" outline>
                        <i className="fa fa-plus"></i>
                      </Button>
                    </div>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="select"
                    >
                      <option hidden>Select Class</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="select"
                    >
                      <option hidden>Fee</option>
                      <option>1000 INR</option>
                      <option>2000 INR</option>
                      <option>3000 INR</option>
                      <option>4000 INR</option>
                      <option>5000 INR</option>
                      <option>6000 INR</option>
                      <option>7000 INR</option>
                    </Input>

                    <Button style={{ marginTop: "30px" }} color="primary">
                      Create
                    </Button>
                  </div>
                </NavLink>
              </Card>
            </section>
            <section>
              <Card body>
                <NavLink
                  style={{ textAlign: "center" }}
                  className={activeTab === "5" ? "active" : ""}
                >
                  Promote
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="select"
                    >
                      <option hidden>Select Class</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="select"
                    >
                      <option hidden>Select Section</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                      <option>D</option>
                    </Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="select"
                    >
                      <option hidden>From Acedemic Year</option>
                      <option>2024-2025</option>
                      <option>2025-2026</option>
                      <option>2026-2027</option>
                      <option>2027-2028</option>
                      <option>2028-2029</option>
                      <option>2029-2030</option>
                    </Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="select"
                    >
                      <option hidden>To Acedemic Year</option>
                      <option>2024-2025</option>
                      <option>2025-2026</option>
                      <option>2026-2027</option>
                      <option>2027-2028</option>
                      <option>2028-2029</option>
                      <option>2029-2030</option>
                    </Input>

                    <Button
                      style={{ marginTop: "30px", textAlign: "center" }}
                      color="primary"
                    >
                      Promote Class
                    </Button>
                  </div>
                </NavLink>
              </Card>
            </section>
          </TabPane>
        </TabContent>

        <TabContent
          style={{ maxWidth: "900px", margin: "auto", padding: "0" }}
          activeTab={activeTab}
        >
          {/* <h6 style={{ textAlign: "center" }}>Settings</h6> */}
          <TabPane tabId="8">
            {/* Personal Information */}

            <section>
              <Card body>
                <NavLink
                  style={{ textAlign: "center" }}
                  className={activeTab === "8" ? "active" : ""}
                >
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      // flexWrap: "wrap",
                      alignItems: "baseline",
                      maxWidth:"90%",
                      margin:"auto",
                      marginTop:"5px"
                    }}
                  >
                    <Label>School Name :</Label>
                    <Input
                      type="text"
                    ></Input>

                    <Label>Location :</Label>
                    <Input
                      type="text"
                    ></Input>

                    <Label>Map URL :</Label>
                    <Input
                      type="text"
                    ></Input>

                    <Label>Website :</Label>
                    <Input
                      type="text"
                    ></Input>

                    <Label>Email :</Label>
                    <Input
                      type="text"
                    ></Input>

                    <Label>Phone no. :</Label>
                    <Input
                      type="number"
                    ></Input>
                  </div>
                  <Button style={{ marginTop: "30px" }} color="primary">
                    Update
                  </Button>
                </NavLink>
              </Card>
            </section>
          </TabPane>
        </TabContent>

        <TabContent
          style={{ maxWidth: "900px", margin: "auto", padding: "0" }}
          activeTab={activeTab}
        >
          <TabPane tabId="6">
            {/* Personal Information */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              
            </div>
            <section>
              <Card body>
              <div className="innerHeader">
                    <h2> List of Holidays</h2>

                    <div>
                      <Button color="dark" outline>
                        <i className="fa fa-plus"></i>
                      </Button>
                    </div>
                  </div>
              </Card>
            </section>
            <section>
              <Card body>
              
                <Table responsive style={{ textAlign: "center" }}>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Occasion</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10/09/2024</td>
                      <td>Ganesh Chaturthi</td>
                      <td>
                        <Button
                          color="success"
                          style={{ border: "none" }}
                          outline
                        >
                          <i className="fa fa-edit"></i>
                        </Button>
                        <Button
                          color="danger"
                          style={{ border: "none" }}
                          outline
                        >
                          <i className="fa fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>11/10/2024</td>
                      <td>Diwali</td>
                      <td>
                        <Button
                          color="success"
                          style={{ border: "none" }}
                          outline
                        >
                          <i className="fa fa-edit"></i>
                        </Button>
                        <Button
                          color="danger"
                          style={{ border: "none" }}
                          outline
                        >
                          <i className="fa fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>10/09/2024</td>
                      <td>Chhath Puja</td>
                      <td>
                        <Button
                          color="success"
                          style={{ border: "none" }}
                          outline
                        >
                          <i className="fa fa-edit"></i>
                        </Button>
                        <Button
                          color="danger"
                          style={{ border: "none" }}
                          outline
                        >
                          <i className="fa fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>25/12/2024</td>
                      <td>Chritmas</td>
                      <td>
                        <Button
                          color="success"
                          style={{ border: "none" }}
                          outline
                        >
                          <i className="fa fa-edit"></i>
                        </Button>
                        <Button
                          color="danger"
                          style={{ border: "none" }}
                          outline
                        >
                          <i className="fa fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>10/09/2024</td>
                      <td>Ganesh Chaturthi</td>
                      <td>
                        <Button
                          color="success"
                          style={{ border: "none" }}
                          outline
                        >
                          <i className="fa fa-edit"></i>
                        </Button>
                        <Button
                          color="danger"
                          style={{ border: "none" }}
                          outline
                        >
                          <i className="fa fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  </tbody>

                  {/* <tbody>
              {allStudents.map((curr) => {
                console.log(curr);
                return (
                  <>
                    <tr>
                      <td>
                        {curr.firstName || curr.lastName
                          ? curr.firstName + " " + curr.lastName
                          : ""}
                      </td>

                      <td>{curr._class.name ? curr._class.name : ""}</td>
                      <td>{curr._class.section ? curr._class.section : ""}</td>
                      <td>{curr.rollNo ? curr.rollNo : ""}</td>
                      <td>{curr.gender ? curr.gender : ""}</td>
                      <td>
                        {curr.address
                          ? getAddressFormate(
                              curr.address.locality,
                              curr.address.city,
                              curr.address.state,
                              curr.address.country,
                              curr.address.pin
                            )
                          : ""}
                      </td>
                      <td>{curr.phone ? curr.phone : ""}</td>
                      <td>
                        <CircularProgressbar
                          value="97"
                          text="97%"
                          className="success"
                          styles={buildStyles({
                            strokeLinecap: "round",
                          })}
                        />
                      </td>
                      <td>
                        <div className="action">
                        <Link to={`/student/${curr._id}`}>
                          <Button color="link">
                            <i className="fa fa-eye"></i>
                          </Button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody> */}
                </Table>

                {/* <PaginatedItems itemsPerPage={4} /> */}
              </Card>
            </section>
          </TabPane>
        </TabContent>

        <TabContent
          style={{ maxWidth: "800px", margin: "auto", padding: "0" }}
          activeTab={activeTab}
        >
          <TabPane tabId="1">
            <section>
              <Card body>
                <NavLink
                  style={{ textAlign: "center" }}
                  className={activeTab === "1" ? "active" : ""}
                >
                  <div className="innerHeader">
                    <h2>Bus Service</h2>

                    <div>
                      <Button color="dark" outline>
                        <i className="fa fa-plus"></i>
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="select"
                    >
                      <option hidden>Range in kms</option>
                      <option>1-5 (kms)</option>
                      <option>6-10 (kms)</option>
                      <option>11-20 (kms)</option>
                      <option>21-25 (kms)</option>
                      <option>26-30 (kms)</option>
                    </Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="number"
                    ></Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="select"
                    >
                      <option hidden>Range in kms</option>
                      <option>1-5 (kms)</option>
                      <option>6-10 (kms)</option>
                      <option>11-20 (kms)</option>
                      <option>21-25 (kms)</option>
                      <option>26-30 (kms)</option>
                    </Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="number"
                    ></Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="select"
                    >
                      <option hidden>Range in kms</option>
                      <option>1-5 (kms)</option>
                      <option>6-10 (kms)</option>
                      <option>11-20 (kms)</option>
                      <option>21-25 (kms)</option>
                      <option>26-30 (kms)</option>
                    </Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="number"
                    ></Input>

                    <Button style={{ marginTop: "30px" }} color="primary">
                      Save
                    </Button>
                  </div>
                </NavLink>
              </Card>
            </section>
          </TabPane>
        </TabContent>

        <TabContent
          style={{ maxWidth: "800px", margin: "auto", padding: "0" }}
          activeTab={activeTab}
        >
          <TabPane tabId="2">
            <section>
              <Card body>
                <NavLink
                  style={{ textAlign: "center" }}
                  className={activeTab === "2" ? "active" : ""}
                >
                  <div className="innerHeader">
                    <h2>Salary</h2>

                    <div>
                      <Button color="dark" outline>
                        <i className="fa fa-plus"></i>
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="select"
                    >
                      <option hidden>Experience</option>
                      <option>Freshers</option>
                      <option>1- 2 yrs experience</option>
                      <option>2- 4 yrs experience</option>
                      <option>4- 6 yrs experience</option>
                      <option>Above 6 yrs experience</option>
                    </Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="number"
                      value={"10000"}
                    ></Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="select"
                    >
                      <option hidden>Experience</option>
                      <option>Freshers</option>
                      <option>1- 2 yrs experience</option>
                      <option>2- 4 yrs experience</option>
                      <option>4- 6 yrs experience</option>
                      <option>Above 6 yrs experience</option>
                    </Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="number"
                      value={"10000"}
                    ></Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="select"
                    >
                      <option hidden>Experience</option>
                      <option>Freshers</option>
                      <option>1- 2 yrs experience</option>
                      <option>2- 4 yrs experience</option>
                      <option>4- 6 yrs experience</option>
                      <option>Above 6 yrs experience</option>
                    </Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="number"
                      value={"10000"}
                    ></Input>

                    <Button style={{ marginTop: "30px" }} color="primary">
                      Save
                    </Button>
                  </div>
                </NavLink>
              </Card>
            </section>
          </TabPane>
        </TabContent>

        <TabContent
          style={{ maxWidth: "1200px", margin: "auto", padding: "0" }}
          activeTab={activeTab}
        >
          <TabPane tabId="4">
            <section>
              <Card body>
                <NavLink
                  style={{ textAlign: "center" }}
                  className={activeTab === "4" ? "active" : ""}
                >
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Days</th>
                        <th>Start-Time</th>
                        <th>End-Time</th>
                        <th>Class Duration</th>
                        <th>Recess Time</th>
                        <th>Recess Duration</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <Input type="select">
                            <option hidden>Select</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                          </Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Input type="select">
                            <option hidden>Select</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                          </Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Input type="select">
                            <option hidden>Select</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                          </Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Input type="select">
                            <option hidden>Select</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                          </Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Input type="select">
                            <option hidden>Select</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                          </Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Input type="select">
                            <option hidden>Select</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                          </Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <Button color="primary">Save</Button>
                </NavLink>
              </Card>
            </section>
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};

export default Settings;
