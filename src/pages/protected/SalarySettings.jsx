// SalarySettings.js
import React from 'react';
import { Card, Button, Input, NavLink, TabPane } from 'reactstrap';

const SalarySettings = ({ activeTab, tabId, title, onAddClick }) => {
  const contentStyles = {
    marginTop: "30px",
    maxWidth: "350px",
    textAlign: "center",
  };

  return (
    <TabPane tabId={tabId}>
      <section>
        <Card body>
          <NavLink style={{ textAlign: "center" }} className={activeTab === tabId ? "active" : ""}>
            <div className="innerHeader">
              <h2>{title}</h2>
              <div>
                <Button color="dark" outline onClick={onAddClick}>
                  <i className="fa fa-plus"></i>
                </Button>
              </div>
            </div>

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
                      <option hidden>Experience</option>
                      <option>Freshers</option>
                      <option>1- 2 yrs experience</option>
                      <option>2- 4 yrs experience</option>
                      <option>4- 6 yrs experience</option>
                      <option>Above 6 yrs experience</option>
                    </Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="number"
                      value={"10000"}
                    ></Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="select"
                    >
                      <option hidden>Experience</option>
                      <option>Freshers</option>
                      <option>1- 2 yrs experience</option>
                      <option>2- 4 yrs experience</option>
                      <option>4- 6 yrs experience</option>
                      <option>Above 6 yrs experience</option>
                    </Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="number"
                      value={"10000"}
                    ></Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="select"
                    >
                      <option hidden>Experience</option>
                      <option>Freshers</option>
                      <option>1- 2 yrs experience</option>
                      <option>2- 4 yrs experience</option>
                      <option>4- 6 yrs experience</option>
                      <option>Above 6 yrs experience</option>
                    </Input>

                    <Input
                      style={{
                        marginTop: "30px",
                        maxWidth: "350px",
                        textAlign: "center",
                      }}
                      type="number"
                      value={"10000"}
                    ></Input>

                    <Button style={{ marginTop: "30px" }} color="primary">
                      Save
                    </Button>
                  </div>
          </NavLink>
        </Card>
      </section>
    </TabPane>
  );
};

export default SalarySettings;
