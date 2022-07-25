import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class HornedBeastCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: 0,
    };
  }

  handleFavorite = () => {
    this.setState({
      favorite: this.state.favorite + 1,
    });
  };

  render() {
    return (
      <Col>
        <Card style={{ margin: "0 auto" }}>
          <Card.Img
            variant="top"
            src={this.props.src}
            alt={this.props.alt}
            onClick={this.handleFavorite}
          />
          <Card.Body>
            <p>{this.props.id}</p>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <p>Keyword: {this.props.keyword}</p>
              <p>Horns: {this.props.horns}</p>
            </div>
            <span>Favorite: {this.state.favorite}</span>{" "}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeastCard;
