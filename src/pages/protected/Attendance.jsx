import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  FormGroup,
  Input,
  Label,
  Table,
  TabPane,
} from "reactstrap";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useSelector } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import {
  dateFormatl,
  formatDate,
  formatDatell,
  getFormattedDate,
} from "../../helper-methods";
import {
  getAvailableClasses,
  getClassStudents,
  markStudentAttendance,
} from "../../http/http-calls";
import SpinnerLoading from "../../components/SpinnerLoading";

const localizer = momentLocalizer(moment);

function Attendance() {
  const [btnState, setBtnState] = useState({});
  const [error, setError] = useState("");
  const [value, onChange] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState(getFormattedDate());
  const [studentsData, setStudentsData] = useState();

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const userLoginType = useSelector(
    (state) => state.userCredential.user.loginType
  );

  const [acedemicYear, setAcedemicYear] = useState("");
  const [classInput, setClassInput] = useState("");
  const [section, setSection] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const _getAllStudent = async () => {
    const payload = {
      academicYear: acedemicYear,
      classname: classInput,
      section: section,
    };
    setIsLoading(true);
    try {
      const getClassStudentRes = await getClassStudents({ payload });
      setStudentsData(getClassStudentRes);
      console.log(getClassStudentRes);
    } catch (err) {
      console.log(err);
      setError(err.reason);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(btnState);

  const handleAttendance = (btnState, _id) => {
    console.log(btnState);
    console.log(_id);
    setBtnState((prevState) => ({
      ...prevState,
      [_id]: !prevState[_id],
    }));
  };
  const [getClass, setGetClass] = useState();
  const _getClassApi = async () => {
    try {
      const getClassAPiCall = await getAvailableClasses();
      setGetClass(getClassAPiCall?.settings?.availableClasses);
      // console.log(getClassAPiCall?.settings?.availableClasses);
    } catch (err) {
      console.log("Get Class :", err);
    }
  };
  useEffect(() => {
    _getClassApi();
  }, []);
  return (
    <>
      {userLoginType === "student" && (
        <Card style={{ maxWidth: "70%", margin: "auto" }}>
          <Calendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </Card>
      )}
      {userLoginType === "teacher" && (
        <>
          <TabPane tabId="1">
            <div
              className="filterWrapper"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <div className="formGroup" style={{ marginRight: "20px" }}>
                <Label>Class</Label>

                <Input
                  type="select"
                  onChange={(e) => setClassInput(e.target.value)}
                >
                  <option value="">Select Class</option>
                  {Array.isArray(getClass) &&
                    getClass.map((currClass) => {
                      return (
                        <option key={currClass._id} value={currClass.grade}>
                          {currClass.grade}
                        </option>
                      );
                    })}
                </Input>
              </div>

              <div className="formGroup" style={{ marginRight: "20px" }}>
                <Label>Section</Label>
                <Input
                  type="select"
                  onChange={(e) => setSection(e.target.value)}
                >
                  <option value="">Select Section</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </Input>
              </div>

              <div className="d-flex justify-content-center mt-4">
                <Button
                  color="primary"
                  className="btn-submit"
                  onClick={() => _getAllStudent()}
                >
                  Search
                </Button>
              </div>
            </div>
            {error !== "" ? <span style={{ color: "red" }}>{error}</span> : ""}
            {/* Personal Information */}
            <section>
              <div className="innerHeader">
                <h2>Attendance</h2>
                <div style={{ display: "flex" }}>
                  <img
                    src={require("../../assets/img/schedule-unscreen.gif")}
                    style={{ maxWidth: "50px" }}
                    alt=""
                  />
                  <Input
                    type="date"
                    value={selectedDate}
                    style={{ maxWidth: "150px" }}
                    onChange={(e) => handleDateChange(e)}
                  />
                </div>
              </div>
              {isLoading ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50vh",
                  }}
                >
                  <SpinnerLoading />
                </div>
              ) : (
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
                      {studentsData?.students?.length > 0 ? (
                        studentsData?.students?.map((curr) => {
                          return (
                            <tr key={curr.rollNo}>
                              <td>{curr.rollNo}</td>
                              <td>
                                {curr.firstName} {curr.lastName}
                              </td>
                              <td>{curr.gender}</td>
                              <td>{curr.phone}</td>
                              <td>
                                <div
                                  style={{
                                    display: "flex",
                                    gap: "10px",
                                  }}
                                >
                                  <img
                                    src={require(`../../assets/img/radio.png`)}
                                    alt=""
                                    style={{
                                      maxWidth: "30px",
                                      maxHeight: "30px",
                                    }}
                                  />
                                  <img
                                    src={require(`../../assets/img/radio.png`)}
                                    alt=""
                                    style={{
                                      maxWidth: "30px",
                                      maxHeight: "30px",
                                    }}
                                  />
                                  <img
                                    src={require(`../../assets/img/radio.png`)}
                                    alt=""
                                    style={{
                                      maxWidth: "30px",
                                      maxHeight: "30px",
                                    }}
                                  />
                                  <img
                                    src={require(`../../assets/img/radio-absent.png`)}
                                    alt=""
                                    style={{
                                      maxWidth: "30px",
                                      maxHeight: "30px",
                                    }}
                                  />
                                  <img
                                    src={require(`../../assets/img/radio.png`)}
                                    alt=""
                                    style={{
                                      maxWidth: "30px",
                                      maxHeight: "30px",
                                    }}
                                  />
                                  <img
                                    src={require(`../../assets/img/radio.png`)}
                                    alt=""
                                    style={{
                                      maxWidth: "30px",
                                      maxHeight: "30px",
                                    }}
                                  />
                                </div>
                              </td>
                              <td>
                                <FormGroup switch>
                                  <Input
                                    type="switch"
                                    checked={btnState[curr?._id] || false}
                                    onClick={() =>
                                      handleAttendance(
                                        btnState[curr?._id],
                                        curr?._id
                                      )
                                    }
                                    style={{
                                      width: "50px",
                                      height: "28px",
                                      position: "relative",
                                      accentColor: btnState[curr?._id]
                                        ? "#0d6efd"
                                        : "#dd9aed",
                                      borderRadius: "50px",
                                      boxShadow:
                                        "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                                      transition: "all 0.3s ease",
                                      backgroundColor: btnState[curr?._id]
                                        ? "#0d6efd"
                                        : "#dd9aed",
                                    }}
                                  />
                                </FormGroup>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <h6 style={{ textAlign: "center", color: "red" }}>
                          No Data Found
                        </h6>
                      )}
                    </tbody>
                  </Table>
                </Card>
              )}
            </section>
          </TabPane>
          {isLoading ? (
            ""
          ) : (
            <div style={{ textAlign: "center" }}>
              <Button color="primary">Submit</Button>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Attendance;
