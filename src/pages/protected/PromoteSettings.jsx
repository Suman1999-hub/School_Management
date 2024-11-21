// PromoteSettings.js
import React from 'react';
import { Card, Button, Input, NavLink, TabPane } from 'reactstrap';

const PromoteSettings = ({ activeTab, tabId, title, onAddClick }) => {
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
                  className={activeTab === "5" ? "active" : ""}
                >
                  Promote
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="select"
                    >
                      <option hidden>Select Class</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="select"
                    >
                      <option hidden>Select Section</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                      <option>D</option>
                    </Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="select"
                    >
                      <option hidden>From Acedemic Year</option>
                      <option>2024-2025</option>
                      <option>2025-2026</option>
                      <option>2026-2027</option>
                      <option>2027-2028</option>
                      <option>2028-2029</option>
                      <option>2029-2030</option>
                    </Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="select"
                    >
                      <option hidden>To Acedemic Year</option>
                      <option>2024-2025</option>
                      <option>2025-2026</option>
                      <option>2026-2027</option>
                      <option>2027-2028</option>
                      <option>2028-2029</option>
                      <option>2029-2030</option>
                    </Input>
                  </div>
                  <Button
                    style={{ marginTop: "30px", textAlign: "center" }}
                    color="primary"
                  >
                    Promote Class
                  </Button>
                </NavLink>
              </Card>
            </section>
    </TabPane>
  );
};

export default PromoteSettings;
