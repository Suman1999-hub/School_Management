// PersonalSettings.js
import React from 'react';
import { Card, Button, Input, NavLink, TabPane } from 'reactstrap';

const PersonalSettings = ({ activeTab, tabId, title, onAddClick }) => {
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
                  className={activeTab === "7" ? "active" : ""}
                >
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      // flexWrap: "wrap",
                      maxWidth: "90%",
                      margin: "auto",
                      marginTop: "5px",
                    }}
                  >
                    Theme
                    <Input
                      style={{ marginTop: "10px", textAlign: "center" }}
                      type="select"
                    >
                      <option>Light Mode</option>
                      <option>Dark Mode</option>
                    </Input>
                  </div>
                </NavLink>
              </Card>
            </section>

            <section>
              <Card body>
                <NavLink
                  style={{ textAlign: "center" }}
                  className={activeTab === "7" ? "active" : ""}
                >
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      // flexWrap: "wrap",
                      maxWidth: "90%",
                      margin: "auto",
                      marginTop: "5px",
                    }}
                  >
                    Change your Password
                    <Input
                      style={{ marginTop: "10px", textAlign: "center" }}
                      type="password"
                      placeholder="Old Password"
                    ></Input>
                    <Input
                      style={{ marginTop: "10px", textAlign: "center" }}
                      type="password"
                      placeholder="New Password"
                    ></Input>
                    <Input
                      style={{ marginTop: "10px", textAlign: "center" }}
                      type="password"
                      placeholder="Confirm New Password"
                    ></Input>
                  </div>
                  <Button style={{ marginTop: "30px" }} color="primary">
                    Change
                  </Button>
                </NavLink>
              </Card>
            </section>
    </TabPane>
  );
};

export default PersonalSettings;
