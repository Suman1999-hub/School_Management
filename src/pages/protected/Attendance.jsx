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
import CustomDateRangePicker from "../../components/CustomDateRangePicker";

function Attendance() {
  const [filters, setFilters] = useState({
    dateRange: {
      startDate: null,
      endDate: null,
    },
  });
  const [state, setState] = useState("Present");
  const _onDatesChange = (startDate = null, endDate = null) => {
    const newFilters = { ...filters };

    newFilters["dateRange"] = {
      startDate,
      endDate,
    };
    setFilters(newFilters);
  };

  return (
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
                          accentColor: state ? "#4CAF50" : "#FF6347",
                          borderRadius: "50px",
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                          transition: "all 0.3s ease",
                          backgroundColor: state ? "#4CAF50" : "#FF6347",
                        }}
                      />
                      <Label
                        check
                        style={{
                          paddingLeft: "15px",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          color: state ? "#4CAF50" : "#FF6347",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {state ? "Present" : "Absent"}
                      </Label>
                    </FormGroup>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
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
                          accentColor: state ? "#4CAF50" : "#FF6347",
                          borderRadius: "50px",
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                          transition: "all 0.3s ease",
                          backgroundColor: state ? "#4CAF50" : "#FF6347",
                        }}
                      />
                      <Label
                        check
                        style={{
                          paddingLeft: "15px",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          color: state ? "#4CAF50" : "#FF6347",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {state ? "Present" : "Absent"}
                      </Label>
                    </FormGroup>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
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
                          accentColor: state ? "#4CAF50" : "#FF6347",
                          borderRadius: "50px",
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                          transition: "all 0.3s ease",
                          backgroundColor: state ? "#4CAF50" : "#FF6347",
                        }}
                      />
                      <Label
                        check
                        style={{
                          paddingLeft: "15px",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          color: state ? "#4CAF50" : "#FF6347",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {state ? "Present" : "Absent"}
                      </Label>
                    </FormGroup>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
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
                          accentColor: state ? "#4CAF50" : "#FF6347",
                          borderRadius: "50px",
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                          transition: "all 0.3s ease",
                          backgroundColor: state ? "#4CAF50" : "#FF6347",
                        }}
                      />
                      <Label
                        check
                        style={{
                          paddingLeft: "15px",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          color: state ? "#4CAF50" : "#FF6347",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {state ? "Present" : "Absent"}
                      </Label>
                    </FormGroup>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
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
                          accentColor: state ? "#4CAF50" : "#FF6347",
                          borderRadius: "50px",
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                          transition: "all 0.3s ease",
                          backgroundColor: state ? "#4CAF50" : "#FF6347",
                        }}
                      />
                      <Label
                        check
                        style={{
                          paddingLeft: "15px",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          color: state ? "#4CAF50" : "#FF6347",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {state ? "Present" : "Absent"}
                      </Label>
                    </FormGroup>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
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
                          accentColor: state ? "#4CAF50" : "#FF6347",
                          borderRadius: "50px",
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                          transition: "all 0.3s ease",
                          backgroundColor: state ? "#4CAF50" : "#FF6347",
                        }}
                      />
                      <Label
                        check
                        style={{
                          paddingLeft: "15px",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          color: state ? "#4CAF50" : "#FF6347",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {state ? "Present" : "Absent"}
                      </Label>
                    </FormGroup>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
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
                          accentColor: state ? "#4CAF50" : "#FF6347",
                          borderRadius: "50px",
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                          transition: "all 0.3s ease",
                          backgroundColor: state ? "#4CAF50" : "#FF6347",
                        }}
                      />
                      <Label
                        check
                        style={{
                          paddingLeft: "15px",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          color: state ? "#4CAF50" : "#FF6347",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {state ? "Present" : "Absent"}
                      </Label>
                    </FormGroup>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </section>
      </TabPane>
    </>
  );
}

export default Attendance;
