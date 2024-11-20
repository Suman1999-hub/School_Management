// LeaveSettings.js
import React, { useState } from "react";
import { Card, Button, Input, NavLink, TabPane, Table } from "reactstrap";
import AddHolidayModal from "../../components/modals/AddHolidayModal";

const LeaveSettings = ({ activeTab, tabId, title, onAddClick }) => {
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
            <h2> Leaves</h2>
          </div>
        </Card>
      </section>
      <section>
        <Card body>
          <div style={{textAlign:"center"}}>
          <Table responsive style={{ textAlign: "center" }}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Days</th>
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
                    type="select"
                    // onChange={(e) => handleInputChange(index, e)}
                  >
                    <option>SL</option>
                    <option>CL</option>
                    <option>PL</option>
                  </Input>
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
                    placeholder="No. of Days"
                    // onChange={(e) => handleInputChange(index, e)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <td>
                  <Input
                    style={{
                      marginTop: "10px",

                      margin: "auto",
                      maxWidth: "300px",
                      textAlign: "center",
                    }}
                    type="select"
                    // onChange={(e) => handleInputChange(index, e)}
                  >
                    <option>SL</option>
                    <option>CL</option>
                    <option>PL</option>
                  </Input>
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
                    placeholder="No. of Days"
                    // onChange={(e) => handleInputChange(index, e)}
                  ></Input>
                </td>
              </tr>
              <tr>
                <td>
                  <Input
                    style={{
                      marginTop: "10px",

                      margin: "auto",
                      maxWidth: "300px",
                      textAlign: "center",
                    }}
                    type="select"
                    // onChange={(e) => handleInputChange(index, e)}
                  >
                    <option>SL</option>
                    <option>CL</option>
                    <option>PL</option>
                  </Input>
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
                    placeholder="No. of Days"
                    // onChange={(e) => handleInputChange(index, e)}
                  ></Input>
                </td>
              </tr>
            </tbody>
          </Table>
          </div>
         
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

export default LeaveSettings;
