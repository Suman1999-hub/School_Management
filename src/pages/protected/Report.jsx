import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardTitle,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  List,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  Table,
  TabPane,
} from "reactstrap";
import MidExam from "../../components/MidExam";
import CustomDateRangePicker from "../../components/CustomDateRangePicker";
import PaginatedItems from "../../components/PaginatedItems";
import { useSelector } from "react-redux";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { getAllStudentReport } from "../../http/http-calls";
import SpinnerLoading from "../../components/SpinnerLoading";

function Report() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const _toggleModal = (isOpenModal = false) => {
    setIsOpenModal(isOpenModal);
  };

  const [activeTab, setActiveTab] = useState("1");
  const _toggleTab = (newTab = "1") => {
    if (activeTab !== newTab) setActiveTab(newTab);
  };

  const [filters, setFilters] = useState({
    dateRange: {
      startDate: null,
      endDate: null,
    },
  });
  const [allReport, setAllReport] = useState();
  const _onDatesChange = (startDate = null, endDate = null) => {
    const newFilters = { ...filters };

    newFilters["dateRange"] = {
      startDate,
      endDate,
    };
    setFilters(newFilters);
  };
  const [loading, setLoading] = useState(false);

  const loginUser = useSelector((state) => state.userCredential.user.loginType);
  // console.log(loginUser);
  const payload = {
    academicYear: "",
    className: "",
    section: "",
  };
  // console.log("getAllStudentReportRes", allReport);
  const _getAllStudentReportApiCall = async () => {
    setLoading(true);
    try {
      const getAllStudentReportRes = await getAllStudentReport(payload);
      setAllReport(getAllStudentReportRes.progressReports);
    } catch (err) {
      console.log("Error is :", err);
      setAllReport(err.progressReports);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    _getAllStudentReportApiCall();
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <SpinnerLoading />
        </div>
      ) : (
        <>
          {loginUser !== "student" ? (
            <>
              <div className="innerHeader">
                <h2>Report</h2>
                <div>
                  <Button
                    color="primary"
                    outline
                    className="ms-3 mx-5"
                    onClick={() => null}
                  >
                    Import CSV
                  </Button>
                </div>
              </div>

              <TabPane tabId="1">
                {/* filter */}
                <div className="filterWrapper">
                  <div className="filterIcon">
                    <i className="fas fa-filter" />
                  </div>

                  <div className="filterForm">
                    <div className="formGroup">
                      <Label>Acedemic Year</Label>
                      <Input type="select">
                        <option>2024-2025</option>
                        <option>2023-2024</option>
                        <option>2022-2023</option>
                        <option>2021-2022</option>
                        <option>2020-2021</option>
                        <option>2019-2020</option>
                        <option>2018-2019</option>
                        <option>2017-2018</option>
                        <option>2016-2017</option>
                        <option>2015-2016</option>
                        <option>2014-2015</option>
                        <option>2013-2014</option>
                      </Input>
                    </div>
                    {/* <div className="formGroup">
              <Label>School</Label>
              <Input type="select">
                <option>All</option>
                <option>Kendriya Vidyalaya AFS Bagdogra</option>
                <option>DAV International School</option>
                <option>G D Goenka School</option>
                <option>Modi International School</option>
                <option>Army Public School, Delhi</option>
                <option>Delhi Public School, Sukna</option>
              </Input>
            </div> */}
                    <div className="formGroup">
                      <Label>Class</Label>
                      <Input type="select">
                        <option>All</option>
                        <option>I</option>
                        <option>II</option>
                        <option>III</option>
                        <option>IV</option>
                        <option>V</option>
                        <option>VI</option>
                        <option>VII</option>
                        <option>VIII</option>
                        <option>IX</option>
                        <option>X</option>
                      </Input>
                    </div>
                    <div className="formGroup">
                      <Label>Section</Label>
                      <Input type="select">
                        <option>All</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                      </Input>
                    </div>

                    {/* search */}
                    <div className="formGroup searchbar">
                      <Label>Search</Label>
                      <InputGroup>
                        <Input placeholder="Search..." />
                        <InputGroupText>
                          <i className="fas fa-search" />
                        </InputGroupText>
                      </InputGroup>
                    </div>
                  </div>
                </div>

                <div>
                  <Card body>
                    <CardTitle>Students</CardTitle>

                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Roll no</th>
                          <th>Name</th>
                          <th>gender</th>
                          <th>Class</th>
                          <th>Section</th>
                          <th>Mobile no.</th>
                          {/* <th>Attendence(%)</th> */}
                          <th>Marks(%)</th>
                          <th>Status</th>
                        </tr>
                      </thead>

                      <tbody>
                        {allReport?.map((curr) => {
                          console.log(curr);
                          return curr.termType === "final" ? (
                            <tr>
                              <td>{curr?._user?.rollNo}</td>
                              <td>{curr?._user?.fullName}</td>
                              <td>{curr?._user?.gender}</td>
                              <td>{curr?._class?.name}</td>
                              <td>{curr?._class?.section}</td>
                              <td>{curr?._user?.phone}</td>

                              <td>
                                <CircularProgressbar
                                  value="89"
                                  text="89%"
                                  className="success"
                                  styles={buildStyles({
                                    strokeLinecap: "round",
                                  })}
                                />
                              </td>
                              <td>
                                <span className="badge-success">Pass</span>
                              </td>
                            </tr>
                          ) : (
                            ""
                          );
                        })}
                      </tbody>
                    </Table>

                    {/* pagination */}
                    {/* <PaginatedItems itemsPerPage={4} /> */}
                  </Card>
                </div>
              </TabPane>
            </>
          ) : (
            <div className="disputes_tab">
              <Nav pills>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => _toggleTab("1")}
                  >
                    Midterm Examination
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => _toggleTab("2")}
                  >
                    Annual Examination
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <div className="filterWrapper">
                    <div className="filterIcon">
                      <i className="fas fa-filter" />
                    </div>

                    <div className="filterForm">
                      <div className="formGroup">
                        <Label>Academic Year</Label>
                        <Input type="select">
                          <option>Select Academic Years </option>
                          <option>2024 - 2025</option>
                          <option>2023 - 2024</option>
                          <option>2022 - 2023</option>
                          <option>2021 - 2022</option>
                          <option>2020 - 2021</option>
                        </Input>
                      </div>

                      {/* search */}
                      <div className="formGroup searchbar">
                        <Label>Search</Label>
                        <InputGroup>
                          <Input placeholder="Search..." />
                          <InputGroupText>
                            <i className="fas fa-search" />
                          </InputGroupText>
                        </InputGroup>
                      </div>
                    </div>
                  </div>
                  <MidExam />
                </TabPane>
                <TabPane tabId="2">
                  <div className="filterWrapper">
                    <div className="filterIcon">
                      <i className="fas fa-filter" />
                    </div>

                    <div className="filterForm">
                      <div className="formGroup">
                        <Label>Academic Years</Label>
                        <Input type="select">
                          <option>Select Academic Years </option>
                          <option>2024 - 2025</option>
                          <option>2023 - 2024</option>
                          <option>2022 - 2023</option>
                          <option>2021 - 2022</option>
                          <option>2020 - 2021</option>
                        </Input>
                      </div>

                      {/* search */}
                      <div className="formGroup searchbar">
                        <Label>Search</Label>
                        <InputGroup>
                          <Input placeholder="Search..." />
                          <InputGroupText>
                            <i className="fas fa-search" />
                          </InputGroupText>
                        </InputGroup>
                      </div>
                    </div>
                  </div>
                  <MidExam />
                  <h6>Report cards</h6>

                  <section>
                    <Card body>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>Document Name</th>
                            <th>Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>
                              <img
                                src={require("../../assets/img/word.png")}
                                alt="file"
                                width="20px"
                              />
                              ReportCard-5.pdf
                            </td>

                            <td>Jul 12. 2023</td>
                            <td>
                              <div className="action">
                                <Button color="link">
                                  <img
                                    src={require("../../assets/img/download-salary.png")}
                                    alt="download btn"
                                    width="30px"
                                  />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src={require("../../assets/img/word.png")}
                                alt="file"
                                width="20px"
                              />
                              ReportCard-6.pdf
                            </td>

                            <td>Jul 12. 2023</td>
                            <td>
                              <div className="action">
                                <Button color="link">
                                  <img
                                    src={require("../../assets/img/download-salary.png")}
                                    alt="download btn"
                                    width="30px"
                                  />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src={require("../../assets/img/word.png")}
                                alt="file"
                                width="20px"
                              />
                              ReportCard-7.pdf
                            </td>

                            <td>Jul 12. 2023</td>
                            <td>
                              <div className="action">
                                <Button color="link">
                                  <img
                                    src={require("../../assets/img/download-salary.png")}
                                    alt="download btn"
                                    width="30px"
                                  />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src={require("../../assets/img/word.png")}
                                alt="file"
                                width="20px"
                              />
                              ReportCard-8.pdf
                            </td>

                            <td>Jul 12. 2023</td>
                            <td>
                              <div className="action">
                                <Button color="link">
                                  <img
                                    src={require("../../assets/img/download-salary.png")}
                                    alt="download btn"
                                    width="30px"
                                  />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src={require("../../assets/img/word.png")}
                                alt="file"
                                width="20px"
                              />
                              ReportCard-9.pdf
                            </td>

                            <td>Jul 12. 2023</td>
                            <td>
                              <div className="action">
                                <Button color="link">
                                  <img
                                    src={require("../../assets/img/download-salary.png")}
                                    alt="download btn"
                                    width="30px"
                                  />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src={require("../../assets/img/word.png")}
                                alt="file"
                                width="20px"
                              />
                              ReportCard-10.pdf
                            </td>

                            <td>Jul 12. 2023</td>
                            <td>
                              <div className="action">
                                <Button color="link">
                                  <img
                                    src={require("../../assets/img/download-salary.png")}
                                    alt="download btn"
                                    width="30px"
                                  />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </Table>

                      {/* <PaginatedItems itemsPerPage={4} /> */}
                    </Card>
                  </section>
                </TabPane>
              </TabContent>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Report;
