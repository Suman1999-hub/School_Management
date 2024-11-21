// ClassSettings.js
import React, { useState } from 'react';
import { Card, Button, Input, NavLink, TabPane, Table } from 'reactstrap';
import CreateAndEditClassModal from '../../components/modals/CreateAndEditClassModal';

const ClassSettings = ({ activeTab, tabId, title, onAddClick }) => {

  const [pageName, setPageName] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const _toggleModal = (isOpen, name) => {
      setIsModalOpen(isOpen);
      setPageName(name);
    };

  const contentStyles = {
    marginTop: "30px",
    maxWidth: "350px",
    textAlign: "center",
  };

  return (
    <TabPane tabId={tabId}>
      <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            ></div>
            <section>
              <Card body>
                <div className="innerHeader">
                  <h2>Classes</h2>

                  <div style={{ display: "flex" }}>
                    {/* <div>
                    <Button style={{margin:"2px"}} color="dark" outline onClick={() => _toggleModal2(true)}>
                     Promote 
                    </Button>
                  </div> */}

                    <div>
                      <Button
                        style={{ margin: "2px" }}
                        color="primary"
                        outline
                        onClick={() => _toggleModal(true, "Create Class")}
                      >
                        {/* <i className="fa fa-plus"></i> */}
                        Create Class
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </section>
            <section>
              <Card body>
                <Table responsive style={{ textAlign: "center" }}>
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Sections</th>
                      <th>Fees(INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>A, B, C, D</td>
                      <td>
                        <Input style={{ textAlign: "center" }}></Input>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>A, B, C, D</td>
                      <td>
                        <Input style={{ textAlign: "center" }}></Input>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div style={{ textAlign: "center", marginTop: "30px" }}>
                  <Button color="primary">Save</Button>
                </div>

                {/* <PaginatedItems itemsPerPage={4} /> */}
                {isModalOpen && (
                  <CreateAndEditClassModal
                    isOpen={isModalOpen}
                    pageName={pageName}
                    toggle={() => _toggleModal()}
                    // fetchAllStudentData={() => fetchAllStudentData()}
                  />
                )}
              </Card>
            </section>
    </TabPane>
  );
};

export default ClassSettings;
