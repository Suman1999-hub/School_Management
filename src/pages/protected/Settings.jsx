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
                className={activeTab === "3" ? "active" : ""}
                onClick={() => _toggleTab("3")}
              >
                Fee
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
          style={{ maxWidth: "800px", margin: "auto" }}
          activeTab={activeTab}
        >
          <TabPane tabId="5">
            <section>
              <Card body>
                <NavLink
                  style={{ textAlign: "center" }}
                  className={activeTab === "5" ? "active" : ""}
                >
                  Create Class
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
                      <option hidden>Acedemic Year</option>
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
                        maxWidth: "720px",
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
          style={{ maxWidth: "800px", margin: "auto" }}
          activeTab={activeTab}
        >
          {/* <h6 style={{ textAlign: "center" }}>Settings</h6> */}
          <TabPane tabId="8">
            {/* Personal Information */}

            <section>
              <Card body>
                <NavLink
                  style={{ textAlign: "center" }}
                  className={activeTab === "7" ? "active" : ""}
                >
                  <div style={{ textAlign: "center" }}>
                    <Label>School Name</Label>
                    <Input
                      style={{ textAlign: "center" }}
                      type="text"
                      value={"DPS school"}
                    ></Input>

                    <Label>Location</Label>
                    <Input
                      style={{ textAlign: "center" }}
                      type="text"
                      value={"Saket, Delhi"}
                    ></Input>

                    <Label>Map URL</Label>
                    <Input
                      style={{ textAlign: "center" }}
                      type="text"
                      value={"SHGHSHHShhahhshhsshshsh"}
                    ></Input>

                    <Label>Website</Label>
                    <Input
                      style={{ textAlign: "center" }}
                      type="text"
                      value={"www.dpsschool.com"}
                    ></Input>

                    <Label>Phone no.</Label>
                    <Input
                      style={{ textAlign: "center" }}
                      type="text"
                      value={"9002306785"}
                    ></Input>

                    <Button style={{ marginTop: "30px" }} color="primary">
                      Edit 
                    </Button>
                  </div>
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
