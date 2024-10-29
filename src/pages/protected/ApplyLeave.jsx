import React from "react";
import { Button, Card, FormGroup, Input, Label } from "reactstrap";

function ApplyLeave() {
  return (
    <>
      <Card style={{ maxWidth: "50%", margin: "auto", padding: "50px" }}>
        <h4 style={{ textAlign: "center" }}>Apply Leave</h4>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <FormGroup style={{ minWidth: "350px" }}>
            <Label for="exampleSelect">Leave Type</Label>
            <Input id="exampleSelect" name="select" type="select">
              <option>Select Leave Type</option>
              <option>SL</option>
              <option>PL</option>
              <option>CL</option>
            </Input>
          </FormGroup>
          <FormGroup style={{ minWidth: "350px" }}>
            <Label for="exampleSelect">Start Date</Label>
            <Input id="exampleSelect" name="date" type="date" />
          </FormGroup>
          <FormGroup style={{ minWidth: "400px" }}>
            <Label for="exampleSelect">End Date</Label>
            <Input id="exampleSelect" name="date" type="date" />
          </FormGroup>
        </div>

        <FormGroup>
          <Label for="exampleText">Leave Reasons</Label>
          <Input
            id="exampleText"
            name="text"
            type="textarea"
            placeholder="Leave Reasons"
          />
        </FormGroup>
        <div style={{ textAlign: "center" }}>
          <Button color="primary">Submit</Button>
        </div>
      </Card>
    </>
  );
}

export default ApplyLeave;
