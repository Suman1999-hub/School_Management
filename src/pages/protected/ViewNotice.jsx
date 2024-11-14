import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, CardSubtitle } from "reactstrap";
import { getNoticedetails } from "../../http/http-calls";
import { useSelector } from "react-redux";

function ViewNotice() {
  const { id } = useParams();
  const [noticeData, setNoticeData] = useState();
  console.log(noticeData?.attachments?.[0]?.filename);
  console.log(id);
  const UserloginType = useSelector(
    (state) => state.userCredential.user.loginType
  );
  const _getNoticeById = async () => {
    try {
      const getNoticeByIdRes = await getNoticedetails({ id });
      setNoticeData(getNoticeByIdRes.notice);
      console.log(getNoticeByIdRes);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    _getNoticeById();
  }, []);
  return (
    <>
      <div className="innerHeader">
        <h1>View Notice</h1>

        {UserloginType === "admin" ? (
          <Link to={`/notice/${id}/edit`}>
            <Button color="primary">Edit</Button>{" "}
          </Link>
        ) : (
          ""
        )}
      </div>
      <Card style={{ padding: "10%" }}>
        <CardSubtitle>
          <h4 style={{ textAlign: "center" }}>{noticeData?.title}</h4>
        </CardSubtitle>
        <CardBody>
          <p>{noticeData?.description}</p>
          <div>
            {noticeData?.attachments?.length > 0 ? (
              <div>
                <p>Attachment:</p>
                <a href={noticeData?.attachments?.[0]?.url}>
                  {noticeData?.attachments?.[0]?.filename}
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        </CardBody>
        <CardFooter>Thank You</CardFooter>
      </Card>
    </>
  );
}

export default ViewNotice;
