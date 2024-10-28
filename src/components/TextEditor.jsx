import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ align: [] }], // Alignment options
      [{ color: [] }, { background: [] }], // Text color and background color
      ["link", "image"], // Link and image options
    ],
  };

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "align",
    "color",
    "background",
    "link",
    "image",
  ];

  handleChange(value) {
    this.props.onChange(value);
  }

  render() {
    return (
      <>
        <div>
          <ReactQuill
            value={this.props.content || ""}
            onChange={this.handleChange}
            className="editor"
            modules={this.modules}
            formats={this.formats}
            placeholder={this.props.placeholder}
            style={{
              maxWidth: "70%",
              boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
            }}
          />
        </div>
      </>
    );
  }
}

// Define PropTypes for better validation
TextEditor.propTypes = {
  content: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

// Default props in case they are not provided
TextEditor.defaultProps = {
  content: "",
};

export default TextEditor;
