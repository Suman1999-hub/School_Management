// LeaveSettings.js
import React, { useEffect, useState } from "react";
import { Card, Button, Input, NavLink, TabPane } from "reactstrap";
import {
  getAvailableClasses,
  getAvailableSettings,
  setSettings,
} from "../../http/http-calls";

const LeaveSettings = ({ activeTab, tabId, title, settings }) => {
  const [days, setDays] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [formFields, setFormFields] = useState(settings);
  const [errors, setErrors] = useState([
    {
      type: "",
      days: "",
    },
  ]);
  const contentStyles = {
    marginTop: "30px",
    maxWidth: "350px",
    textAlign: "center",
  };

  // console.log("formFields>>>", formFields);
  // console.log("errors>>>", errors);

  const handleChange = (index, event) => {
    const { value, name } = event.target;
    const updatedFormFields = formFields.map((field, i) =>
      i === index
        ? { ...field, [name]: name === "days" ? parseFloat(value) : value }
        : field
    );
    setFormFields(updatedFormFields);
    validateForm(updatedFormFields);
  };

  const handleAdd = async () => {
    try {
      // Use a temporary email for the new row
      const newtype = formFields[formFields.length - 1]?.type || "";

      // Check for duplicate emails in the formFields excluding the new one
      const isEmailDuplicate = check(
        formFields.slice(0, formFields.length - 1),
        newtype
      );
      if (isEmailDuplicate) {
        return;
      }
      const isValid = await validateForm(formFields);
      if (isValid) {
        setFormFields([...formFields, { type: "", days: "" }]);
        setErrors([...errors, { type: "", days: "" }]);
      }
    } catch (error) {}
  };

  const handleDelete = (indexToDelete) => {
    const updatedFormFields = formFields.filter(
      (_, index) => index !== indexToDelete
    );
    const updatedErrors = errors.filter((_, index) => index !== indexToDelete);
    setFormFields(updatedFormFields);
    setErrors(updatedErrors);
  };

  const check = (formFields, newtype) => {
    return formFields.some((field) => field.type === newtype);
  };

  const validateForm = (updatedFormFields) => {
    return new Promise((resolve) => {
      const updatedErrors = updatedFormFields.map((field) => ({
        type: "",
        days: "",
      }));
      let isFormValid = true;

      updatedFormFields.forEach((field, rowIndex) => {
        // Check for type field errors
        if (!field.type) {
          updatedErrors[rowIndex].type = "*Required";
          isFormValid = false;
        } else if (check(updatedFormFields.slice(0, rowIndex), field.type)) {
          updatedErrors[rowIndex].type = "type already exists!";
          isFormValid = false;
        } else {
          updatedErrors[rowIndex].type = "";
        }

        // Check for days field errors
        if (!field.days) {
          updatedErrors[rowIndex].days = "*Required";
          isFormValid = false;
        } else {
          updatedErrors[rowIndex].days = "";
        }
      });

      setErrors(updatedErrors);
      resolve(isFormValid);
    });
  };

  const handleSave = async () => {
    const isValid = await validateForm(formFields);
    if (isValid) {
      try {
        const payload = {
          setField: "leave",
          leave: formFields,
        };

        const response = await setSettings(payload);
        console.log("response>>>", response);
      } catch (e) {
        console.log(e);
      }
    } else {
    }
  };

  return (
    <>
     
        <TabPane tabId={tabId}>
          <section>
            <Card body>
              <NavLink
                style={{ textAlign: "center" }}
                className={activeTab === tabId ? "active" : ""}
              >
                <div className="innerHeader">
                  <h2>{title}</h2>
                  <div>
                    <Button color="dark" outline onClick={handleAdd}>
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
                <div>
                  <div>
                    <h6>Leave Type</h6>
                  </div>
                </div>
                <div>
                  <div>
                    <h6>Days</h6>
                  </div>
                </div>
                <div>
                  <div>
                    <h6>Action</h6>
                  </div>
                </div>
              </div>
                {formFields.map((fields, index) => (
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-evenly",
                    }}
                    key={index}
                  >
                    <div>
                      <div>
                        <Input
                          name="type"
                          style={contentStyles}
                          type="select"
                          value={fields.type}
                          onChange={(e) => handleChange(index, e)}
                        >
                          <option>Type of Leave</option>
                          <option>SL</option>
                          <option>CL</option>
                          <option>PL</option>
                        </Input>
                      </div>
                      <div>
                        <span
                          style={{
                            color: "red",
                            display: "block",
                            marginTop: "5px",
                            fontSize: "12px",
                          }}
                        >
                          {errors[index]?.type}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div>
                        <Input
                          name="days"
                          style={contentStyles}
                          type="number"
                          value={fields.days}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </div>
                      <div>
                        <span style={{ color: "red" }}>
                          {errors[index]?.days}
                        </span>
                      </div>
                    </div>

                    {formFields.length > 1 && (
                      <Button
                        color="danger" outline
                        style={contentStyles}
                        onClick={() => handleDelete(index)}
                      >
                        <i className="fa fa-trash"></i>
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  // hidden={!validateForm(formFields)}
                  style={{ marginTop: "30px" }}
                  color="primary" 
                  onClick={handleSave}
                >
                  Save
                </Button>
              </NavLink>
            </Card>
          </section>
        </TabPane>
    </>
  );
};

export default LeaveSettings;
