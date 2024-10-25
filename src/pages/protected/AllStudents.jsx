import React, { useEffect, useState } from "react";
import { Button, Card, CardTitle, Table } from "reactstrap";
import PaginatedItems from "../../components/PaginatedItems";
import { findAllSchool } from "../../http/http-calls";
import { getAddressFormate } from "../../helper-methods";
import AddStudentModal from "../../components/modals/AddSudentModal";

function AllStudents() {
  const [allStudents, setAllStudents] = useState([]);

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
    <div>
      <div className="innerHeader">
        <h2>List Of Students</h2>
        <div>
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
  );
}

export default AllStudents;
