// BusServiceSettings.js
import React, { useEffect, useState } from "react";
import { Card, Button, Input, NavLink, TabPane, Label } from "reactstrap";
import {
  getAvailableClasses,
  getAvailableSettings,
  setSettings,
} from "../../http/http-calls";
import SpinnerLoading from "../../components/SpinnerLoading";

const BusServiceSettings = ({ activeTab, tabId, title, settings }) => {
  const [fee, setFee] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [formFields, setFormFields] = useState(settings);
  const [errors, setErrors] = useState([
    {
      range: "",
      fee: "",
    },
  ]);
  const contentStyles = {
    marginTop: "30px",
    maxWidth: "350px",
    textAlign: "center",
  };

  // console.log("formFields>>>", formFields);
  // console.log("errors>>>", errors);

  // const fetchSettings = async () => {
  //   setIsLoading(true);

  //   try {
  //     const response = await getAvailableSettings();
  //     console.log("response>>>", response.settings.busFee);
  //     setFormFields(response.settings.busFee);
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
        ? { ...field, [name]: name === "fee" ? parseFloat(value) : value }
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
        setFormFields([...formFields, { range: "", fee: "" }]);
        setErrors([...errors, { range: "", fee: "" }]);
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
        fee: "",
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
        if (!field.fee) {
          updatedErrors[rowIndex].fee = "*Required";
          isFormValid = false;
        } else {
          updatedErrors[rowIndex].fee = "";
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
          setField: "busFee",
          busFee: formFields,
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
                    <h6>Ranges (in kms)</h6>
                  </div>
                </div>
                <div>
                  <div>
                    <h6>Fees</h6>
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
                    {/* {index === 1 &&  <div>Range</div>} */}
                    
                      <div>
                        <Input
                          name="range"
                          style={contentStyles}
                          type="select"
                          value={fields.range}
                          onChange={(e) => handleChange(index, e)}
                        >
                          <option>Range(kms)</option>
                          <option>1-5</option>
                          <option>6-10</option>
                          <option>11-20</option>
                          <option>21-25</option>
                          <option>26-30</option>
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
                    {/* {index === 1 &&  <div>Amount</div>} */}

                      <div>
                      <Input
                          name="fee"
                          style={contentStyles}
                          type="number"
                          value={fields.fee}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </div>
                      <div>
                        <span style={{ color: "red" }}>
                          {errors[index]?.fee}
                        </span>
                      </div>
                    </div>

                    {formFields.length > 1 && (
                      <Button
                        color="danger" outline
                        style={{
                          marginTop: "30px",  
                          maxWidth: "350px",
                          textAlign: "center",
                        }}
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

export default BusServiceSettings;
