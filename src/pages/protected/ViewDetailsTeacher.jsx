import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Input,
  Label,
  Row,
} from "reactstrap";
import { ActivateDeactivate, getTeacherdetails } from "../../http/http-calls";
import { Link, useParams } from "react-router-dom";
import { dateFormat, getAddressFormate } from "../../helper-methods";
import AddTeacherModal from "../../components/modals/AddTeacherModal";

function ViewDetailsTeacher() {
  const [teacherData, setTeacherData] = useState();
  const [isActive, setIsActive] = useState(null);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const { id } = useParams();

  const _getTeacherAPiCall = async () => {
    try {
      const getTeacherApiRes = await getTeacherdetails({ id });
      setTeacherData(getTeacherApiRes?.user);
      setIsActive(getTeacherApiRes?.user?.isActive ?? true);
      console.log("getTeacherApiRes", getTeacherApiRes.user);
    } catch (error) {
      console.log(error);
    }
  };

  const _AactivateDeactivateApiCall = async (data) => {
    const payload = {
      flag: data,
    };
    try {
      await ActivateDeactivate({
        payload,
        id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeActiveDeactive = (e) => {
    console.log(e.target.value);
    const newActiveStatus = e.target.value;
    if (newActiveStatus === false) {
    }
    setIsActive(newActiveStatus);
    console.log("isActive", isActive);
    _AactivateDeactivateApiCall(e.target.value);
  };

  const _toggleEditModal = (isOpenModal = false) => {
    setIsOpenEditModal(isOpenModal);
  };

  useEffect(() => {
    _getTeacherAPiCall();
  }, []);

  return (
    <div>
      <Card
        style={{
          maxWidth: "50rem",
          margin: "auto",
          marginTop: "10px",
        }}
      >
        <CardBody>
          <div className="innerHeader">
            <h2>Teacher</h2>
            <div style={{ display: "flex" }}>
              <div>
                <Input
                  type="select"
                  value={Boolean(isActive)}
                  style={{
                    maxHeight: "35px",
                    marginTop: "10px",
                  }}
                  onChange={handleChangeActiveDeactive}
                >
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </Input>
              </div>
              <div>
                <Button color="link" onClick={() => _toggleEditModal(true)}>
                  <img
                    src={require("../../assets/img/edit.png")}
                    alt=""
                    width="20px"
                    className="float-end"
                  />
                </Button>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            {teacherData?.profileImage ? (
              <img
                src={teacherData?.profileImage}
                alt=""
                width="100px"
                style={{
                  border: "2px solid aqua",
                  borderRadius: "10%",
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
            {teacherData?.fullName}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted text-center" tag="h6">
            <img
              src={require("../../assets/img/location.png")}
              width="30px"
              alt="location logo"
            />
            <span>
              {getAddressFormate(
                teacherData?.address?.city || "-",
                teacherData?.address?.state || "-",
                teacherData?.address?.country || "-",
                teacherData?.address?.pin || "-"
              )}
            </span>
          </CardSubtitle>
          <CardText>
            <Row>
              <Col md="6">
                <Label style={{ fontWeight: "bold" }}>Email</Label>
                <div>{teacherData?.email}</div>
              </Col>
              <Col md="6">
                <Label style={{ fontWeight: "bold" }}>Phone Number</Label>
                <div>{teacherData?.phone}</div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md="6">
                <Label style={{ fontWeight: "bold" }}>Date Of Birth</Label>
                <div>
                  {teacherData?.dob ? dateFormat(teacherData?.dob) : "-"}
                </div>
              </Col>
              <Col md="6">
                <Label style={{ fontWeight: "bold" }}>Date of Joining</Label>
                <div>
                  {teacherData?.joinDate
                    ? dateFormat(teacherData?.joinDate)
                    : "-"}
                </div>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md="6">
                <Label style={{ fontWeight: "bold" }}>Qualification</Label>
                <div>
                  {teacherData?.qualification
                    ? teacherData?.qualification
                    : "-"}
                </div>
              </Col>
              <Col md="6">
                <Label style={{ fontWeight: "bold" }}>Experience</Label>
                <div>
                  {teacherData?.experience ? teacherData?.experience : "-"}
                </div>
              </Col>
            </Row>
          </CardText>
        </CardBody>
      </Card>
      {isOpenEditModal && (
        <AddTeacherModal
          isOpen={isOpenEditModal}
          pageName="Edit Teacher"
          toggle={() => _toggleEditModal()}
          id={id}
          teacherDetails={teacherData}
          getTeacherAPiCall={_getTeacherAPiCall}
        />
      )}
    </div>
  );
}

export default ViewDetailsTeacher;
