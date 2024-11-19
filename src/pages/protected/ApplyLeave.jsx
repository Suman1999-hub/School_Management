import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Table,
  TabContent,
  TabPane,
  CardTitle,
} from "reactstrap";
import ApplyLeaveModal from "../../components/modals/ApplyLeaveModal";
import {
  filterLeaveApi,
  getAllLeaves,
  searchLeaveApi,
} from "../../http/http-calls";
import { formatDatell } from "../../helper-methods";
import SpinnerLoading from "../../components/SpinnerLoading";

function ApplyLeave() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [applyLeaveData, setApplyLeaveData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [leaveStatus, setLeaveStatus] = useState("");
  const [filteredSearchData, setFilteredSearchData] = useState([]);

  const _toggleModal = (isOpenModal = false) => {
    setIsOpenModal(isOpenModal);
  };

  const _toggleTab = (newTab = "1") => {
    if (activeTab !== newTab) setActiveTab(newTab);
  };

  const _getApplyLeaveApi = async () => {
    setLoading(true);
    try {
      const getApplyLeaveApiRes = await getAllLeaves();
      setApplyLeaveData(getApplyLeaveApiRes);
      setFilteredSearchData(getApplyLeaveApiRes.leaves);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    _getApplyLeaveApi();
  }, []);

  const _getSearchLeaveApi = async () => {
    if (searchItem) {
      const payload = { searchText: searchItem };
      try {
        const getApplyLeaveApiRes = await searchLeaveApi(payload);
        setFilteredSearchData(getApplyLeaveApiRes.leaves);
      } catch (err) {
        console.error(err);
      }
    } else {
      // If the search is cleared, fetch all data again
      _getApplyLeaveApi();
    }
  };

  useEffect(() => {
    _getSearchLeaveApi();
  }, [searchItem]);

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };

  const _getFilterLeaveApi = async () => {
    let payload = {};
    if (leaveType !== "" && leaveStatus === "") {
      payload = {
        leaveType,
      };
    } else if (leaveStatus !== "" && leaveType === "") {
      payload = {
        status: leaveStatus,
      };
    } else if (leaveStatus !== "" && leaveType !== "") {
      payload = {
        leaveType,
        status: leaveStatus,
      };
    } else {
      payload = {};
    }
    try {
      const getFilterLeaveApiRes = await filterLeaveApi(payload);
      setFilteredSearchData(getFilterLeaveApiRes.leaves);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    _getFilterLeaveApi();
  }, [leaveType, leaveStatus]);

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
              {/* Filter */}
              <div className="filterWrapper">
                <div className="filterIcon">
                  <i className="fas fa-filter" />
                </div>

                <div className="filterForm">
                  <div className="formGroup">
                    <Label>Leave Type</Label>
                    <Input
                      type="select"
                      name="leaveType"
                      value={leaveType}
                      onChange={(e) => setLeaveType(e.target.value)}
                    >
                      <option value="">Select Leave Type</option>
                      <option value="PL">PL</option>
                      <option value="CL">CL</option>
                      <option value="SL">SL</option>
                    </Input>
                  </div>

                  <div className="formGroup">
                    <Label>Status</Label>
                    <Input
                      type="select"
                      name="status"
                      value={leaveStatus}
                      onChange={(e) => setLeaveStatus(e.target.value)}
                    >
                      <option value="">All</option>
                      <option value="approved">Approved</option>
                      <option value="pending">Pending</option>
                      <option value="rejected">Reject</option>
                    </Input>
                  </div>

                  {/* Search */}
                  <div className="formGroup searchbar">
                    <Label>Search</Label>
                    <InputGroup>
                      <Input
                        placeholder="Search..."
                        name="searchItem"
                        onChange={handleSearch}
                        value={searchItem}
                      />
                      <InputGroupText>
                        <i className="fas fa-search" />
                      </InputGroupText>
                    </InputGroup>
                  </div>
                </div>
              </div>

              {/* Leave Information */}
              <section>
                <div className="innerHeader">
                  <h6>Leave Information</h6>
                  <Card
                    style={{
                      minWidth: "200px",
                      padding: "20px",
                      textAlign: "center",
                      backgroundColor: "#ebfeff",
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                    }}
                  >
                    <CardTitle>Remaining Leave</CardTitle>
                    <div>CL-{applyLeaveData?.remainingLeave?.CL}</div>
                    <div>PL-{applyLeaveData?.remainingLeave?.PL}</div>
                    <div>SL-{applyLeaveData?.remainingLeave?.SL}</div>
                  </Card>
                </div>
                <Card body>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Leave Type</th>
                        <th style={{ maxWidth: "300px" }}>Leave Reasons</th>
                        <th>Start Date</th>
                        <th>End Day</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredSearchData?.length !== 0
                        ? filteredSearchData.map((curr, index) => (
                            <tr key={index}>
                              <td>{curr.leaveType}</td>
                              <td style={{ maxWidth: "300px" }}>
                                {curr.reason}
                              </td>
                              <td>
                                {curr?.startDate &&
                                  formatDatell(curr?.startDate)}
                              </td>
                              <td>
                                {curr?.endDate && formatDatell(curr?.endDate)}
                              </td>
                              <td>
                                {curr?.status === "pending" ? (
                                  <span className="badge-warning">Pending</span>
                                ) : curr?.status === "approved" ? (
                                  <span className="badge-success">Accept</span>
                                ) : (
                                  <span className="badge-danger">Reject</span>
                                )}
                              </td>
                            </tr>
                          ))
                        : "No Data Found"}
                    </tbody>
                  </Table>
                </Card>
              </section>
            </TabPane>
            {isOpenModal && (
              <ApplyLeaveModal
                isOpen={isOpenModal}
                toggle={() => _toggleModal()}
                getAllLeaves={_getApplyLeaveApi}
              />
            )}
          </TabContent>
        </>
      )}
    </>
  );
}

export default ApplyLeave;
