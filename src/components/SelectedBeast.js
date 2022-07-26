import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          See Selected Beast
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "100%" }}
              src={this.props.src}
              alt={this.props.alt}
              onClick={this.props.handleFavorite}
            />
            <p style={{ textAlign: "center" }}>{this.props.description}</p>
            <p>Keyword: {this.props.keyword}</p>
            <p>Horns: {this.props.horns}</p>
            <p>Favorite: {this.props.favorite}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default SelectedBeast;
