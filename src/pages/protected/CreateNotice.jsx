import React from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import TextEditor from "../../components/TextEditor";

function CreateNotice() {
  return (
    <>
      <div>
        <h6>Create Notice</h6>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ minWidth: "400px" }}>
            <FormGroup>
              <Label for="exampleEmail">Title</Label>
              <Input name="Title" placeholder="Enter Title" type="text" />
            </FormGroup>
          </div>
          <div style={{ minWidth: "400px" }}>
            <FormGroup>
              <Label for="exampleEmail">Notice Type</Label>
              <Input
                name="notice type"
                placeholder="Enter Notice Type"
                type="select"
              >
                <option>Select Type</option>
                <option>All</option>
                <option>Student</option>
                <option> Teacher</option>
              </Input>
            </FormGroup>
          </div>
          <div style={{ maxWidth: "400px" }}>
            <FormGroup>
              <Label for="exampleFile">Attachment</Label>
              <Input id="exampleFile" name="file" type="file" />
            </FormGroup>
          </div>
        </div>
        <div style={{ maxWidth: "500px" }}>
          <FormGroup>
            <Label for="exampleEmail">Description</Label>
            <Input
              id="exampleText"
              name="text"
              type="textarea"
              placeholder="description"
              style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }}
            />
          </FormGroup>
        </div>

        <TextEditor />
      </div>
      <div className="mt-4">
        <Button color="primary">Submit</Button>
      </div>
    </>
  );
}

export default CreateNotice;
