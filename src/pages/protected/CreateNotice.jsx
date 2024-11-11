import React, { useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { createNoticeApi } from "../../http/http-calls";

function CreateNotice() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    noticeType: "",
    filename: "",
    file: null,
    url: "https://example.com/assembly_schedule.pdf",
  });

  const payload = {
    title: formData?.title,
    description: formData?.description,
    noticeType: formData?.noticeType,
    attachments: [
      {
        filename: formData?.file?.name,
        url: formData?.url,
      },
    ],
  };

  const _createNoticeApiCall = async () => {
    try {
      const createNoticeRes = await createNoticeApi(payload);
      console.log(createNoticeRes);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  return (
    <>
      <div>
        <h6>Create Notice</h6>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ minWidth: "400px" }}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                name="title"
                placeholder="Enter Title"
                type="text"
                value={formData.title}
                onChange={handleInputChange}
              />
            </FormGroup>
          </div>
          <div style={{ minWidth: "400px", marginLeft: "10px" }}>
            <FormGroup>
              <Label for="noticeType">Notice Type</Label>
              <Input
                name="noticeType"
                placeholder="Enter Notice Type"
                type="select"
                value={formData.noticeType}
                onChange={handleInputChange}
              >
                <option value="">Select Type</option>
                <option value="general">All</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
              </Input>
            </FormGroup>
          </div>
          <div style={{ maxWidth: "400px", marginLeft: "10px" }}>
            <FormGroup>
              <Label for="file">Attachment</Label>
              <Input
                id="file"
                name="file"
                type="file"
                style={{ maxHeight: "35px", marginTop: "5px" }}
                onChange={handleInputChange}
              />
            </FormGroup>
          </div>
        </div>
        <div style={{ maxWidth: "500px" }}>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              name="description"
              type="textarea"
              placeholder="Description"
              style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }}
              value={formData.description}
              onChange={handleInputChange}
            />
          </FormGroup>
        </div>
      </div>
      <div className="mt-4">
        <Button color="primary" onClick={() => _createNoticeApiCall(payload)}>
          Submit
        </Button>
      </div>
    </>
  );
}

export default CreateNotice;
