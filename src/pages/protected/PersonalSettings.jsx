// PersonalSettings.js
import React, { useState } from "react";
import { Card, Button, Input, NavLink, TabPane } from "reactstrap";
import { UpdateOwnPassword } from "../../http/http-calls";

const PersonalSettings = ({ activeTab, tabId, title, onAddClick }) => {
  const [formFields, setFormFields] = useState({});
  console.log("formFields>>>", formFields);

  const contentStyles = {
    marginTop: "30px",
    maxWidth: "350px",
    textAlign: "center",
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    const updatedFormFields = { ...formFields };
    updatedFormFields[name] = value;
    setFormFields(updatedFormFields);
    // validateForm(updatedFormFields);
  };

  const handleSave = async () => {
    try {
     
      const response = await UpdateOwnPassword(formFields);
      console.log("response>>>", response);
    } catch (e) {
      console.log("Error saving settings:", e);
    }
  }

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
                name="oldPassword"
                type="password"
                placeholder="Old Password"
                onChange={handleChange}
              ></Input>
              <Input
                style={{ marginTop: "10px", textAlign: "center" }}
                name="newPassword"
                type="password"
                placeholder="New Password"
                onChange={handleChange}
              ></Input>
              <Input
                style={{ marginTop: "10px", textAlign: "center" }}
                name="reEnterPassword"
                type="password"
                placeholder="Confirm New Password"
                onChange={handleChange}
              ></Input>
            </div>
            <Button style={{ marginTop: "30px" }} color="primary" onClick={handleSave}>
              Change
            </Button>
          </NavLink>
        </Card>
      </section>
    </TabPane>
  );
};

export default PersonalSettings;
