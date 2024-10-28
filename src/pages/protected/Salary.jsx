import React, { useState } from "react";
import {
  Button,
  Card,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Table,
  TabPane,
} from "reactstrap";
import CustomDateRangePicker from "../../components/CustomDateRangePicker";

import AddTeacherModal from "../../components/modals/AddTeacherModal";
import PaginatedItems from "../../components/PaginatedItems";
function Salary() {
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
      <TabPane tabId="1">
        {/* filter */}
        <div className="filterWrapper">
          <div className="filterIcon">
            <i className="fas fa-filter" />
          </div>

          <div className="filterForm">
            <div className="formGroup">
              <Label>Select Date</Label>
              <CustomDateRangePicker
                startDate={filters.dateRange.startDate}
                endDate={filters.dateRange.endDate}
                startDateId={"startDate_kpi_dashboard"}
                endDateId={`endDate_kpi_dashboard`}
                onDatesChange={(startDate, endDate) =>
                  _onDatesChange(startDate, endDate)
                }
              />
            </div>

            {/* <div className="formGroup">
              <Label>Subject</Label>
              <Input type="select">
                <option>All</option>
                <option>Bengali</option>
                <option>English</option>
              </Input>
            </div> */}

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

        {/* Personal Information */}
        <section>
          <div className="innerHeader">
            <h2>Salary</h2>
            <div>
              <Button color="link" onClick={() => null}>
                <img
                  src={require("../../assets/img/Payslip_downloadzip.png")}
                  alt=""
                  width="40px"
                />
              </Button>
            </div>
          </div>
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
                    September 24 Payslip.pdf
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
                    August 24 Payslip.pdf
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
                    July 24 Payslip.pdf
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
                    June 24 Payslip.pdf
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
                    May 24 Payslip.pdf
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
                    April 24 Payslip.pdf
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

            <PaginatedItems itemsPerPage={4} />
          </Card>
        </section>
      </TabPane>
    </>
  );
}

export default Salary;
