import React, { useEffect, useState } from "react";
import { Button, Card, CardTitle, Table, Spinner } from "reactstrap";
import PaginatedItems from "../../components/PaginatedItems";
import { findAllSchool, getSchoolDetail } from "../../http/http-calls";
import { getAddressFormate } from "../../helper-methods";
import CreateSchoolModal from "../../components/modals/CreateSchoolModal";
import { Link } from "react-router-dom";
import SpinnerLoading from "../../components/SpinnerLoading";

function ViewAllSchool() {
  const [allSchool, setAllSchool] = useState([]);
  const [totalSchools, setTotalSchools] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchAllSchoolData = async (currentPage, itemsPerPage) => {
    const payload = {
      pageNumber: currentPage,
      pageSize: itemsPerPage,
    };

    setIsLoading(true);

    try {
      const schoolData = await findAllSchool(payload);
      setAllSchool(schoolData.school);
      setTotalSchools(schoolData.totalSchools);
    } catch (err) {
      console.log("All School Error", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllSchoolData(currentPage, itemsPerPage);
  }, [currentPage, itemsPerPage]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const _toggleModal = (isOpenModal = false) => {
    setIsOpenModal(isOpenModal);
  };

  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenEditModalIndex, setIsOpenEditModalIndex] = useState();
  const _toggleEditModal = (isOpenModal = false, index) => {
    console.log(index);
    setIsOpenEditModal(isOpenModal);
    setIsOpenEditModalIndex(index);
  };

  // Pagination handlers
  const handlePageChange = async (page) => {
    setCurrentPage(page);
    await fetchAllSchoolData(page, itemsPerPage);
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
            textAlign: "center",
            marginTop: "auto",
          }}
        >
          <SpinnerLoading />
        </div>
      ) : (
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
                {currentItems?.map((curr, index) => (
                  <tr key={curr._id}>
                    <td>
                      {curr.imageUrl ? (
                        <img
                          src={curr.imageUrl}
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
                      <Link to={`/school/${curr._id}`}>
                        <span>{curr.name}</span>
                      </Link>
                    </td>
                    <td>
                      <img
                        src={require("../../assets/img/location.png")}
                        width="30px"
                        alt="location logo"
                      />
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
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Pagination */}
            <PaginatedItems
              items={allSchool}
              totalItems={totalSchools}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              onItemsChange={(items) => handleItemsChange(items)}
              onPageChange={handlePageChange}
            />
          </Card>

          {isOpenModal && (
            <CreateSchoolModal
              isOpen={isOpenModal}
              pageName="Create School"
              data="null"
              index="null"
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              fetchAllSchoolData={fetchAllSchoolData}
              toggle={() => _toggleModal()}
            />
          )}
          {isOpenEditModal && (
            <CreateSchoolModal
              isOpen={isOpenEditModal}
              pageName="Edit School"
              data={allSchool}
              index={isOpenEditModalIndex}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              toggle={() => _toggleEditModal()}
              fetchAllSchoolData={fetchAllSchoolData}
            />
          )}
        </div>
      )}
    </>
  );
}

export default ViewAllSchool;
