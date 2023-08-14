import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
export const NewQuizModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Enter Quiz Name</Modal.Title>
            </Modal.Header>
            <Modal.Body></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Create Quiz
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
