// ScheduleSettings.js
import React from 'react';
import { Card, Button, Input, NavLink, TabPane, Table } from 'reactstrap';

const ScheduleSettings = ({ activeTab, tabId, title, onAddClick }) => {
  const contentStyles = {
    marginTop: "30px",
    maxWidth: "350px",
    textAlign: "center",
  };

  return (
    <TabPane tabId={tabId}>
      <section>
              <Card body>
                <NavLink
                  style={{ textAlign: "center" }}
                  className={activeTab === "4" ? "active" : ""}
                >
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Days</th>
                        <th>Start-Time</th>
                        <th>End-Time</th>
                        <th>Class Duration</th>
                        <th>Recess Time</th>
                        <th>Recess Duration</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <Input type="select">
                            <option hidden>Select</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                          </Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Input type="select">
                            <option hidden>Select</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                          </Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Input type="select">
                            <option hidden>Select</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                          </Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Input type="select">
                            <option hidden>Select</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                          </Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Input type="select">
                            <option hidden>Select</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                          </Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Input type="select">
                            <option hidden>Select</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                          </Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                        <td>
                          <Input></Input>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <Button color="primary">Save</Button>
                </NavLink>
              </Card>
            </section>
    </TabPane>
  );
};

export default ScheduleSettings;
