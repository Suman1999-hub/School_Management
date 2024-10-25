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

function Notice() {
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
              <Label>Transaction Date</Label>
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
              <Label>Transaction Type</Label>
              <Input type="select">
                <option>All</option>
                <option>Basic Subscription</option>
                <option>Premium Subscription</option>
              </Input>
            </div>

            <div className="formGroup">
              <Label>Status</Label>
              <Input type="select">
                <option>All</option>
                <option>Active</option>
                <option>Inactive</option>
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
          <h6>Notice</h6>
          <Card body>
            <Table responsive>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Notice Type</th>
                  <th>Date</th>
                  <th>Download</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Basic Subscription</td>
                  <td>ABC 12458547</td>
                  <td>Visa 4242</td>

                  <td>Jul 12. 2023</td>
                  <td>
                    <Button style={{ backgroundColor: "#E3F3DA" }}>
                      <img
                        src={require("../../assets/img/download.png")}
                        alt=""
                        width="20px"
                      />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Premium Subscription</td>
                  <td>ABC 12458547</td>
                  <td>Visa 4242</td>

                  <td>Jul 12. 2023</td>
                  <td>
                    <Button style={{ backgroundColor: "#E3F3DA" }}>
                      <img
                        src={require("../../assets/img/download.png")}
                        alt=""
                        width="20px"
                      />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Dispute Letter</td>
                  <td>ABC 12458547</td>
                  <td>Visa 4242</td>

                  <td>Jul 12. 2023</td>
                  <td>
                    {" "}
                    <Button style={{ backgroundColor: "#E3F3DA" }}>
                      <img
                        src={require("../../assets/img/download.png")}
                        alt=""
                        width="20px"
                      />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Certified Letter</td>
                  <td>ABC 12458547</td>
                  <td>Visa 4242</td>
                  <td>Jul 12. 2023</td>
                  <td>
                    {" "}
                    <Button style={{ backgroundColor: "#E3F3DA" }}>
                      <img
                        src={require("../../assets/img/download.png")}
                        alt=""
                        width="20px"
                      />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>

            {/* See More */}
            <Button color="link" className="h-auto mb-2">
              See More <i className="fa fa-chevron-down"></i>
            </Button>
          </Card>
        </section>
      </TabPane>
    </>
  );
}

export default Notice;
