import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Spinner,
} from "reactstrap";
import { ApplyLeave, getAllLeaves } from "../../http/http-calls";
import moment from "moment";

function ApplyLeaveModal({ isOpen, toggle, getAllLeaves }) {
  const _closeModal = () => {
    toggle();
  };
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
  });
  const payload = {
    leaveType: formData.leaveType,
    startDate: moment(formData.startDate).format("DD/MM/YYYY"),
    endDate: moment(formData.endDate).format("DD/MM/YYYY"),
    reason: formData.reason,
  };
  const _ApplyLeaveApiCall = async () => {
    setLoading(true);
    try {
      const applyLeaveRes = await ApplyLeave(payload);
      if (!applyLeaveRes?.error) {
        getAllLeaves();

        toggle();
      }
      console.log(payload);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(formData);
  return (
    <div>
      <Modal
        isOpen={isOpen}
        toggle={() => _closeModal()}
        scrollable
        centered
        size="lg"
      >
        <ModalHeader>Leave</ModalHeader>
        <ModalBody>
          {/* Card Number */}

          <FormGroup style={{ minWidth: "350px" }}>
            <Label for="leaveType">Leave Type</Label>
            <Input
              id="leaveType"
              name="leaveType"
              type="select"
              value={formData.leaveType}
              onChange={handleInputChange}
            >
              <option value="">Select Leave Type</option>
              <option value="SL">SL</option>
              <option value="PL">PL</option>
              <option value="CL">CL</option>
            </Input>
          </FormGroup>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label for="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="endDate">End Date</Label>
                <Input
                  id="endDate"
                  name="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="reason">Leave Reasons</Label>
            <Input
              id="reason"
              name="reason"
              type="textarea"
              placeholder="Leave Reasons"
              value={formData.reason}
              onChange={handleInputChange}
            />
          </FormGroup>

          {/* <FormGroup check>
            <Input type="checkbox" /> <Label check>Is Half Day Leave?</Label>
          </FormGroup> */}
          <div className="inlineBtnWrapper">
            <Button
              color="danger"
              outline
              onClick={() => _closeModal()}
              disabled={loading}
            >
              Cancel
            </Button>

            <Button
              color="success"
              onClick={() => _ApplyLeaveApiCall()}
              style={{ marginLeft: "2%" }}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm">Loading...</Spinner>
                  <span style={{ color: "white" }}> Submit...</span>
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ApplyLeaveModal;
