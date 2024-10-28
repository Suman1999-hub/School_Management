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
import { findAllSchool } from "../../http/http-calls";
import { getAddressFormate } from "../../helper-methods";
import AddStudentModal from "../../components/modals/AddSudentModal";
import CustomDateRangePicker from "../../components/CustomDateRangePicker";

function AllStudents() {
  const [allStudents, setAllStudents] = useState([]);
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
  //   const fetchAllSchoolData = async () => {
  //     try {
  //       const schoolData = await findAllSchool();
  //       console.log("school>>>", schoolData.school);
  //       setAllSchool(schoolData.school);
  //     } catch (err) {
  //       console.log("All School Error", err);
  //     }
  //   };

  //   console.log("allschool", allSchool);

  //   useEffect(() => {
  //     fetchAllSchoolData();
  //   }, []);

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
              Add Student
            </Button>
          </div>
        </div>

        <Card body>
          <CardTitle>Students</CardTitle>

          <Table responsive>
            <thead>
              <tr>
                <th>Username</th>
                <th>Roll no</th>
                <th>Name</th>
                <th>gender</th>
                <th>Class</th>
                <th>Section</th>
                <th>DOB</th>
                <th>School</th>
                <th>Joining Date</th>
                <th>Address</th>
                <th>Mobile no.</th>
                <th>email</th>
                <th>Attendence(%)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>abc123</td>
                <td>1</td>
                <td>Yash Agarwal</td>
                <td>Male</td>
                <td>VI</td>
                <td>B</td>
                <td>20/06/2001</td>
                <td>DAV international School</td>
                <td>12/08/2014</td>
                <td>mg road,saket,Delhi, 407614</td>
                <td>9004569812</td>
                <td>yashagarwal@gmail.com</td>
                <td>89%</td>
              </tr>

              <tr>
                <td>huy234</td>
                <td>12</td>
                <td>Aveek mehotra</td>
                <td>Male</td>
                <td>VII</td>
                <td>B</td>
                <td>31/03/2020</td>
                <td>DAV international School</td>
                <td>14/08/2004</td>
                <td>mg road,saket,Delhi, 407614</td>
                <td>9004569812</td>
                <td>yashagarwal@gmail.com</td>
                <td>79%</td>
              </tr>
              <tr>
                <td>qwe234</td>
                <td>19</td>
                <td>Priti Agarwal</td>
                <td>Female</td>
                <td>VI</td>
                <td>A</td>
                <td>20/06/2001</td>
                <td>DAV international School</td>
                <td>30/08/2017</td>
                <td>mg road,Delhi, 407614</td>
                <td>8643668432</td>
                <td>yashagarwal@gmail.com</td>
                <td>92%</td>
              </tr>
              <tr>
                <td>abc123</td>
                <td>1</td>
                <td>Yash Agarwal</td>
                <td>Male</td>
                <td>VI</td>
                <td>B</td>
                <td>20/06/2001</td>
                <td>DAV international School</td>
                <td>12/08/2014</td>
                <td>mg road,saket,Delhi, 407614</td>
                <td>9004569812</td>
                <td>yashagarwal@gmail.com</td>
                <td>89%</td>
              </tr>
              <tr>
                <td>kip123</td>
                <td>17</td>
                <td>Abhishek Mehra</td>
                <td>Male</td>
                <td>V</td>
                <td>A</td>
                <td>20/06/2001</td>
                <td>DAV international School</td>
                <td>06/08/2000</td>
                <td>mg road,saket,Delhi, 407614</td>
                <td>9432669812</td>
                <td>abhishekmehra@gmail.com</td>
                <td>76%</td>
              </tr>
              <tr>
                <td>usk123</td>
                <td>10</td>
                <td>Trina Bose</td>
                <td>Female</td>
                <td>VIII</td>
                <td>B</td>
                <td>26/09/2012</td>
                <td>DAV international School</td>
                <td>01/05/2011</td>
                <td>sk road,Gurgaon, 407614</td>
                <td>9004512312</td>
                <td>trinabose@gmail.com</td>
                <td>97%</td>
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

        <AddStudentModal isOpen={isOpenModal} toggle={() => _toggleModal()} />
      </div>
    </TabPane>
  );
}

export default AllStudents;
