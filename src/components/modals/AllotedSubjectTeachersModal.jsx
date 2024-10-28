import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Row,
  Col,
  Input,
} from "reactstrap";
import stateData from "../../State.json";
import { createSchool } from "../../http/http-calls";

const AllotedSubjectTeachersModal = ({ isOpen, toggle }) => {
  const _closeModal = () => {
    toggle();
  };

  const [Data, setData] = useState({
    English: "Kavita Kumari",
    Hindi: "Suman Rana",
    Maths: " Ririk Sahoo",
    Science: "Mrinal Bera",
    Games: "Yash Agrawal",
    Computer: "Preeti Pathak",
    History: "Harsh Roy",
    Economics: "Smriti Mandal",
  });
  // const payload = {
  //   name: Data.schoolName,
  //   schoolAddress: {
  //     city: Data.city,
  //     state: Data.state,
  //     country: Data.country,
  //     pinCode: Data.pinCode,
  //   },
  //   contact: {
  //     phoneNo: "24355465665",
  //     email: "jhdsg@gmail.com",
  //     website: "www.hcjss.com",
  //   },
  //   location: {
  //     type: "Point",
  //     coordinates: [73.323, 88.323],
  //   },
  //   email: Data.email,
  //   firstName: Data.firstName,
  //   lastName: Data.lastName,
  //   dob: Data.DOB,
  //   gender: Data.gender,
  //   phone: Data.phoneNumber,
  // };
  // const _createSchoolAPiCall = async (payload) => {
  //   try {
  //     const createSchoolApi = await createSchool(payload);
  //     console.log(createSchoolApi);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // Handle form input changes
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  return (
    <Modal
      isOpen={isOpen}
      toggle={() => _closeModal()}
      scrollable
      centered
      style={{ maxWidth: "600px" }}
    >
      <ModalHeader>Subjects & Alloted Teachers</ModalHeader>
      <ModalBody>
        {/* Card Number */}

        <Row>
          <Col md="6">
            <FormGroup>
              <Label><strong>Subject</strong></Label>
              <Input readOnly value={"English"} />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label><strong>Alloted Teacher</strong></Label>
              <Input readOnly value={Data.English} />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input readOnly value={"Hindi"} />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Input readOnly value={Data.Hindi} />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input readOnly value={"Maths"} />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Input readOnly value={Data.Maths} />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input readOnly value={"Science"} />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Input readOnly value={Data.Science} />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input readOnly value={"Games"} />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Input readOnly value={Data.Games} />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input readOnly value={"Computer"} />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Input readOnly value={Data.Computer} />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input readOnly value={"History"} />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Input readOnly value={Data.History} />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input readOnly value={"Economics"} />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Input readOnly value={Data.Economics} />
            </FormGroup>
          </Col>
        </Row>

        {/* submit button */}
        <div className="inlineBtnWrapper">
          <Button color="primary" outline onClick={() => _closeModal()}>
            Close
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default AllotedSubjectTeachersModal;
