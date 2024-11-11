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
} from "reactstrap";

function ApplyLeaveModal({ isOpen, toggle }) {
  const _closeModal = () => {
    toggle();
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        toggle={() => _closeModal()}
        scrollable
        centered
        size="lg"
      >
        <ModalHeader>Create School</ModalHeader>
        <ModalBody>
          {/* Card Number */}

          <FormGroup style={{ minWidth: "350px" }}>
            <Label for="exampleSelect">Leave Type</Label>
            <Input id="exampleSelect" name="select" type="select">
              <option>Select Leave Type</option>
              <option>SL</option>
              <option>PL</option>
              <option>CL</option>
            </Input>
          </FormGroup>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label for="exampleSelect">Start Date</Label>
                <Input id="exampleSelect" name="date" type="date" />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="exampleSelect">End Date</Label>
                <Input id="exampleSelect" name="date" type="date" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleText">Leave Reasons</Label>
            <Input
              id="exampleText"
              name="text"
              type="textarea"
              placeholder="Leave Reasons"
            />
          </FormGroup>

          <FormGroup check>
            <Input type="checkbox" /> <Label check>Is Half Day Leave?</Label>
          </FormGroup>
          <div className="inlineBtnWrapper">
            <Button color="primary" outline onClick={() => _closeModal()}>
              Cancel
            </Button>

            <Button color="primary">Submit</Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ApplyLeaveModal;
