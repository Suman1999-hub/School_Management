import React, { useEffect, useState } from "react";
import { Button, Card, CardTitle, Table } from "reactstrap";
import PaginatedItems from "../../components/PaginatedItems";
import { findAllSchool, getSchoolDetail } from "../../http/http-calls";
import { getAddressFormate } from "../../helper-methods";
import CreateSchoolModal from "../../components/modals/CreateSchoolModal";
import { Link } from "react-router-dom";

function ViewAllSchool() {
  const [allSchool, setAllSchool] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);

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

  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenEditModalIndex, setIsOpenEditModalIndex] = useState();
  const _toggleEditModal = (isOpenModal = false, index) => {
    setIsOpenEditModal(isOpenModal);
    setIsOpenEditModalIndex(index);
  };

  const _getSchoolAPiCall = async (id) => {
    try {
      const getSchoolApi = await getSchoolDetail({ id });

      console.log(getSchoolApi);
    } catch (error) {
      console.log(error);
    }
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
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {allSchool.map((curr, index) => {
              // console.log(curr);
              return (
                <>
                  <tr>
                    <td>
                      {curr?.imageUrl ? (
                        <img
                          src={curr?.imageUrl}
                          width="50px"
                          height="50px"
                          alt=""
                        />
                      ) : (
                        <img
                          src={require("../../assets/img/Defaultschool.png")}
                          width="50px"
                          height="50px"
                          alt="default school logo"
                        />
                      )}
                    </td>

                    <td>
                      {" "}
                      <Link to={`/school/${curr?._id}`}>{curr?.name}</Link>
                    </td>

                    <td>
                      <img
                        src={require("../../assets/img/location.png")}
                        width="30px"
                        alt="location logo"
                      />
                      {getAddressFormate(
                        curr?.address.city,
                        curr?.address.state,
                        curr?.address.country,
                        curr?.address.pinCode
                      )}
                    </td>
                    <td>{curr?.registrationNumber}</td>
                    <td>
                      <div className="action">
                        <Button
                          color="link"
                          onClick={() => _toggleEditModal(true, index)}
                        >
                          <img
                            src={require("../../assets/img/edit.png")}
                            alt=""
                            width="20px"
                          />
                        </Button>
                        {/* <Link to={`/school/${curr?._id}`}>
                          <Button
                            color="link"
                            onClick={() => _getSchoolAPiCall(curr?._id)}
                          >
                            <i className="fa fa-eye"></i>
                          </Button>
                        </Link> */}
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
          // items={allSchool}
          itemsPerPage={5}
          // setCurrentItems={setCurrentItems}
        />
      </Card>

      {isOpenModal && (
        <CreateSchoolModal
          isOpen={isOpenModal}
          pageName="Create School"
          data="null"
          index="null"
          toggle={() => _toggleModal()}
        />
      )}
      {isOpenEditModal && (
        <CreateSchoolModal
          isOpen={isOpenEditModal}
          pageName="Edit School"
          data={allSchool}
          index={isOpenEditModalIndex}
          toggle={() => _toggleEditModal()}
          fetchAllSchoolData={fetchAllSchoolData}
        />
      )}
    </div>
  );
}

export default ViewAllSchool;
