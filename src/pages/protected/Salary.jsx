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
              <Label>Joining Date</Label>
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

            <div className="formGroup">
              <Label>Subject</Label>
              <Input type="select">
                <option>All</option>
                <option>Bengali</option>
                <option>English</option>
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

        {/* Personal Information */}
        <section>
          <div className="innerHeader">
            <h2>Salary</h2>
            <div>
              {/* <Button onClick={() => null}> */}
              <img
                src={require("../../assets/img/Payslip_downloadzip.png")}
                alt=""
                width="50px"
              />
              {/* </Button> */}
            </div>
          </div>
          <Card body>
            <Table responsive>
              <thead>
                <tr>
                  <th></th>
                  <th>Phone Number</th>
                  <th>Address</th>
                  <th>Gender</th>
                  <th>Subject</th>
                  <th>Date of Joining</th>
                  <th>View Details</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Jon roy</td>
                  <td>8777667698</td>
                  <td>Kolkata, West Bengal, 700091</td>
                  <td>Male</td>
                  <td>Bengali</td>
                  <td>Jul 12. 2023</td>
                  <td>
                    <div className="action">
                      <Button color="link">
                        <i className="fa fa-eye"></i>
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
