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
  Spinner,
  TabContent,
  Table,
  TabPane,
} from "reactstrap";
import CustomDateRangePicker from "../../components/CustomDateRangePicker";
import ApplyLeaveModal from "../../components/modals/ApplyLeaveModal";
import {
  filterLeaveApi,
  getAllLeaves,
  getLeaves,
  searchLeaveApi,
  UpdateLeaveStatus,
} from "../../http/http-calls";
import { useSelector } from "react-redux";
import { formatDatell } from "../../helper-methods";
import SpinnerLoading from "../../components/SpinnerLoading";
import { debounce } from "lodash";

function Approval() {
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
  const [isLoading, setIsLoading] = useState(true);
  const [searchItem, setSearchItem] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [leaveStatus, setLeaveStatus] = useState("");
  const [filteredSearchData, setFilteredSearchData] = useState([]);
  const [activeTab, setActiveTab] = useState("1");
  const _toggleTab = (newTab = "1") => {
    if (activeTab !== newTab) setActiveTab(newTab);
  };
  const [applyLeaveData, setApplyLeaveData] = useState();
  const _getApplyLeaveApi = async () => {
    setIsLoading(true);
    try {
      const getApplyLeaveApiRes = await getAllLeaves();
      // console.log();
      setApplyLeaveData(getApplyLeaveApiRes);
    } catch (err) {
      console.log("Approval Error", err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    _getApplyLeaveApi();
  }, []);

  const _handleApprovedAndReject = async (field, id) => {
    const payload = {
      status: field,
    };
    setIsLoading(true);
    try {
      const UpdateLeaveStatusApiRes = await UpdateLeaveStatus({ id, payload });
      if (!UpdateLeaveStatusApiRes.error) {
        _getApplyLeaveApi();
      }
      console.log("UpdateLeaveStatusApiRes", UpdateLeaveStatusApiRes);
    } catch (err) {
      console.log("Error is", err);
    } finally {
      setIsLoading(false);
    }
  };
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
      _getApplyLeaveApi();
    }
  };

  useEffect(() => {
    const debouncedFetch = debounce(_getSearchLeaveApi, 500);
    debouncedFetch();

    return () => {
      debouncedFetch.cancel();
    };
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
      {isLoading ? (
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
                      <option value="approved">Accept</option>
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

              {/* Personal Information */}
              <section>
                <h6>Leave Information</h6>
                <Card body>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Leave Type</th>
                        <th style={{ maxWidth: "300px" }}>Leave Reasons</th>
                        <th>Start Date</th>
                        <th>End Day</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredSearchData?.length !== 0
                        ? filteredSearchData?.map((curr, ind) => {
                            return (
                              <tr>
                                <td>
                                  {
                                    applyLeaveData.leaves[ind]._teacher
                                      .firstName
                                  }{" "}
                                  {applyLeaveData.leaves[ind]._teacher.lastName}
                                </td>
                                <td>{curr.leaveType}</td>
                                <td style={{ maxWidth: "300px" }}>
                                  {curr.reason}
                                </td>
                                <td>
                                  {curr?.startDate &&
                                    formatDatell(curr?.startDate)}
                                </td>
                                <td>
                                  {" "}
                                  {curr?.endDate && formatDatell(curr?.endDate)}
                                </td>
                                <td>
                                  {curr?.status === "pending" ? (
                                    <span className="badge-warning">
                                      Pending
                                    </span>
                                  ) : curr?.status === "approved" ? (
                                    <span className="badge-success">
                                      Accept
                                    </span>
                                  ) : (
                                    <span className="badge-danger">reject</span>
                                  )}
                                </td>

                                <td>
                                  {curr?.status === "pending" ? (
                                    <div>
                                      <Button
                                        color="success"
                                        outline
                                        disabled={isLoading}
                                        onClick={() =>
                                          _handleApprovedAndReject(
                                            "approved",
                                            curr?._id
                                          )
                                        }
                                      >
                                        {isLoading ? (
                                          <>
                                            <Spinner size="sm">
                                              Loading...
                                            </Spinner>
                                            <span style={{ color: "white" }}>
                                              {" "}
                                              Accepting...
                                            </span>
                                          </>
                                        ) : (
                                          "Accept"
                                        )}
                                      </Button>
                                      <Button
                                        color="danger"
                                        outline
                                        disabled={isLoading}
                                        onClick={() =>
                                          _handleApprovedAndReject(
                                            "rejected",
                                            curr?._id
                                          )
                                        }
                                      >
                                        {isLoading ? (
                                          <>
                                            <Spinner size="sm">
                                              Loading...
                                            </Spinner>
                                            <span style={{ color: "white" }}>
                                              {" "}
                                              Rejecting...
                                            </span>
                                          </>
                                        ) : (
                                          "Reject"
                                        )}
                                      </Button>
                                    </div>
                                  ) : (
                                    // <h6 style={{ textAlign: "center" }}>-</h6>
                                    ""
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
      )}
    </>
  );
}

export default Approval;
