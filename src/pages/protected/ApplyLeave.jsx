import React, { useState } from "react";
import {
  Button,
  Card,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  List,
  TabContent,
  Table,
  TabPane,
} from "reactstrap";
import CustomDateRangePicker from "../../components/CustomDateRangePicker";

function ApplyLeave() {
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

  const [isOpenModal, setIsOpenModal] = useState(false);
  const _toggleModal = (isOpenModal = false) => {
    setIsOpenModal(isOpenModal);
  };

  const [activeTab, setActiveTab] = useState("1");
  const _toggleTab = (newTab = "1") => {
    if (activeTab !== newTab) setActiveTab(newTab);
  };
  return (
    <>
      <Card style={{ maxWidth: "50%", margin: "auto", padding: "50px" }}>
        <h4 style={{ textAlign: "center" }}>Apply Leave</h4>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <FormGroup style={{ minWidth: "350px" }}>
            <Label for="exampleSelect">Leave Type</Label>
            <Input id="exampleSelect" name="select" type="select">
              <option>Select Leave Type</option>
              <option>SL</option>
              <option>PL</option>
              <option>CL</option>
            </Input>
          </FormGroup>
          <FormGroup style={{ minWidth: "350px" }}>
            <Label for="exampleSelect">Start Date</Label>
            <Input id="exampleSelect" name="date" type="date" />
          </FormGroup>
          <FormGroup style={{ minWidth: "400px" }}>
            <Label for="exampleSelect">End Date</Label>
            <Input id="exampleSelect" name="date" type="date" />
          </FormGroup>
        </div>

        <FormGroup>
          <Label for="exampleText">Leave Reasons</Label>
          <Input
            id="exampleText"
            name="text"
            type="textarea"
            placeholder="Leave Reasons"
          />
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" /> <Label check>Is Half Day Leave?</Label>
        </FormGroup>
        <div style={{ textAlign: "center" }}>
          <Button color="primary">Submit</Button>
        </div>
      </Card>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          {/* filter */}
          <div className="filterWrapper">
            <div className="filterIcon">
              <i className="fas fa-filter" />
            </div>

            <div className="filterForm">
              <div className="formGroup">
                <Label>Leave Type</Label>
                <Input type="select">
                  <option>Select Leave Type</option>
                  <option>PL</option>
                  <option>CL</option>
                  <option>SL</option>
                </Input>
              </div>

              <div className="formGroup">
                <Label>Status</Label>
                <Input type="select">
                  <option>All</option>
                  <option>Accept</option>
                  <option>Pending</option>
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
            <h6>Leave Information</h6>
            <Card body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Leave Id</th>
                    <th>Leave Type</th>
                    <th style={{ maxWidth: "300px" }}>Leave Reasons</th>
                    <th>Start Date</th>
                    <th>End Day</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>4344343434</td>
                    <td>CL</td>
                    <td style={{ maxWidth: "300px" }}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </td>
                    <td>Jul 11. 2023</td>
                    <td>Jul 12. 2023</td>
                    <td>
                      <span className="badge-danger">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>4344343434</td>
                    <td>CL</td>
                    <td style={{ maxWidth: "300px" }}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </td>
                    <td>Jul 11. 2023</td>
                    <td>Jul 12. 2023</td>
                    <td>
                      <span className="badge-success">Accept</span>
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>4344343434</td>
                    <td>CL</td>
                    <td style={{ maxWidth: "300px" }}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </td>
                    <td>Jul 11. 2023</td>
                    <td>Jul 12. 2023</td>
                    <td>
                      <span className="badge-success">Accept</span>
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>4344343434</td>
                    <td>CL</td>
                    <td style={{ maxWidth: "300px" }}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </td>
                    <td>Jul 11. 2023</td>
                    <td>Jul 12. 2023</td>
                    <td>
                      <span className="badge-danger">Pending</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </section>
        </TabPane>
      </TabContent>
    </>
  );
}

export default ApplyLeave;
