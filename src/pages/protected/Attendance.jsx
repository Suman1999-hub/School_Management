import React, { useState } from "react";
import {
  Button,
  Card,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Table,
  TabPane,
} from "reactstrap";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useSelector } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
const localizer = momentLocalizer(moment);

function Attendance() {
  const [filters, setFilters] = useState({
    dateRange: {
      startDate: null,
      endDate: null,
    },
  });
  const [state, setState] = useState("Absent");
  const _onDatesChange = (startDate = null, endDate = null) => {
    const newFilters = { ...filters };

    newFilters["dateRange"] = {
      startDate,
      endDate,
    };
    setFilters(newFilters);
  };
  const [value, onChange] = useState(new Date());

  const userLoginType = useSelector(
    (state) => state.userCredential.user.loginType
  );
  return (
    <>
      {userLoginType === "student" && (
        <Card style={{ maxWidth: "70%", margin: "auto" }}>
          <Calendar
            localizer={localizer}
            // events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </Card>
      )}
      {userLoginType === "teacher" && (
        <>
          <TabPane tabId="1">
            {/* filter */}
            <div
              className="filterWrapper"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <div className="formGroup" style={{ marginRight: "20px" }}>
                <Label>Class</Label>
                <Input type="select">
                  <option>Select Class</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </Input>
              </div>
              <div className="formGroup" style={{ marginRight: "20px" }}>
                <Label>Sction</Label>
                <Input type="select">
                  <option>Select Section</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </Input>
              </div>
              <div className="formGroup" style={{ marginRight: "20px" }}>
                <Label>Date</Label>
                <Input type="date" />
              </div>
              <div className="d-flex justify-content-center mt-4">
                <Button color="primary" className="btn-submit">
                  Search
                </Button>
              </div>
            </div>

            {/* Personal Information */}
            <section>
              <div className="innerHeader">
                <h2>Attendance</h2>
              </div>
              <Card body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Roll Number</th>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Phone Number</th>
                      <th>Last Week Attendance</th>
                      <th>Attendance</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Jon roy</td>
                      <td>Male</td>
                      <td>8777667698</td>
                      <td>
                        <div
                          style={{
                            display: "flex", // Arrange radios horizontally
                            gap: "10px", // Spacing between radios
                          }}
                        >
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio-absent.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                        </div>
                      </td>
                      <td>
                        <FormGroup switch>
                          <Input
                            type="switch"
                            checked={state}
                            onClick={() => setState(!state)}
                            style={{
                              width: "50px",
                              height: "28px",
                              position: "relative",
                              accentColor: state ? "#0d6efd" : "#dd9aed",
                              borderRadius: "50px",
                              boxShadow:
                                "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                              transition: "all 0.3s ease",
                              backgroundColor: state ? "#0d6efd" : "#dd9aed",
                            }}
                          />
                          {/* <Label
                        check
                        style={{
                          paddingLeft: "15px",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          color: state ? "#0d6efd" : "#797b85",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {state ? "Present" : " Absent"}
                      </Label> */}
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Jon roy</td>
                      <td>Male</td>
                      <td>8777667698</td>
                      <td>
                        <div
                          style={{
                            display: "flex", // Arrange radios horizontally
                            gap: "10px", // Spacing between radios
                          }}
                        >
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio-absent.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                        </div>
                      </td>
                      <td>
                        <FormGroup switch>
                          <Input
                            type="switch"
                            checked={state}
                            onClick={() => setState(!state)}
                            style={{
                              width: "50px",
                              height: "28px",
                              position: "relative",
                              accentColor: state ? "#0d6efd" : "#dd9aed",
                              borderRadius: "50px",
                              boxShadow:
                                "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                              transition: "all 0.3s ease",
                              backgroundColor: state ? "#0d6efd" : "#dd9aed",
                            }}
                          />
                          {/* <Label
                        check
                        style={{
                          paddingLeft: "15px",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          color: state ? "#0d6efd" : "#797b85",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {state ? "Present" : " Absent"}
                      </Label> */}
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Jon roy</td>
                      <td>Male</td>
                      <td>8777667698</td>
                      <td>
                        <div
                          style={{
                            display: "flex", // Arrange radios horizontally
                            gap: "10px", // Spacing between radios
                          }}
                        >
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio-absent.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                        </div>
                      </td>
                      <td>
                        <FormGroup switch>
                          <Input
                            type="switch"
                            checked={state}
                            onClick={() => setState(!state)}
                            style={{
                              width: "50px",
                              height: "28px",
                              position: "relative",
                              accentColor: state ? "#0d6efd" : "#dd9aed",
                              borderRadius: "50px",
                              boxShadow:
                                "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                              transition: "all 0.3s ease",
                              backgroundColor: state ? "#0d6efd" : "#dd9aed",
                            }}
                          />
                          {/* <Label
                        check
                        style={{
                          paddingLeft: "15px",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          color: state ? "#0d6efd" : "#797b85",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {state ? "Present" : " Absent"}
                      </Label> */}
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Jon roy</td>
                      <td>Male</td>
                      <td>8777667698</td>
                      <td>
                        <div
                          style={{
                            display: "flex", // Arrange radios horizontally
                            gap: "10px", // Spacing between radios
                          }}
                        >
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio-absent.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                        </div>
                      </td>
                      <td>
                        <FormGroup switch>
                          <Input
                            type="switch"
                            checked={state}
                            onClick={() => setState(!state)}
                            style={{
                              width: "50px",
                              height: "28px",
                              position: "relative",
                              accentColor: state ? "#0d6efd" : "#dd9aed",
                              borderRadius: "50px",
                              boxShadow:
                                "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                              transition: "all 0.3s ease",
                              backgroundColor: state ? "#0d6efd" : "#dd9aed",
                            }}
                          />
                          {/* <Label
                        check
                        style={{
                          paddingLeft: "15px",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          color: state ? "#0d6efd" : "#797b85",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {state ? "Present" : " Absent"}
                      </Label> */}
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Jon roy</td>
                      <td>Male</td>
                      <td>8777667698</td>
                      <td>
                        <div
                          style={{
                            display: "flex", // Arrange radios horizontally
                            gap: "10px", // Spacing between radios
                          }}
                        >
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio-absent.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                        </div>
                      </td>
                      <td>
                        <FormGroup switch>
                          <Input
                            type="switch"
                            checked={state}
                            onClick={() => setState(!state)}
                            style={{
                              width: "50px",
                              height: "28px",
                              position: "relative",
                              accentColor: state ? "#0d6efd" : "#dd9aed",
                              borderRadius: "50px",
                              boxShadow:
                                "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                              transition: "all 0.3s ease",
                              backgroundColor: state ? "#0d6efd" : "#dd9aed",
                            }}
                          />
                          {/* <Label
                        check
                        style={{
                          paddingLeft: "15px",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          color: state ? "#0d6efd" : "#797b85",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {state ? "Present" : " Absent"}
                      </Label> */}
                        </FormGroup>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Jon roy</td>
                      <td>Male</td>
                      <td>8777667698</td>
                      <td>
                        <div
                          style={{
                            display: "flex", // Arrange radios horizontally
                            gap: "10px", // Spacing between radios
                          }}
                        >
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio-absent.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                          <img
                            src={require(`../../assets/img/radio.png`)}
                            alt=""
                            style={{ maxWidth: "30px", maxHeight: "30px" }}
                          />
                        </div>
                      </td>
                      <td>
                        <FormGroup switch>
                          <Input
                            type="switch"
                            checked={state}
                            onClick={() => setState(!state)}
                            style={{
                              width: "50px",
                              height: "28px",
                              position: "relative",
                              accentColor: state ? "#0d6efd" : "#dd9aed",
                              borderRadius: "50px",
                              boxShadow:
                                "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                              transition: "all 0.3s ease",
                              backgroundColor: state ? "#0d6efd" : "#dd9aed",
                            }}
                          />
                          {/* <Label
                        check
                        style={{
                          paddingLeft: "15px",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          color: state ? "#0d6efd" : "#797b85",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {state ? "Present" : " Absent"}
                      </Label> */}
                        </FormGroup>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </section>
          </TabPane>

          <div style={{ textAlign: "center" }}>
            <Button color="primary">Submit</Button>
          </div>
        </>
      )}
    </>
  );
}

export default Attendance;
