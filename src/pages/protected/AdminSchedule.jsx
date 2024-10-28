import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardTitle,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Table,
  TabPane,
} from "reactstrap";
import { getAddressFormate } from "../../helper-methods";
import { useNavigate } from "react-router-dom";
import { DateRangePicker } from "react-dates";

function AdminSchedule() {
  const [schedule, setSchedule] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const _toggleModal = (isOpenModal = false) => {
    setIsOpenModal(isOpenModal);
  };

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

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/schedule/createschedule"); // Redirect to the About page
  };

  return (
    <TabPane tabId="1">
      <div>
        {/* <div className="innerHeader">
          <h2>Schedule</h2>
        </div> */}

        {/* filter */}
        <div className="filterWrapper">
          <div className="filterIcon">
            <i className="fas fa-filter" />
          </div>

          <div className="filterForm">
            <div className="formGroup">
              <Label>Days</Label>
              <Input type="select">
                <option>Select Day</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
              </Input>
            </div>
            <div className="formGroup">
              <Label>Date</Label>
              <Input type="date">
              </Input>
            </div>
          </div>
        </div>

        <div className="innerHeader">
          <h2>Schedule</h2>
          <div>
            <Button color="primary" onClick={handleClick}>
              Create Schedule
            </Button>
          </div>
        </div>

        <Card body>
          <Table responsive>
            <thead>
              <tr>
                <th>Classes</th>
                <th>1st period</th>
                <th>2nd period</th>
                <th>3rd period</th>
                <th>4th period</th>
                <th>
                  <strong>Recess</strong>
                </th>
                <th>5th period</th>
                <th>6th period</th>
                <th>7th period</th>
                <th>8th period</th>
              </tr>
              <tr>
                <th></th>
                <th>(8:00 - 8:30)</th>
                <th>(8:30 - 9:00)</th>
                <th>(9:00 - 9:30)</th>
                <th>(9:30 - 10:00)</th>
                <th>(10:00 - 10:30)</th>
                <th>(10:30 - 11:00)</th>
                <th>(11:00 - 11:30)</th>
                <th>(11:30 - 12:00)</th>
                <th>(12:00 - 12:30)</th>
              </tr>
              <tr>
                <th></th>
                <th>
                  <Input style={{ width: 185 }} type="select">
                    <option>Availavle Teachers</option>
                    <option>Suman Rana</option>
                    <option>Mrinal Bera</option>
                    <option>Ritik Sahoo</option>
                  </Input>
                </th>
                <th>
                  <Input style={{ width: 185 }} type="select">
                    <option>Availavle Teachers</option>
                    <option>Suman Rana</option>
                    <option>Mrinal Bera</option>
                    <option>Ritik Sahoo</option>
                  </Input>
                </th>
                <th>
                  <Input style={{ width: 185 }} type="select">
                    <option>Availavle Teachers</option>
                    <option>Suman Rana</option>
                    <option>Mrinal Bera</option>
                    <option>Ritik Sahoo</option>
                  </Input>
                </th>
                <th>
                  <Input style={{ width: 185 }} type="select">
                    <option>Availavle Teachers</option>
                    <option>Suman Rana</option>
                    <option>Mrinal Bera</option>
                    <option>Ritik Sahoo</option>
                  </Input>
                </th>
                <th></th>
                <th>
                  <Input style={{ width: 185 }} type="select">
                    <option>Availavle Teachers</option>
                    <option>Suman Rana</option>
                    <option>Mrinal Bera</option>
                    <option>Ritik Sahoo</option>
                  </Input>
                </th>
                <th>
                  <Input style={{ width: 185 }} type="select">
                    <option>Availavle Teachers</option>
                    <option>Suman Rana</option>
                    <option>Mrinal Bera</option>
                    <option>Ritik Sahoo</option>
                  </Input>
                </th>
                <th>
                  <Input style={{ width: 185 }} type="select">
                    <option>Availavle Teachers</option>
                    <option>Suman Rana</option>
                    <option>Mrinal Bera</option>
                    <option>Ritik Sahoo</option>
                  </Input>
                </th>
                <th>
                  <Input style={{ width: 185 }} type="select">
                    <option>Availavle Teachers</option>
                    <option>Suman Rana</option>
                    <option>Mrinal Bera</option>
                    <option>Ritik Sahoo</option>
                  </Input>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <strong>Class I A</strong>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>English</div>
                    <div>(Kavita Kumari)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Hindi</div>
                    <div>(Suman Rana)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Maths</div>
                    <div>(Ritik Sahoo)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Science</div>
                    <div>(Mrinal Bera)</div>
                  </div>
                </td>

                <td>-</td>

                <td>
                  <div className="scheduleDiv">
                    <div>Games</div>
                    <div>(Yash Agrawal)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Computer</div>
                    <div>(Preeti Pathak)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>History</div>
                    <div>(Harsh Roy)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Economics</div>
                    <div>(Smriti Mandal)</div>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Class I B</strong>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>English</div>
                    <div>(Kavita Kumari)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Hindi</div>
                    <div>(Suman Rana)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Maths</div>
                    <div>(Ritik Sahoo)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Science</div>
                    <div>(Mrinal Bera)</div>
                  </div>
                </td>

                <td>-</td>

                <td>
                  <div className="scheduleDiv">
                    <div>Games</div>
                    <div>(Yash Agrawal)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Computer</div>
                    <div>(Preeti Pathak)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>History</div>
                    <div>(Harsh Roy)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Economics</div>
                    <div>(Smriti Mandal)</div>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Class I C</strong>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>English</div>
                    <div>(Kavita Kumari)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Hindi</div>
                    <div>(Suman Rana)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Maths</div>
                    <div>(Ritik Sahoo)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Science</div>
                    <div>(Mrinal Bera)</div>
                  </div>
                </td>

                <td>-</td>

                <td>
                  <div className="scheduleDiv">
                    <div>Games</div>
                    <div>(Yash Agrawal)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Computer</div>
                    <div>(Preeti Pathak)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>History</div>
                    <div>(Harsh Roy)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Economics</div>
                    <div>(Smriti Mandal)</div>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Class II A</strong>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>English</div>
                    <div>(Kavita Kumari)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Hindi</div>
                    <div>(Suman Rana)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Maths</div>
                    <div>(Ritik Sahoo)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Science</div>
                    <div>(Mrinal Bera)</div>
                  </div>
                </td>

                <td>-</td>

                <td>
                  <div className="scheduleDiv">
                    <div>Games</div>
                    <div>(Yash Agrawal)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Computer</div>
                    <div>(Preeti Pathak)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>History</div>
                    <div>(Harsh Roy)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Economics</div>
                    <div>(Smriti Mandal)</div>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Class II B</strong>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>English</div>
                    <div>(Kavita Kumari)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Hindi</div>
                    <div>(Suman Rana)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Maths</div>
                    <div>(Ritik Sahoo)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Science</div>
                    <div>(Mrinal Bera)</div>
                  </div>
                </td>

                <td>-</td>

                <td>
                  <div className="scheduleDiv">
                    <div>Games</div>
                    <div>(Yash Agrawal)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Computer</div>
                    <div>(Preeti Pathak)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>History</div>
                    <div>(Harsh Roy)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Economics</div>
                    <div>(Smriti Mandal)</div>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Class II C</strong>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>English</div>
                    <div>(Kavita Kumari)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Hindi</div>
                    <div>(Suman Rana)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Maths</div>
                    <div>(Ritik Sahoo)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Science</div>
                    <div>(Mrinal Bera)</div>
                  </div>
                </td>

                <td>-</td>

                <td>
                  <div className="scheduleDiv">
                    <div>Games</div>
                    <div>(Yash Agrawal)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Computer</div>
                    <div>(Preeti Pathak)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>History</div>
                    <div>(Harsh Roy)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Economics</div>
                    <div>(Smriti Mandal)</div>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Class III A</strong>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>English</div>
                    <div>(Kavita Kumari)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Hindi</div>
                    <div>(Suman Rana)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Maths</div>
                    <div>(Ritik Sahoo)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Science</div>
                    <div>(Mrinal Bera)</div>
                  </div>
                </td>

                <td>-</td>

                <td>
                  <div className="scheduleDiv">
                    <div>Games</div>
                    <div>(Yash Agrawal)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Computer</div>
                    <div>(Preeti Pathak)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>History</div>
                    <div>(Harsh Roy)</div>
                  </div>
                </td>
                <td>
                  <div className="scheduleDiv">
                    <div>Economics</div>
                    <div>(Smriti Mandal)</div>
                  </div>
                </td>
              </tr>

              {schedule.map((curr) => {
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
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
          {/* See More */}
          <Button color="link" className="h-auto mb-2">
            See More <i className="fa fa-chevron-down"></i>
          </Button>
        </Card>
      </div>
    </TabPane>
  );
}

export default AdminSchedule;
