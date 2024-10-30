import React, { useEffect, useState } from "react";
import { Button, Card, CardTitle, Table } from "reactstrap";
import PaginatedItems from "../../components/PaginatedItems";
import { findAllSchool } from "../../http/http-calls";
import { getAddressFormate } from "../../helper-methods";
import CreateSchoolModal from "../../components/modals/CreateSchoolModal";

function ViewAllSchool() {
  const [allSchool, setAllSchool] = useState([]);
  const fetchAllSchoolData = async () => {
    try {
      const schoolData = await findAllSchool();
      console.log("school>>>", schoolData.school);
      setAllSchool(schoolData.school);
    } catch (err) {
      console.log("All School Error", err);
    }
  };
  console.log("allschool", allSchool);
  useEffect(() => {
    fetchAllSchoolData();
  }, []);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const _toggleModal = (isOpenModal = false) => {
    setIsOpenModal(isOpenModal);
  };

  return (
    <div>
      <div className="innerHeader">
        <h2>List Of School</h2>
        <div>
          <Button color="primary" onClick={() => _toggleModal(true)}>
            Create School
          </Button>
        </div>
      </div>
      <Card body>
        <CardTitle>Schools</CardTitle>

        <Table responsive>
          <thead>
            <tr>
              <th>Logo</th>
              <th>School Name</th>
              <th>Location</th>
              <th>Registration Number</th>
              <th>View</th>
            </tr>
          </thead>

          <tbody>
            {allSchool.map((curr) => {
              console.log(curr);
              return (
                <>
                  <tr>
                    <td>
                      {curr.imageUrl ? (
                        <img src={curr.imageUrl} width="100px" alt="" />
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
                    <td>
                      <div className="action">
                        <Button color="link">
                          <img
                            src={require("../../assets/img/edit.png")}
                            alt=""
                            width="20px"
                          />
                        </Button>
                        <Button color="link">
                          <i className="fa fa-eye"></i>
                        </Button>
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
        <CreateSchoolModal isOpen={isOpenModal} toggle={() => _toggleModal()} />
      )}
    </div>
  );
}

export default ViewAllSchool;
