import React, { useEffect, useState } from "react";
import { Button, FormGroup, Input, Label, Spinner } from "reactstrap";
import {
  createNoticeApi,
  getNoticedetails,
  updateNotice,
} from "../../http/http-calls";
import { Link, useNavigate, useParams } from "react-router-dom";
import TextEditor from "../../components/TextEditor";

function CreateNotice({ pageName }) {
  const [noticeData, setNoticeData] = useState(null);
  const [isLoadingBtn, setLoadingBtn] = useState(false);
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

  const handleEditorChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      description: value,
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
    setLoadingBtn(true);
    try {
      const createNoticeRes = await createNoticeApi(payload);
      if (!createNoticeRes.error) {
        navigate("/notice");
      }
      console.log("Notice created:", createNoticeRes);
    } catch (err) {
      console.error("Error creating notice:", err);
    } finally {
      setLoadingBtn(false);
    }
  };

  const _EditNoticeApiCall = async () => {
    setLoadingBtn(true);
    try {
      const updateNoticeRes = await updateNotice({ payload, id });
      if (!updateNoticeRes.error) {
        navigate(`/notice/${id}`);
      }
      console.log("Notice updated:", updateNoticeRes);
    } catch (err) {
      console.error("Error updating notice:", err);
    } finally {
      setLoadingBtn(false);
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
        <div>
          <Label for="description">Description</Label>
          <TextEditor
            content={formData.description}
            onChange={handleEditorChange}
            placeholder="Enter the description here..."
          />
        </div>
      </div>
      <div className="mt-4">
        {pageName === "Create Notice" ? (
          <>
            <Link to="/notice">
              <Button
                color="danger"
                outline
                style={{ marginRight: "2%" }}
                disabled={isLoadingBtn}
              >
                Back
              </Button>
            </Link>
            <Button
              color="success"
              onClick={_createNoticeApiCall}
              disabled={isLoadingBtn}
            >
              {isLoadingBtn ? (
                <>
                  <Spinner size="sm">Loading...</Spinner>
                  <span style={{ color: "white" }}> Create...</span>
                </>
              ) : (
                pageName
              )}
            </Button>
          </>
        ) : (
          <Button
            color="primary"
            onClick={_EditNoticeApiCall}
            disabled={isLoadingBtn}
          >
            {isLoadingBtn ? (
              <>
                <Spinner size="sm">Loading...</Spinner>
                <span style={{ color: "white" }}> Update...</span>
              </>
            ) : (
              pageName
            )}
          </Button>
        )}
      </div>
    </>
  );
}

export default CreateNotice;
