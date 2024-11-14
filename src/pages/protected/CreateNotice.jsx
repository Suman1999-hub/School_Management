import React, { useEffect, useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import {
  createNoticeApi,
  getNoticedetails,
  updateNotice,
} from "../../http/http-calls";
import { useNavigate, useParams } from "react-router-dom";

function CreateNotice({ pageName }) {
  const [noticeData, setNoticeData] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    noticeType: "",
    filename: "",
    file: null,
    url: "https://example.com/assembly_schedule.pdf",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const _getNoticeById = async () => {
        try {
          const getNoticeByIdRes = await getNoticedetails({ id });
          setNoticeData(getNoticeByIdRes.notice);
        } catch (err) {
          console.error("Error fetching notice details:", err);
        }
      };
      _getNoticeById();
    }
  }, [id]);

  useEffect(() => {
    if (noticeData) {
      setFormData({
        title: noticeData.title || "",
        description: noticeData.description || "",
        noticeType: noticeData.noticeType || "",
        filename: noticeData.attachments?.[0]?.filename || "",
        file: null,
        url: "https://example.com/assembly_schedule.pdf",
      });
    }
  }, [noticeData]);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const payload = {
    title: formData.title,
    description: formData.description,
    noticeType: formData.noticeType,
    attachments: [
      {
        filename: formData.file?.name || formData.filename,
        url: formData.url,
      },
    ],
  };

  const _createNoticeApiCall = async () => {
    try {
      const createNoticeRes = await createNoticeApi(payload);
      console.log("Notice created:", createNoticeRes);
    } catch (err) {
      console.error("Error creating notice:", err);
    }
  };

  const _EditNoticeApiCall = async () => {
    try {
      const updateNoticeRes = await updateNotice({ payload, id });
      if (!updateNoticeRes.error) {
        navigate(`/notice/${id}`);
      }
      console.log("Notice updated:", updateNoticeRes);
    } catch (err) {
      console.error("Error updating notice:", err);
    }
  };

  return (
    <>
      <div>
        <h6>{pageName}</h6>
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
              style={{
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                minHeight: "300px",
              }}
              value={formData.description}
              onChange={handleInputChange}
            />
          </FormGroup>
        </div>
      </div>
      <div className="mt-4">
        {pageName === "Create Notice" ? (
          <Button color="primary" onClick={_createNoticeApiCall}>
            {pageName}
          </Button>
        ) : (
          <Button color="primary" onClick={_EditNoticeApiCall}>
            {pageName}
          </Button>
        )}
      </div>
    </>
  );
}

export default CreateNotice;
