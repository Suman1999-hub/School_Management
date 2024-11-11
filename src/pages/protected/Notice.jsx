import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Table,
  TabPane,
} from "reactstrap";
import CustomDateRangePicker from "../../components/CustomDateRangePicker";
import TextEditor from "../../components/TextEditor";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllNotices } from "../../http/http-calls";
import { formatDatell } from "../../helper-methods";

function Notice() {
  const [filters, setFilters] = useState({
    dateRange: {
      startDate: null,
      endDate: null,
    },
  });
  const [allNotice, setAllNotice] = useState();

  const UserloginType = useSelector(
    (state) => state.userCredential.user.loginType
  );

  const _onDatesChange = (startDate = null, endDate = null) => {
    const newFilters = { ...filters };

    newFilters["dateRange"] = {
      startDate,
      endDate,
    };
    setFilters(newFilters);
  };

  const _getAllNotice = async () => {
    let payload = {};
    if (UserloginType === "teacher") {
      payload = {
        type: "teacher",
      };
    } else if (UserloginType === "student") {
      payload = {
        type: "student",
      };
    }
    try {
      const allNoticeRes = await getAllNotices(payload);
      console.log(allNoticeRes.notices);
      setAllNotice(allNoticeRes.notices);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(allNotice);
  useEffect(() => {
    _getAllNotice();
  }, []);
  return (
    <>
      {UserloginType === "admin" ? (
        <div className="innerHeader">
          <h2> </h2>
          <Link to="/notice/createnotice">
            <Button color="primary">Create Notice</Button>
          </Link>
        </div>
      ) : (
        ""
      )}

      <TabPane tabId="1" className="mt-5">
        {/* filter */}
        <div className="filterWrapper">
          <div className="filterIcon">
            <i className="fas fa-filter" />
          </div>

          <div className="filterForm">
            <div className="formGroup">
              <Label>Notice Date</Label>
              <CustomDateRangePicker
                startDate={filters.dateRange.startDate}
                endDate={filters.dateRange.endDate}
                startDateId={"startDate_kpi_dashboard"}
                endDateId={`endDate_kpi_dashboard`}
                onDatesChange={(startDate, endDate) =>
                  _onDatesChange(startDate, endDate)
                }
              />
            </div>

            <div className="formGroup">
              <Label>Notice Type</Label>
              <Input type="select">
                <option>All</option>
                <option>Basic Subscription</option>
                <option>Premium Subscription</option>
              </Input>
            </div>

            {/* search */}
            <div className="formGroup searchbar">
              <Label>Search</Label>
              <InputGroup>
                <Input placeholder="Search..." />
                <InputGroupText>
                  <i className="fas fa-search" />
                </InputGroupText>
              </InputGroup>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <section>
          <h6>Notice</h6>
          <Card body>
            <Table responsive>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Notice Type</th>
                  <th>Date</th>
                  <th>Download</th>
                </tr>
              </thead>

              <tbody>
                {allNotice?.map((curr) => {
                  console.log(curr?.attachments?.[0]?.url);
                  return (
                    <tr>
                      <td>
                        <Link to={`/notice/${curr._id}`}>
                          {curr?.title ? curr?.title : "-"}
                        </Link>
                      </td>

                      <td>
                        {curr?.description?.length > 50
                          ? `${curr.description.substring(0, 50)}...`
                          : curr?.description}
                      </td>
                      <td>{curr?.noticeType ? curr?.noticeType : "-"}</td>

                      <td>
                        {curr?.postedDate
                          ? formatDatell(curr?.postedDate)
                          : "-"}
                      </td>
                      <td>
                        {curr?.attachments?.length > 0 ? (
                          <a href={curr?.attachments?.[0]?.url} download>
                            <img
                              src={require("../../assets/img/download.png")}
                              alt=""
                              width="20px"
                            />
                          </a>
                        ) : (
                          ""
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            {/* See More */}
            {/* <Button color="link" className="h-auto mb-2">
              See More <i className="fa fa-chevron-down"></i>
            </Button> */}
          </Card>
        </section>
      </TabPane>
    </>
  );
}

export default Notice;
