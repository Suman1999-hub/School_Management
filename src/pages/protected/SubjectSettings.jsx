// SubjectSettings.js
import React, { useEffect, useState } from "react";
import { Card, Button, Input, NavLink, TabPane } from "reactstrap";
import {
  getAvailableClasses,
  getAvailableSettings,
  setSettings,
} from "../../http/http-calls";

const SubjectSettings = ({ activeTab, tabId, title, settings }) => {
  const [formFields, setFormFields] = useState(
    settings.map(el => ({ subject: el }))
  );
  
  const [errors, setErrors] = useState([]);  
  const contentStyles = {
    marginTop: "30px",
    maxWidth: "350px",
    textAlign: "center",
  };

  console.log("formFields>>>", formFields);

  const handleChange = (index, event) => {
    const { value, name } = event.target;
    const updatedFormFields = formFields.map((field, i) =>
      i === index
        ? { ...field, [name]: value }
        : field // Keep other fields unchanged
    );
    setFormFields(updatedFormFields);
    validateForm(updatedFormFields);
  };
  
  const handleAdd = async () => {
    try {
      // Check for duplicate subject before adding a new one
      const newSubject = formFields[formFields.length - 1]?.subject || "";  

      const isSubjectDuplicate = check(formFields.slice(0, formFields.length - 1), newSubject);
      if (isSubjectDuplicate) {
        return;
      }

      const isValid = await validateForm(formFields);
      if (isValid) {
        setFormFields([...formFields, { subject: "" }]); 
        setErrors([...errors, { subject: "" }]); 
      }
    } catch (error) {
      console.error("Error adding new subject: ", error);
    }
  };

  const handleDelete = (indexToDelete) => {
    const updatedFormFields = formFields.filter((_, index) => index !== indexToDelete);
    const updatedErrors = errors.filter((_, index) => index !== indexToDelete);
    setFormFields(updatedFormFields);
    setErrors(updatedErrors);
  };

  const check = (formFields, newSubject) => {
    return formFields.some((field) => field.subject === newSubject);
  };

  const validateForm = (updatedFormFields) => {
    return new Promise((resolve) => {
      const updatedErrors = updatedFormFields.map((field) => ({
        subject: "",
      }));
      let isFormValid = true;

      updatedFormFields.forEach((field, rowIndex) => {
        // Check for subject field errors
        if (!field.subject) {
          updatedErrors[rowIndex].subject = "*Required";
          isFormValid = false;
        } else if (check(updatedFormFields.slice(0, rowIndex), field.subject)) {
          updatedErrors[rowIndex].subject = "Subject already exists!";
          isFormValid = false;
        } else {
          updatedErrors[rowIndex].subject = "";
        }
      });

      setErrors(updatedErrors);
      resolve(isFormValid);
    });
  };

  const handleSave = async () => {
    const isValid = await validateForm(formFields);
    if (isValid) {
      const subjectNames = formFields.map(field => field.subject);

      console.log("subjectNames>>>", subjectNames);
      
      try {
        const payload = {
          setField: "subjects",  
          subjects: subjectNames,  
        };

        const response = await setSettings(payload);
        console.log("response>>>", response);
      } catch (e) {
        console.log("Error saving settings:", e);
      }
    } else {
      console.log("Form is invalid. Cannot save.");
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
                  <h6>Subjects</h6>
                </div>
                <div>
                  <h6>Action</h6>
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
                        name="subject"
                        style={contentStyles}
                        type="text"
                        value={fields.subject || ""} 
                        onChange={(e) => handleChange(index, e)}
                      />
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
                        {errors[index]?.subject}
                      </span>
                    </div>
                  </div>

                  {formFields.length > 1 && (
                    <Button
                      color="danger"
                      outline
                      style={contentStyles}
                      onClick={() => handleDelete(index)}
                    >
                      <i className="fa fa-trash"></i>
                    </Button>
                  )}
                </div>
              ))}
              <Button
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

export default SubjectSettings;
