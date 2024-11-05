import React, { useState } from "react";
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

  const _onDatesChange = (startDate = null, endDate = null) => {
    const newFilters = { ...filters };

    newFilters["dateRange"] = {
      startDate,
      endDate,
    };
    setFilters(newFilters);
  };

  const loginUser = useSelector((state) => state.userCredential.user.loginType);
  console.log(loginUser);
  return (
    <>
      {loginUser === "admin" ? (
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
                      <th>Attendence(%)</th>
                      <th>Marks(%)</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Yash Agarwal</td>
                      <td>Male</td>
                      <td>VI</td>
                      <td>A</td>
                      <td>9004569812</td>
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

                    <tr>
                      <td>12</td>
                      <td>Aveek mehotra</td>
                      <td>Male</td>
                      <td>VII</td>
                      <td>B</td>

                      <td>9004569812</td>
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
                    <tr>
                      <td>19</td>
                      <td>Priti Agarwal</td>
                      <td>Female</td>
                      <td>VI</td>
                      <td>C</td>

                      <td>8643668432</td>
                      <td>
                        <CircularProgressbar
                          value="93"
                          text="93%"
                          className="success"
                          styles={buildStyles({
                            strokeLinecap: "round",
                          })}
                        />
                      </td>
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
                    <tr>
                      <td>1</td>
                      <td>Yash Agarwal</td>
                      <td>Male</td>
                      <td>VI</td>
                      <td>B</td>

                      <td>9004569812</td>
                      <td>
                        <CircularProgressbar
                          value="99"
                          text="99%"
                          className="success"
                          styles={buildStyles({
                            strokeLinecap: "round",
                          })}
                        />
                      </td>
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
                    <tr>
                      <td>17</td>
                      <td>Abhishek Mehra</td>
                      <td>Male</td>
                      <td>V</td>
                      <td>A</td>

                      <td>9432669812</td>
                      <td>
                        <CircularProgressbar
                          value="64"
                          text="64%"
                          className="danger"
                          styles={buildStyles({
                            strokeLinecap: "round",
                          })}
                        />
                      </td>
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
                        <span className="badge-danger">Fail</span>
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Trina Bose</td>
                      <td>Female</td>
                      <td>VIII</td>
                      <td>C</td>

                      <td>9004512312</td>
                      <td>
                        <CircularProgressbar
                          value="97"
                          text="97%"
                          className="success"
                          styles={buildStyles({
                            strokeLinecap: "round",
                          })}
                        />
                      </td>
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
                    {/* {allStudents.map((curr) => {
                    console.log(curr);
                    return (
                      <>
                        <tr>
                          <td>
                            {curr.imageUrl ? (
                              <img src={curr.imageUrl} width="100px" />
                            ) : (
                              "null"
                            )}
                          </td>
                          <td>{curr.name}</td>
                          <td>
                            {getAddressFormate(
                              curr.address.city,
                              curr.address.state,
                              curr.address.country,
                              curr.address.pinCode
                            )}
                          </td>
                          <td>{curr.registrationNumber}</td>
                         
                        </tr>
                      </>
                    );
                  })} */}
                  </tbody>
                </Table>

                {/* pagination */}
                <PaginatedItems itemsPerPage={4} />
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
  );
}

export default Report;
