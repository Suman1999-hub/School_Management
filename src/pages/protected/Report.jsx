import React, { useState } from "react";
import {
  Button,
  Card,
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
  return (
    <>
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
    </>
  );
}

export default Report;
