import React from "react";
import Card from "react-bootstrap/Card";
import SelectedBeast from "./SelectedBeast";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: 0,
      beastID: this.props.id,
      beastSrc: this.props.src,
      beastAlt: this.props.alt,
      beastTitle: this.props.title,
      beastDescription: this.props.description,
      beastKeyword: this.props.keyword,
      beastHorns: this.props.horns,
    };
  }

  handleFavorite = () => {
    this.setState({
      favorite: this.state.favorite + 1,
    });
  };

  render() {
    return (
      <Card style={{ margin: "0 auto", width: "80%", height: "100%" }}>
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
          <p>Favorite: {this.state.favorite}</p>

          <SelectedBeast
            id={this.state.beastID}
            src={this.state.beastSrc}
            alt={this.state.beastAlt}
            title={this.state.beastTitle}
            description={this.state.beastDescription}
            keyword={this.state.beastKeyword}
            horns={this.state.beastHorns}
            favorite={this.state.favorite}
            handleFavorite={this.handleFavorite}
          />
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
