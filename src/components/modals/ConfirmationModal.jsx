import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  FormGroup,
  Form,
} from "reactstrap";
function ConfirmationModal() {
  const [open, setOpen] = useState(false);
  const [focusAfterClose, setFocusAfterClose] = useState(true);

  const toggle = () => setOpen(!open);
  const handleSelectChange = ({ target: { value } }) => {
    setFocusAfterClose(JSON.parse(value));
  };
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Open
      </Button>

      <Modal returnFocusAfterClose={focusAfterClose} isOpen={open}>
        <ModalBody>Are You Sure?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" onClick={toggle}>
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ConfirmationModal;
