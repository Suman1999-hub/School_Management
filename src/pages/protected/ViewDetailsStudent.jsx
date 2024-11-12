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
import {
  ActivateDeactivate,
  getStudentdetails,
  getTeacherdetails,
} from "../../http/http-calls";
import { Link, useParams } from "react-router-dom";
import { dateFormat, getAddressFormate } from "../../helper-methods";
import AddTeacherModal from "../../components/modals/AddTeacherModal";
import AddStudentModal from "../../components/modals/AddSudentModal";
import { useSelector } from "react-redux";

function ViewDetailsStudent() {
  const [studentData, setStudentData] = useState(null);
  const [isActive, setIsActive] = useState(null);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const loginType = useSelector(state => state.userCredential.user.loginType)
  console.log("loginType>>>>", loginType);
  
  const { id } = useParams();

  const _getStudentAPICall = async () => {
    try {
      const Response = await getStudentdetails({ id });
      console.log("Response", Response);

      setStudentData(Response?.student);
      setIsActive(Response?.student?.isActive || false);
    } catch (error) {
      console.error("Error fetching student details:", error);
    }
  };

    const _AactivateDeactivateApiCall = async () => {
      const payload = { flag: isActive };
      try {
        await ActivateDeactivate({ payload, id });
        console.log(id, payload);

        _getStudentAPICall();
      } catch (err) {
        console.error("Error activating/deactivating teacher:", err);
      }
    };

    const handleChangeActiveDeactive = (event) => {
      const newStatus = event.target.value === "true";
      setIsActive(newStatus);
      _AactivateDeactivateApiCall();
    };

  const _toggleEditModal = (isOpenModal = false) => {
    setIsOpenEditModal(isOpenModal);
  };

  useEffect(() => {
    _getStudentAPICall();
  }, []);

  return (
    <div>
      <Card style={{ maxWidth: "50rem", margin: "auto", marginTop: "10px" }}>
        <CardBody>
          <div className="innerHeader">
            <h2>Student</h2>
            <div style={{ display: "flex" }}>
              <div>
                <Input
                  type="select"
                  style={{ maxHeight: "35px", marginTop: "10px" }}
                  value={isActive}
                    onChange={handleChangeActiveDeactive}
                >
                  <option value="true">Active</option>
                  <option value="false">Deactivate</option>
                </Input>
              </div>
              <div>
                <Button color="link" onClick={() => _toggleEditModal(true)}>


                  { loginType !== "teacher" &&
                  <img
                  src={require("../../assets/img/edit.png")}
                  alt=""
                  width="20px"
                  className="float-end"
                />
                  }


                  
                </Button>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            {studentData?.profileImage ? (
              <img
                src={studentData?._school?.imageUrl}
                alt="Profile"
                width="100px"
                style={{
                  border: "2px solid aqua",
                  borderRadius: "10%",
                }}
              />
            ) : (
              <img
                src={require("../../assets/img/SidebarMenu/user .png")}
                alt="Default User"
                width="100px"
                style={{
                  border: "2px solid aqua",
                  borderRadius: "50%",
                }}
              />
            )}
          </div>

          <CardTitle className="text-center" tag="h5">
            {studentData?.fullName}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted text-center" tag="h6">
            <img
              src={require("../../assets/img/location.png")}
              width="30px"
              alt="Location"
            />
            <span>
              {getAddressFormate(
                studentData?.address?.city || "-",
                studentData?.address?.state || "-",
                studentData?.address?.country || "-",
                studentData?.address?.pin || "-"
              )}
            </span>
          </CardSubtitle>
          <CardText>
            <Row className="mt-3">
              <Col md="6">
                <Label style={{ fontWeight: "bold" }}>First Name</Label>
                <div>{studentData?.firstName || "-"}</div>
              </Col>
              <Col md="6">
                <Label style={{ fontWeight: "bold" }}>Last Name</Label>
                <div>{studentData?.lastName || "-"}</div>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md="6">
                <Label style={{ fontWeight: "bold" }}>Father's Name</Label>
                <div>{studentData?.guardian?.fathersName || "-"}</div>
              </Col>
              <Col md="6">
                <Label style={{ fontWeight: "bold" }}>Mother's Name</Label>
                <div>{studentData?.guardian?.mothersName || "-"}</div>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md="6">
                <Label style={{ fontWeight: "bold" }}>Roll No</Label>
                <div>{studentData?.rollNo || "-"}</div>
              </Col>
              <Col md="6">
                <Label style={{ fontWeight: "bold" }}>Gender</Label>
                <div>{studentData?.gender || "-"}</div>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md="6">
                <Label style={{ fontWeight: "bold" }}>Class</Label>
                <div>{studentData?._class?.name || "-"}</div>
              </Col>
              <Col md="6">
                <Label style={{ fontWeight: "bold" }}>Section</Label>
                <div>{studentData?._class?.section || "-"}</div>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md="6">
                <Label style={{ fontWeight: "bold" }}>Email</Label>
                <div>{studentData?.email || "-"}</div>
              </Col>
              <Col md="6">
                <Label style={{ fontWeight: "bold" }}>Phone Number</Label>
                <div>{studentData?.phone || "-"}</div>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md="6">
                <Label style={{ fontWeight: "bold" }}>Date Of Birth</Label>
                <div>
                  {studentData?.dob ? dateFormat(studentData?.dob) : "-"}
                </div>
              </Col>
              <Col md="6">
                <Label style={{ fontWeight: "bold" }}>Date of Joining</Label>
                <div>
                  {studentData?.joinDate
                    ? dateFormat(studentData?.joinDate)
                    : "-"}
                </div>
              </Col>
            </Row>
            
          </CardText>
        </CardBody>
      </Card>
      {isOpenEditModal && (
        <AddStudentModal
          isOpen={isOpenEditModal}
          pageName="Edit Student"
          toggle={() => _toggleEditModal()}
          id={id}
          studentDetails={studentData}
          getStudentAPICall={_getStudentAPICall}
        />
      )}
    </div>
  );
}

export default ViewDetailsStudent;
