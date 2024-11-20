// HolidaysSettings.js
import React, { useState } from 'react';
import { Card, Button, Input, NavLink, TabPane, Table } from 'reactstrap';
import AddHolidayModal from '../../components/modals/AddHolidayModal';

const HolidaysSettings = ({ activeTab, tabId, title, onAddClick }) => {

    const [isModal2Open, setIsModal2Open] = useState(false);
    const _toggleModal2 = (isOpen, name) => {
      setIsModal2Open(isOpen);
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
                  <h2> List of Holidays</h2>

                  <div>
                    <Button
                      color="dark"
                      outline
                      onClick={() => _toggleModal2(true)}
                    >
                      <i className="fa fa-plus"></i>
                    </Button>
                  </div>
                </div>
              </Card>
            </section>
            <section>
              <Card body>
                <Table responsive style={{ textAlign: "center" }}>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Occasion</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Input
                          style={{
                            marginTop: "10px",

                            margin: "auto",
                            maxWidth: "300px",
                            textAlign: "center",
                          }}
                          type="date"
                          // onChange={(e) => handleInputChange(index, e)}
                        ></Input>
                      </td>
                      <td>
                        <Input
                          style={{
                            marginTop: "10px",

                            margin: "auto",
                            maxWidth: "300px",
                            textAlign: "center",
                          }}
                          type="text"
                          placeholder="Ocassion"
                          // onChange={(e) => handleInputChange(index, e)}
                        ></Input>
                      </td>
                      <td>
                        <Button
                          color="danger"
                          style={{ border: "none" }}
                          outline
                        >
                          <i className="fa fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Input
                          style={{

                            margin: "auto",
                            maxWidth: "300px",
                            textAlign: "center",
                          }}
                          type="date"
                          // onChange={(e) => handleInputChange(index, e)}
                        ></Input>
                      </td>
                      <td>
                        <Input
                          style={{

                            margin: "auto",
                            maxWidth: "300px",
                            textAlign: "center",
                          }}
                          type="text"
                          placeholder="Ocassion"
                          // onChange={(e) => handleInputChange(index, e)}
                        ></Input>
                      </td>
                      <td>
                        <Button
                          color="danger"
                          style={{ border: "none" }}
                          outline
                        >
                          <i className="fa fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  <Button color="primary">Save</Button>
                </div>

                {/* <PaginatedItems itemsPerPage={4} /> */}
              </Card>
              {isModal2Open && (
                <AddHolidayModal
                  isOpen={isModal2Open}
                  toggle={() => _toggleModal2()}
                  // fetchAllStudentData={() => fetchAllStudentData()}
                />
              )}
            </section>
    </TabPane>
  );
};

export default HolidaysSettings;
