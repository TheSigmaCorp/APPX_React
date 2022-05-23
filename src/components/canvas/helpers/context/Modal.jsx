import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

const CustomModal = (props) => {
  const [show, setShow] = useState(false);
  const { elementType, position } = props;

  const handleClose = () => {
    console.log("Hide");
    setShow(false);
    props.onClose();
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleShow();
  }, [props]);

  return (
    <>
      <Modal show={show} onHide={handleClose} size="sm" backdropClassName="contentMenuBackdrop">
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>
    </>
  );
};

export default CustomModal;
