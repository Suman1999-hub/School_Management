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
import SpinnerLoading from "../../components/SpinnerLoading";

function ViewDetailsStudent() {
  const [studentData, setStudentData] = useState({});
  const [isActive, setIsActive] = useState(null);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [organizedStudentData, setOrganizedStudentData] = useState({});
  const loginType = useSelector((state) => state.userCredential.user.loginType);
  console.log("organizedStudentData>>>>", organizedStudentData);

  const { id } = useParams();

  const _getStudentAPICall = async () => {
    setIsLoading(true);

    try {
      const Response = await getStudentdetails({ id });
      console.log("Response", Response);

      setStudentData(Response?.student);
      setOrganizedStudentData({
        locality: Response?.student?.address?.locality || "",
        city: Response?.student?.address?.city || "",
        state: Response?.student?.address?.state || "",
        country: Response?.student?.address?.country || "",
        pin: Response?.student?.address?.pin || "",
        email: Response?.student?.email || "",
        firstName: Response?.student?.firstName || "",
        lastName: Response?.student?.lastName || "",
        dob: Response?.student?.dob || "",
        gender: Response?.student?.gender || "",
        section: Response?.student?._class?.section || "",
        class: Response?.student?._class?.name || "",
        phone: Response?.student?.phone || "",
        fathersName: Response?.student?.guardian?.fathersName || "",
        mothersName: Response?.student?.guardian?.mothersName || "",
        mothersOccupation: Response?.student?.guardian?.mothersOccupation || "",
        fathersOccupation: Response?.student?.guardian?.fathersOccupation || "",
        currentAcademicYear: Response?.student?.currentAcademicYear || "",
        joinDate: Response?.student?.joinDate || "",
        profileUrl: Response?.student?.profileImage || "",
        rollNo: Response?.student?.rollNo,
        username: Response?.student?.username || ""
      });
      setIsActive(Response?.student?.isActive || false);
    } catch (error) {
      console.error("Error fetching student details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const _AactivateDeactivateApiCall = async (newStatus) => {
    const payload = { flag: newStatus };
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
    console.log("newStatus>>>", newStatus);

    setIsActive(newStatus);
    _AactivateDeactivateApiCall(newStatus);
  };

  const _toggleEditModal = (isOpenModal = false) => {
    setIsOpenEditModal(isOpenModal);
  };

  const updateStudentData = (updatedData) => {
    setOrganizedStudentData(updatedData);
  };

  useEffect(() => {
    _getStudentAPICall();
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "auto",
          }}
        >
          <SpinnerLoading />
        </div>
      ) : (
        <div>
          <Card
            style={{ maxWidth: "50rem", margin: "auto", marginTop: "10px" }}
          >
            <CardBody>
              <div className="innerHeader">
                <h2>Student</h2>
                {loginType !== "teacher" && (
                  <div style={{ display: "flex" }}>
                    <div>
                      <Input
                        type="select"
                        style={{ maxHeight: "35px", marginTop: "10px" }}
                        value={isActive}
                        onChange={handleChangeActiveDeactive}
                      >
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                      </Input>
                    </div>
                    <div>
                      <Button
                        color="link"
                        onClick={() => _toggleEditModal(true)}
                      >
                        <img
                          src={require("../../assets/img/edit.png")}
                          alt=""
                          width="20px"
                          className="float-end"
                        />
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              <div style={{ textAlign: "center" }}>
                {studentData?.profileImage ? (
                  <img
                    src={organizedStudentData?.profileUrl}
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
                    <div>{organizedStudentData?.firstName || "-"}</div>
                  </Col>
                  <Col md="6">
                    <Label style={{ fontWeight: "bold" }}>Last Name</Label>
                    <div>{organizedStudentData?.lastName || "-"}</div>
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md="6">
                    <Label style={{ fontWeight: "bold" }}>Father's Name</Label>
                    <div>{organizedStudentData?.fathersName || "-"}</div>
                  </Col>
                  <Col md="6">
                    <Label style={{ fontWeight: "bold" }}>Mother's Name</Label>
                    <div>{organizedStudentData?.mothersName || "-"}</div>
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md="6">
                    <Label style={{ fontWeight: "bold" }}>
                      Father's Occupation
                    </Label>
                    <div>{organizedStudentData?.fathersOccupation || "-"}</div>
                  </Col>
                  <Col md="6">
                    <Label style={{ fontWeight: "bold" }}>
                      Mother's Occupation
                    </Label>
                    <div>{organizedStudentData?.mothersOccupation || "-"}</div>
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md="6">
                    <Label style={{ fontWeight: "bold" }}>Roll No</Label>
                    <div>{organizedStudentData?.rollNo || "-"}</div>
                  </Col>
                  <Col md="6">
                    <Label style={{ fontWeight: "bold" }}>Gender</Label>
                    <div>{organizedStudentData?.gender || "-"}</div>
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md="6">
                    <Label style={{ fontWeight: "bold" }}>Class</Label>
                    <div>{organizedStudentData?.class || "-"}</div>
                  </Col>
                  <Col md="6">
                    <Label style={{ fontWeight: "bold" }}>Section</Label>
                    <div>{organizedStudentData?.section || "-"}</div>
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md="6">
                    <Label style={{ fontWeight: "bold" }}>Academic-Year</Label>
                    <div>
                      {organizedStudentData?.currentAcademicYear || "-"}
                    </div>
                  </Col>
                  <Col md="6">
                    <Label style={{ fontWeight: "bold" }}>Username</Label>
                    <div>{organizedStudentData?.username || "-"}</div>
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md="6">
                    <Label style={{ fontWeight: "bold" }}>Email</Label>
                    <div>{organizedStudentData?.email || "-"}</div>
                  </Col>
                  <Col md="6">
                    <Label style={{ fontWeight: "bold" }}>Phone Number</Label>
                    <div>{organizedStudentData?.phone || "-"}</div>
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md="6">
                    <Label style={{ fontWeight: "bold" }}>Date Of Birth</Label>
                    <div>
                      {studentData?.dob ? dateFormat(studentData?.dob) : "-"}
                    </div>
                  </Col>
                  {/* <Col md="6">
                    <Label style={{ fontWeight: "bold" }}>
                      Date of Joining
                    </Label>
                    <div>
                      {studentData?.joinDate
                        ? dateFormat(studentData?.joinDate)
                        : "-"}
                    </div>
                  </Col> */}
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
              studentDetails={organizedStudentData}
              getStudentAPICall={_getStudentAPICall}
              updateStudentData={updateStudentData}
            />
          )}
        </div>
      )}
    </>
  );
}

export default ViewDetailsStudent;
