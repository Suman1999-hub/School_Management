import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardTitle,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Table,
  TabPane,
} from "reactstrap";
import PaginatedItems from "../../components/PaginatedItems";
import { getAddressFormate } from "../../helper-methods";
import AddStudentModal from "../../components/modals/AddSudentModal";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useSelector } from "react-redux";
import { findAllStudent,  getAvailableSettings } from "../../http/http-calls";
import { Link } from "react-router-dom";
import SpinnerLoading from "../../components/SpinnerLoading";

function AllStudents() {
  const [allStudents, setAllStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [availableClasses, setAvailableClasses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalItems, setTotalItems] = useState(); 
  const itemsPerPage = 10; 
  const [selectedFilter, setSelectedFilter] = useState({
    pageNo	: currentPage,
    skipLimit	: 10
  });
  console.log("selectedFilter>>", selectedFilter);

  const user = useSelector((state) => state.userCredential.user.loginType);
  const searchTimeoutRef = useRef(null); 
  useEffect(() => {
    fetchClasses();
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage); 
    setSelectedFilter(prevFilter => ({
      ...prevFilter,
      pageNo: newPage,
      academicYear : "2024-2025"
    }));
  };

  const fetchClasses = async () => {
    setIsLoading(true);

    try {
      const response = await getAvailableSettings();
      // console.log("response>>", response.settings.availableClasses);
      setAvailableClasses(response.settings.availableClasses);
    } catch (err) {
      // setError('Failed to load classes. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAllStudentData = async (payload) => {
    setIsLoading(true);
    // const payload = {
    //   pageNo	: currentPage,
    //   skipLimit	: 10

    // }

    try {
      console.log("payload>>>>", payload);
      const studentData = await findAllStudent(payload);
      // console.log("studentData>>>", studentData.students);
      setAllStudents(studentData.students);
      setTotalItems(studentData.totalStudents)
    } catch (err) {
      console.log("Error", err);
    } finally {
      setIsLoading(false);
    }
  };
  console.log("selectedFilter", selectedFilter);

  useEffect(() => {
    fetchAllStudentData(selectedFilter);
  }, [currentPage]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const _toggleModal = (isOpenModal = false) => {
    setIsOpenModal(isOpenModal);
  };

  const handleFilterChange = (event, field) => {
    const updatedFilter = { ...selectedFilter };
    const value = event.target.value;
  
    if (value === "") {
      delete updatedFilter[field];
    } else {
      updatedFilter[field] = value;
    }
  
    setSelectedFilter(updatedFilter);
     // Clear the previous timeout to prevent multiple rapid API calls
     if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Set a new timeout for the debouncing (e.g., 500ms delay)
    searchTimeoutRef.current = setTimeout(() => {
      fetchAllStudentData(updatedFilter);  // Trigger API call after delay
    }, 800);
  };
  

  // const ApplyFilter = () => {
  //   if (selectedFilter) {
  //     return allStudents.filter((element) => {
  //       const classMatch = selectedFilter.class
  //         ? element._class.name === selectedFilter.class
  //         : true;
  //       const sectionMatch = selectedFilter.section
  //         ? element._class.section === selectedFilter.section
  //         : true;
  //       return classMatch && sectionMatch;
  //     });
  //   }
  // };
  // const filteredStudents = ApplyFilter();

  return (
    <>
      {isLoading ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "auto",
          }}
        >
          <SpinnerLoading />
        </div>
      ) : (
        <TabPane tabId="1">
          {/* filter */}
          <div className="filterWrapper">
            <div className="filterIcon">
              <i className="fas fa-filter" />
            </div>

            <div className="filterForm">
              <div className="formGroup">
                <Label>Class</Label>
                <Input
                  type="select"
                  value={selectedFilter?.className || ""}
                  onChange={(e) => handleFilterChange(e, "className")}
                >
                  <option value="">All</option>
                  {availableClasses.map((classItem) => (
                    <option key={classItem.id} value={classItem.id}>
                      {classItem.grade}
                    </option>
                  ))}
                </Input>
              </div>
              <div className="formGroup">
                <Label>Section</Label>
                <Input
                  type="select"
                  value={selectedFilter?.section || ""}
                  onChange={(e) => handleFilterChange(e, "section")}
                >
                  <option value="">All</option>
                  {availableClasses.slice(0, 4).map((classItem, index) => (
                    <option key={classItem.id} value={classItem.id}>
                      {classItem.sections[index]}
                    </option>
                  ))}
                </Input>
              </div>

              {/* search */}
              <div className="formGroup searchbar">
                <Label>Search</Label>
                <InputGroup>
                  <Input placeholder="Search..." value={selectedFilter?.searchString || ""} onChange={(e) => handleFilterChange(e, "searchString")}/>
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroup>
              </div>
              {/* <div className="formGroup">
            <Label>Clear All Filters</Label>
            <InputGroup>
            <Button style={{height:"40px"}} color="primary" outline >Clear</Button>

            </InputGroup>

            </div> */}
            </div>
          </div>

          <div>
            <div className="innerHeader">
              <h2>Students</h2>
              {user === "admin" ? (
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
                    Add Student
                  </Button>
                </div>
              ) : (
                ""
              )}
            </div>

            <Card body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Roll no</th>
                    <th>Date of Birth</th>
                    <th>gender</th>
                    <th>Address</th>
                    <th>Mobile no.</th>
                    <th>View Details</th>
                  </tr>
                </thead>

                <tbody>
                  {allStudents.map((curr) => {
                    // console.log(curr);
                    return (
                      <>
                        <tr>
                          <td>
                            {curr.firstName || curr.lastName
                              ? curr.firstName + " " + curr.lastName
                              : ""}
                          </td>

                          <td>{curr._class.name ? curr._class.name : ""}</td>
                          <td>
                            {curr._class.section ? curr._class.section : ""}
                          </td>
                          <td>{curr.rollNo ? curr.rollNo : ""}</td>
                          <td>{curr.dob ? curr.dob : ""}</td>
                          <td>{curr.gender ? curr.gender : ""}</td>
                          <td>
                            {curr.address
                              ? getAddressFormate(
                                  curr.address.locality,
                                  curr.address.city,
                                  curr.address.state,
                                  curr.address.country,
                                  curr.address.pin
                                )
                              : ""}
                          </td>
                          <td>{curr.phone ? curr.phone : ""}</td>
                          {/* <td>
                          <CircularProgressbar
                            value="97"
                            text="97%"
                            className="success"
                            styles={buildStyles({
                              strokeLinecap: "round",
                            })}
                          />
                        </td> */}
                          <td>
                            <div className="action">
                              <Link to={`/student/${curr._id}`}>
                                <Button color="link">
                                  <i className="fa fa-eye"></i>
                                </Button>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>

              {/* pagination */}
              <PaginatedItems
                totalItems={totalItems}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
              />
            </Card>
           
            {isOpenModal && (
              <AddStudentModal
                isOpen={isOpenModal}
                pageName="Add Student"
                toggle={() => _toggleModal()}
                fetchAllStudentData={() => fetchAllStudentData()}
              />
            )}
          </div>
        </TabPane>
      )}
    </>
  );
}

export default AllStudents;
