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

function AllStudents() {
  const [allStudents, setAllStudents] = useState([]);
   
  const userID = useSelector((state) => state.userCredential.user.id);
  

    const fetchAllSchoolData = async () => {
      try {
        // console.log("userID", userID);
        const studentData = await findAllStudent();
        console.log("studentData>>>", studentData);
        setAllStudents(studentData);
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
          {/* <div className="formGroup">
            <Label>School</Label>
            <Input type="select">
              <option>All</option>
              <option>Kendriya Vidyalaya AFS Bagdogra</option>
              <option>DAV International School</option>
              <option>G D Goenka School</option>
              <option>Modi International School</option>
              <option>Army Public School, Delhi</option>
              <option>Delhi Public School, Sukna</option>
            </Input>
          </div> */}
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
              <tr>
                <td>Yash Agarwal</td>
                <td>VI</td>
                <td>A</td>
                <td>1</td>
                <td>Male</td>
                <td>mg road,saket,Delhi, 407614</td>
                <td>9004569812</td>
                <td>
                <CircularProgressbar
                  value="89"
                  text="89%"
                  className="success"
                  styles={buildStyles({
                    strokeLinecap: "round",
                  })}
                />
                </td>
                <td>
                    <div className="action">
                      <Button color="link">
                        <i className="fa fa-eye"></i>
                      </Button>
                    </div>
                  </td>
              </tr>

              <tr>
                <td>Aveek mehotra</td>
                <td>VII</td>
                <td>B</td>
                <td>12</td>
                <td>Male</td>
                <td>mg road,saket,Delhi, 407614</td>
                <td>9004569812</td>
                <td>
                <CircularProgressbar
                  value="79"
                  text="79%"
                  className="success"
                  styles={buildStyles({
                    strokeLinecap: "round",
                  })}
                />
                </td>
                <td>
                    <div className="action">
                      <Button color="link">
                        <i className="fa fa-eye"></i>
                      </Button>
                    </div>
                  </td>
              </tr>
              <tr>
                <td>Priti Agarwal</td>
                <td>VI</td>
                <td>C</td>
                <td>19</td>
                <td>Female</td>
                <td>mg road,Delhi, 407614</td>
                <td>8643668432</td>
                <td>
                <CircularProgressbar
                  value="93"
                  text="93%"
                  className="success"
                  styles={buildStyles({
                    strokeLinecap: "round",
                  })}
                />
                </td>
                <td>
                    <div className="action">
                      <Button color="link">
                        <i className="fa fa-eye"></i>
                      </Button>
                    </div>
                  </td>
              </tr>
              <tr>
                <td>Yash Agarwal</td>
                <td>VI</td>
                <td>B</td>
                <td>1</td>
                <td>Male</td>
                <td>mg road,saket,Delhi, 407614</td>
                <td>9004569812</td>
                <td>
                <CircularProgressbar
                  value="99"
                  text="99%"
                  className="success"
                  styles={buildStyles({
                    strokeLinecap: "round",
                  })}
                />
                </td>
                <td>
                    <div className="action">
                      <Button color="link">
                        <i className="fa fa-eye"></i>
                      </Button>
                    </div>
                  </td>
              </tr>
              <tr>
                <td>Abhishek Mehra</td>
                <td>V</td>
                <td>A</td>
                <td>17</td>
                <td>Male</td>
                <td>mg road,saket,Delhi, 407614</td>
                <td>9432669812</td>
                <td>
                <CircularProgressbar
                  value="64"
                  text="64%"
                  className="danger"
                  styles={buildStyles({
                    strokeLinecap: "round",
                  })}
                />
                </td>
                <td>
                    <div className="action">
                      <Button color="link">
                        <i className="fa fa-eye"></i>
                      </Button>
                    </div>
                  </td>
              </tr>
              <tr>
                <td>Trina Bose</td>
                <td>VIII</td>
                <td>C</td>
                <td>10</td>
                <td>Female</td>
                <td>sk road,Gurgaon, 407614</td>
                <td>9004512312</td>
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
                      <Button color="link">
                        <i className="fa fa-eye"></i>
                      </Button>
                    </div>
                  </td>
              </tr>
              {allStudents.map((curr) => {
                console.log(curr);
                return (
                  <>
                    <tr>
                      <td>
                        {curr.imageUrl ? (
                          <img src={curr.imageUrl} width="100px" />
                        ) : (
                          "null"
                        )}
                      </td>
                      <td>{curr.name}</td>
                      <td>
                        {getAddressFormate(
                          curr.address.city,
                          curr.address.state,
                          curr.address.country,
                          curr.address.pinCode
                        )}
                      </td>
                      <td>{curr.registrationNumber}</td>
                      {/* <td>
                      <div className="action">
                        <Button color="link">
                          <i className="fa fa-eye"></i>
                        </Button>
                      </div>
                    </td> */}
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>

          {/* pagination */}
          <PaginatedItems itemsPerPage={4} />
        </Card>
        { isOpenModal && <AddStudentModal isOpen={isOpenModal} toggle={() => _toggleModal()} /> }
      </div>
    </TabPane>
  );
}

export default AllStudents;
