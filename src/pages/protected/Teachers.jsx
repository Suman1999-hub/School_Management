import React, { useEffect, useState } from "react";
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
import { findAllTeacher } from "../../http/http-calls";
import {
  formatDatell,
  getAddressFormate,
  getFullNameFormate,
} from "../../helper-methods";
import { Link } from "react-router-dom";
import SpinnerLoading from "../../components/SpinnerLoading";

function Teachers() {
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
  const [allteacher, setAllTeacher] = useState();
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const _getAllTeacherAPiCall = async (currentPage, itemsPerPage) => {
    const payload = {
      pageNumber: currentPage,
      pageSize: itemsPerPage,
    };
    setIsLoading(true);
    try {
      const getAllTeacherApi = await findAllTeacher(payload);
      setAllTeacher(getAllTeacherApi.data);
      setTotalTeachers(getAllTeacherApi.totalTeachers);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    _getAllTeacherAPiCall();
  }, []);
  const handlePageChange = async (page) => {
    setCurrentPage(page);
    await _getAllTeacherAPiCall(page, itemsPerPage);
  };

  const handleItemsChange = (items) => {
    setCurrentItems(items);
  };
  return (
    <>
      {isLoading ? (
        // Display a loading spinner or message when data is loading
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
                <h2>Teacher</h2>
                <div>
                  <Button
                    color="primary"
                    outline
                    className="ms-3 mx-5"
                    onClick={() => null}
                  >
                    Import CSV
                  </Button>

                  <Button color="primary" onClick={() => _toggleModal(true)}>
                    Add Teacher
                  </Button>
                </div>
              </div>
              <Card body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>Address</th>
                      <th>Gender</th>
                      <th>Subject</th>
                      <th>Date of Joining</th>
                      <th>View Details</th>
                    </tr>
                  </thead>

                  <tbody>
                    {currentItems?.map((curr, index) => {
                      console.log(curr);
                      return (
                        <tr>
                          <td>
                            {getFullNameFormate(
                              curr?.firstName,
                              curr?.lastName
                            )}
                          </td>
                          <td>{curr?.phone}</td>
                          <td>
                            {curr?.address
                              ? getAddressFormate(
                                  curr?.address?.city
                                    ? curr?.address?.city
                                    : "-",
                                  curr?.address?.state
                                    ? curr?.address?.state
                                    : "-",
                                  curr?.address?.country
                                    ? curr?.address?.country
                                    : "-",
                                  curr?.address?.pin ? curr?.address?.pin : "-"
                                )
                              : ""}
                          </td>
                          <td>{curr?.gender}</td>
                          <td>
                            {curr?.subject?.length
                              ? curr?.subject
                                  ?.map((currSubject) => currSubject)
                                  .join()
                              : "-"}
                          </td>
                          <td>
                            {curr?.joinDate
                              ? formatDatell(curr?.joinDate)
                              : "-"}
                          </td>
                          <td>
                            <div className="action">
                              <Link to={`/teacher/${curr._id}`}>
                                <Button color="link">
                                  <i className="fa fa-eye"></i>
                                </Button>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>

                <PaginatedItems
                  items={allteacher}
                  totalItems={totalTeachers}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  onItemsChange={(items) => handleItemsChange(items)}
                  onPageChange={handlePageChange}
                />
              </Card>
            </section>
          </TabPane>
          {isOpenModal && (
            <AddTeacherModal
              isOpen={isOpenModal}
              pageName="Create Teacher"
              toggle={() => _toggleModal()}
              getAllTeacherAPiCall={() => _getAllTeacherAPiCall()}
            />
          )}
        </>
      )}
    </>
  );
}

export default Teachers;
