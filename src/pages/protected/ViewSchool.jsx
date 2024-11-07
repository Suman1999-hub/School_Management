import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { getSchoolDetail } from "../../http/http-calls";
import { getAddressFormate } from "../../helper-methods";

function ViewSchool() {
  const { id } = useParams();
  console.log("IDDDDD", id);
  const [schoolData, setSchoolData] = useState();
  const _getSchoolAPiCall = async () => {
    try {
      const getSchoolApi = await getSchoolDetail({ id });
      setSchoolData(getSchoolApi?.school);
      console.log(getSchoolApi);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    _getSchoolAPiCall();
  }, []);
  console.log(schoolData?.imageUrl);
  return (
    <>
      <Card
        style={{
          maxWidth: "50rem",
          margin: "auto",
        }}
      >
        <CardBody>
          <div>
            <h4 className="text-center">School</h4>

            {/* <img
              src={require("../../assets/img/edit.png")}
              alt=""
              width="20px"
              className="float-end"
            /> */}
          </div>
          <div style={{ textAlign: "center" }}>
            {schoolData?.imageUrl ? (
              <img
                src={schoolData.imageUrl}
                alt=""
                width="100px"
                style={{
                  border: "2px solid aqua",
                  borderRadius: "10%",
                }}
              />
            ) : (
              <img
                src={require("../../assets/img/Defaultschool.png")}
                alt=""
                width="100px"
                style={{
                  border: "2px solid aqua",
                  borderRadius: "50%",
                }}
              />
            )}
          </div>
          <CardTitle className="text-center" tag="h5">
            {schoolData?.name}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted text-center" tag="h6">
            <img
              src={require("../../assets/img/location.png")}
              width="30px"
              alt="location logo"
            />
            <span>
              {getAddressFormate(
                schoolData?.address?.city,
                schoolData?.address?.state,
                schoolData?.address?.country,
                schoolData?.address?.pinCode
              )}
            </span>
          </CardSubtitle>
          <CardText>
            <div>
              <h6>Principle Name: {schoolData?.principalName}</h6>
              <h6>Phone: {schoolData?.contact?.phoneNo}</h6>
              <h6>Email: {schoolData?.contact?.email}</h6>
              <h6>Website: {schoolData?.contact?.website}</h6>
            </div>
          </CardText>
        </CardBody>
      </Card>
      <Card
        style={{
          maxWidth: "50rem",
          margin: "auto",
          marginTop: "10px",
        }}
      >
        <CardBody>
          <div>
            <h4 className="text-center">Admin</h4>

            {/* <img
              src={require("../../assets/img/edit.png")}
              alt=""
              width="20px"
              className="float-end"
            /> */}
          </div>
          <div style={{ textAlign: "center" }}>
            {schoolData?.admin?.profileImage ? (
              <img
                src={schoolData?.admin?.profileImage}
                alt=""
                width="100px"
                style={{
                  border: "2px solid aqua",
                  borderRadius: "50%",
                }}
              />
            ) : (
              <img
                src={require("../../assets/img/SidebarMenu/user .png")}
                alt=""
                width="100px"
                style={{
                  border: "2px solid aqua",
                  borderRadius: "50%",
                }}
              />
            )}
          </div>
          <CardTitle className="text-center" tag="h5">
            {schoolData?.admin?.fullName}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted text-center" tag="h6">
            <img
              src={require("../../assets/img/location.png")}
              width="30px"
              alt="location logo"
            />
            <span>
              {getAddressFormate(
                schoolData?.admin?.address?.city,
                schoolData?.admin?.address?.state,
                schoolData?.admin?.address?.country,
                schoolData?.admin?.address?.pin
              )}
            </span>
          </CardSubtitle>
          <CardText>
            <div>
              <h6>Phone Number: {schoolData?.admin?.phone}</h6>
              <h6>Email: {schoolData?.admin?.email}</h6>
            </div>
          </CardText>
        </CardBody>
      </Card>
    </>
  );
}

export default ViewSchool;
