// SalarySettings.js
import React, { useEffect, useState } from "react";
import { Card, Button, Input, NavLink, TabPane } from "reactstrap";
import {
  getAvailableClasses,
  getAvailableSettings,
  setSettings,
} from "../../http/http-calls";
import SpinnerLoading from "../../components/SpinnerLoading";

const SalarySettings = ({ activeTab, tabId, title, settings }) => {
  const [amount, setAmount] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [formFields, setFormFields] = useState(settings);
  const [errors, setErrors] = useState([
    {
      range: "",
      amount: "",
    },
  ]);
  const contentStyles = {
    marginTop: "30px",
    maxWidth: "350px",
    textAlign: "center",
  };

  console.log("formFields>>>", formFields);
  console.log("errors>>>", errors);

  // const fetchSettings = async () => {
  //   setIsLoading(true);

  //   try {
  //     const response = await getAvailableSettings();
  //     console.log("response>>>", response.settings.busamount);
  //     setFormFields(response?.settings?.salary);
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchSettings();
  // }, []);

  const handleChange = (index, event) => {
    const { value, name } = event.target;
    const updatedFormFields = formFields.map((field, i) =>
      i === index
        ? { ...field, [name]: name === "amount" ? parseFloat(value) : value }
        : field
    );
    setFormFields(updatedFormFields);
    validateForm(updatedFormFields);
  };

  const handleAdd = async () => {
    try {
      // Use a temporary email for the new row
      const newRange = formFields[formFields.length - 1]?.range || "";

      // Check for duplicate emails in the formFields excluding the new one
      const isEmailDuplicate = check(
        formFields.slice(0, formFields.length - 1),
        newRange
      );
      if (isEmailDuplicate) {
        return;
      }
      const isValid = await validateForm(formFields);
      if (isValid) {
        setFormFields([...formFields, { range: "", amount: "" }]);
        setErrors([...errors, { range: "", amount: "" }]);
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

  const check = (formFields, newRange) => {
    return formFields.some((field) => field.range === newRange);
  };

  const validateForm = (updatedFormFields) => {
    return new Promise((resolve) => {
      const updatedErrors = updatedFormFields.map((field) => ({
        range: "",
        amount: "",
      }));
      let isFormValid = true;

      updatedFormFields.forEach((field, rowIndex) => {
        // Check for range field errors
        if (!field.range) {
          updatedErrors[rowIndex].range = "*Required";
          isFormValid = false;
        } else if (check(updatedFormFields.slice(0, rowIndex), field.range)) {
          updatedErrors[rowIndex].range = "Range already exists!";
          isFormValid = false;
        } else {
          updatedErrors[rowIndex].range = "";
        }

        // Check for amount field errors
        if (!field.amount) {
          updatedErrors[rowIndex].amount = "*Required";
          isFormValid = false;
        } else {
          updatedErrors[rowIndex].amount = "";
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
          setField: "salary",
          salary: formFields,
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
                    <h6>Experience (months)</h6>
                  </div>
                </div>
                <div>
                  <div>
                    <h6>Salary</h6>
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
                          name="range"
                          style={contentStyles}
                          type="select"
                          value={fields.range}
                          onChange={(e) => handleChange(index, e)}
                        >
                          <option>Experience(months)</option>
                          <option>1-6</option>
                          <option>7-24</option>
                          <option>25-48</option>
                          <option>49-60</option>
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
                          {errors[index]?.range}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div>
                        <Input
                          name="amount"
                          style={contentStyles}
                          type="number"
                          value={fields.amount}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </div>
                      <div>
                        <span style={{ color: "red" }}>
                          {errors[index]?.amount}
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

export default SalarySettings;
