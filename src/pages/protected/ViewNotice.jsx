import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle } from "reactstrap";
import { getNoticedetails } from "../../http/http-calls";
import { useSelector } from "react-redux";
import SpinnerLoading from "../../components/SpinnerLoading";

function ViewNotice() {
  const { id } = useParams();
  const [noticeData, setNoticeData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const UserloginType = useSelector(
    (state) => state.userCredential.user.loginType
  );
  const navigate = useNavigate();
  const _getNoticeById = async () => {
    setIsLoading(true);
    try {
      const getNoticeByIdRes = await getNoticedetails({ id });
      setNoticeData(getNoticeByIdRes.notice);
    } catch (err) {
      console.log("Error fetching notice:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    _getNoticeById();
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <SpinnerLoading />
        </div>
      ) : (
        <>
          <div className="innerHeader">
            {/* <Button outline style={{ height: "70px" }}> */}
            <img
              src={require("../../assets/img/previous.png")}
              alt=""
              width="60px"
              onClick={() => navigate(-1)}
            />
            {/* </Button> */}

            {/* Show "Edit" button if the user is an admin */}
            {UserloginType === "admin" && (
              <Link to={`/notice/${id}/edit`}>
                <Button color="primary">Edit</Button>
              </Link>
            )}
          </div>

          {/* Display the notice details */}
          <Card style={{ padding: "10%" }}>
            <CardSubtitle>
              <h4 style={{ textAlign: "center" }}>{noticeData?.title}</h4>
            </CardSubtitle>
            <CardBody>
              {/* Render formatted description content */}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    noticeData?.description ||
                    "<p>No description provided.</p>",
                }}
              ></div>

              {/* Check if there are any attachments */}
              {noticeData?.attachments?.length > 0 && (
                <div>
                  <p>Attachment:</p>
                  <a
                    href={noticeData?.attachments?.[0]?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {noticeData?.attachments?.[0]?.filename}
                  </a>
                </div>
              )}
            </CardBody>
          </Card>
        </>
      )}
    </>
  );
}

export default ViewNotice;
