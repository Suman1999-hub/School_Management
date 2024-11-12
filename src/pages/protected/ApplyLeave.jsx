import React, { useEffect, useState } from "react";
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
import ApplyLeaveModal from "../../components/modals/ApplyLeaveModal";
import { getAllLeaves, getLeaves } from "../../http/http-calls";
import { useSelector } from "react-redux";
import { formatDatell } from "../../helper-methods";

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
  const [applyLeaveData, setApplyLeaveData] = useState();
  const _getApplyLeaveApi = async () => {
    try {
      const getApplyLeaveApiRes = await getAllLeaves();
      setApplyLeaveData(getApplyLeaveApiRes.leaves);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    _getApplyLeaveApi();
  }, []);

  return (
    <>
      <div className="innerHeader">
        <h2>Leave</h2>
        <div>
          <Button color="primary" onClick={() => _toggleModal(true)}>
            Apply Leave
          </Button>
        </div>
      </div>
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
                    {/* <th>Leave Id</th> */}
                    <th>Leave Type</th>
                    <th style={{ maxWidth: "300px" }}>Leave Reasons</th>
                    <th>Start Date</th>
                    <th>End Day</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {applyLeaveData?.length !== 0
                    ? applyLeaveData?.map((curr) => {
                        return (
                          <tr>
                            {/* <td>{curr._id}</td> */}
                            <td>{curr.leaveType}</td>
                            <td style={{ maxWidth: "300px" }}>{curr.reason}</td>
                            <td>
                              {curr?.startDate && formatDatell(curr?.startDate)}
                            </td>
                            <td>
                              {" "}
                              {curr?.endDate && formatDatell(curr?.endDate)}
                            </td>
                            <td>
                              {curr?.status === "pending" ? (
                                <span className="badge-danger">Pending</span>
                              ) : (
                                <span className="badge-success">Accept</span>
                              )}
                            </td>
                          </tr>
                        );
                      })
                    : "No Data Found"}

                  {/* <tr>
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
                  </tr> */}
                </tbody>
              </Table>
            </Card>
          </section>
        </TabPane>
        {isOpenModal && (
          <ApplyLeaveModal
            isOpen={isOpenModal}
            toggle={() => _toggleModal()}
            setApplyLeaveData={setApplyLeaveData}
          />
        )}
      </TabContent>
    </>
  );
}

export default ApplyLeave;
