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
import { findAllStudent } from "../../http/http-calls";
import { Link } from "react-router-dom";

function AllStudents() {
  const [allStudents, setAllStudents] = useState([]);

  const user = useSelector((state) => state.userCredential.user.loginType);

  const fetchAllSchoolData = async () => {
    try {
      // console.log("userID", userID);
      const studentData = await findAllStudent();
      console.log("studentData>>>", studentData.students);
      setAllStudents(studentData.students);
    } catch (err) {
      console.log("Error", err);
    }
  };

  console.log("allStudents", allStudents);

  useEffect(() => {
    fetchAllSchoolData();
  }, []);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const _toggleModal = (isOpenModal = false) => {
    setIsOpenModal(isOpenModal);
  };

  return (
    <TabPane tabId="1">
      {/* filter */}
      <div className="filterWrapper">
        <div className="filterIcon">
          <i className="fas fa-filter" />
        </div>

        <div className="filterForm">
          <div className="formGroup">
            <Label>Acedemic Year</Label>
            <Input type="select">
              <option>2024-2025</option>
              <option>2023-2024</option>
              <option>2022-2023</option>
              <option>2021-2022</option>
              <option>2020-2021</option>
              <option>2019-2020</option>
              <option>2018-2019</option>
              <option>2017-2018</option>
              <option>2016-2017</option>
              <option>2015-2016</option>
              <option>2014-2015</option>
              <option>2013-2014</option>
            </Input>
          </div>

          <div className="formGroup">
            <Label>Class</Label>
            <Input type="select">
              <option>All</option>
              <option>I</option>
              <option>II</option>
              <option>III</option>
              <option>IV</option>
              <option>V</option>
              <option>VI</option>
              <option>VII</option>
              <option>VIII</option>
              <option>IX</option>
              <option>X</option>
            </Input>
          </div>
          <div className="formGroup">
            <Label>Section</Label>
            <Input type="select">
              <option>All</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
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
                <th>gender</th>
                <th>Address</th>
                <th>Mobile no.</th>
                <th>Attendence(%)</th>
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
                      <td>
                        <CircularProgressbar
                          value="97"
                          text="97%"
                          className="success"
                          styles={buildStyles({
                            strokeLinecap: "round",
                          })}
                        />
                      </td>
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
      </div>
    </TabPane>
  );
}

export default AllStudents;
