import React, { useEffect, useState } from "react";
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
import { findAllStudent, getAvailableClasses } from "../../http/http-calls";
import { Link } from "react-router-dom";
import SpinnerLoading from "../../components/SpinnerLoading";

function AllStudents() {
  const [allStudents, setAllStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [availableClasses, setAvailableClasses] = useState([]);


  const user = useSelector((state) => state.userCredential.user.loginType);

  useEffect(() => {
      fetchClasses();
  }, []);

  const fetchClasses = async () => {
    setIsLoading(true);

    try {
      const response = await getAvailableClasses();
      console.log("response>>", response.settings.availableClasses);
      setAvailableClasses( response.settings.availableClasses)
    } catch (err) {
      // setError('Failed to load classes. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAllStudentData = async () => {
    setIsLoading(true);

    try {
      // console.log("userID", userID);
      const studentData = await findAllStudent();
      console.log("studentData>>>", studentData.students);
      setAllStudents(studentData.students);
    } catch (err) {
      console.log("Error", err);
    }finally {
      setIsLoading(false);
    }
  };

  console.log("allStudents", allStudents);

  useEffect(() => {
    fetchAllStudentData();
  }, []);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const _toggleModal = (isOpenModal = false) => {
    setIsOpenModal(isOpenModal);
  };

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
              <Input type="select">
              <option value="">
                   All
                  </option>
                  {availableClasses.map((classItem) => (
                    <option key={classItem.id} value={classItem.id}>
                      {classItem.grade}
                    </option>
                  ))}
              </Input>
            </div>
            <div className="formGroup">
              <Label>Section</Label>
              <Input type="select">
              <option value="" >
                    All
                  </option>
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
                <Input placeholder="Search..." />
                <InputGroupText>
                  <i className="fas fa-search" />
                </InputGroupText>
              </InputGroup>
            </div>
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
                  console.log(curr);
                  return (
                    <>
                      <tr>
                        <td>
                          {curr.firstName || curr.lastName
                            ? curr.firstName + " " + curr.lastName
                            : ""}
                        </td>
  
                        <td>{curr._class.name ? curr._class.name : ""}</td>
                        <td>{curr._class.section ? curr._class.section : ""}</td>
                        <td>{curr.rollNo ? curr.rollNo : ""}</td>
                        <td>{curr.dob ? curr.dob : "" }</td>
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
            <PaginatedItems itemsPerPage={4} />
          </Card>
          {isOpenModal && (
            <AddStudentModal isOpen={isOpenModal} toggle={() => _toggleModal()} />
          )}
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
