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
} from "reactstrap";
import ApplyLeaveModal from "../../components/modals/ApplyLeaveModal";
import { getAllLeaves } from "../../http/http-calls";
import { formatDatell } from "../../helper-methods";

function ApplyLeave() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const _toggleModal = (isOpenModal = false) => {
    setIsOpenModal(isOpenModal);
  };

  const [activeTab, setActiveTab] = useState("1");
  const _toggleTab = (newTab = "1") => {
    if (activeTab !== newTab) setActiveTab(newTab);
  };
  const [applyLeaveData, setApplyLeaveData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [leaveStatus, setLeaveStatus] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const _getApplyLeaveApi = async () => {
    try {
      const getApplyLeaveApiRes = await getAllLeaves();
      setApplyLeaveData(getApplyLeaveApiRes.leaves);
      setFilteredData(getApplyLeaveApiRes.leaves);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    _getApplyLeaveApi();
  }, []);

  useEffect(() => {
    if (applyLeaveData) {
      const filteredItems = applyLeaveData.filter((leaveData) => {
        const matchesLeaveType = leaveType
          ? leaveData.leaveType.toLowerCase() === leaveType.toLowerCase()
          : true;
        const matchesStatus = leaveStatus
          ? leaveData.status.toLowerCase() === leaveStatus.toLowerCase()
          : true;
        const matchesSearch = searchItem
          ? leaveData.leaveType
              .toLowerCase()
              .includes(searchItem.toLowerCase()) ||
            leaveData.reason.toLowerCase().includes(searchItem.toLowerCase()) ||
            (leaveData.startDate &&
              formatDatell(leaveData.startDate)
                .toLowerCase()
                .includes(searchItem.toLowerCase())) ||
            (leaveData.endDate &&
              formatDatell(leaveData.endDate)
                .toLowerCase()
                .includes(searchItem.toLowerCase())) ||
            leaveData.status.toLowerCase().includes(searchItem.toLowerCase())
          : true;

        return matchesLeaveType && matchesStatus && matchesSearch;
      });

      setFilteredData(filteredItems);
    }
  }, [applyLeaveData, searchItem, leaveType, leaveStatus]);

  const handleSearchField = (e) => {
    setSearchItem(e.target.value);
  };

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
                <Input
                  type="select"
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
                  value={leaveStatus}
                  onChange={(e) => setLeaveStatus(e.target.value)}
                >
                  <option value="">All</option>
                  <option value="approved">Approved</option>
                  <option value="pending">Pending</option>
                  <option value="rejected">Reject</option>
                </Input>
              </div>

              {/* search */}
              <div className="formGroup searchbar">
                <Label>Search</Label>
                <InputGroup>
                  <Input
                    placeholder="Search..."
                    onChange={(e) => handleSearchField(e)}
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
            <h6>Leave Information</h6>
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
                  {filteredData?.length !== 0
                    ? filteredData?.map((curr, index) => {
                        return (
                          <tr key={index}>
                            <td>{curr.leaveType}</td>
                            <td style={{ maxWidth: "300px" }}>{curr.reason}</td>
                            <td>
                              {curr?.startDate && formatDatell(curr?.startDate)}
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
                        );
                      })
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
            setApplyLeaveData={setApplyLeaveData}
          />
        )}
      </TabContent>
    </>
  );
}

export default ApplyLeave;
