import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      beasts: data,
    };
  }
  handleSearch = () => {
    const filteredBeasts = data.filter((beast) => {
      return beast.title
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    this.setState({
      beasts: filteredBeasts,
    });
  };

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  render() {
    return (
      <main>
        <input
          type="text"
          placeholder="Search"
          onChange={this.handleChange}
          onKeyUp={this.handleSearch}
          style={{ marginBottom: "2rem", width: "30%" }}
        />
        <Row xs={1} md={3} className="g-4">
          {this.state.beasts.map((beast) => (
            <Col key={beast._id}>
              <HornedBeast
                id={beast._id}
                src={beast.image_url}
                alt={beast.title}
                title={beast.title}
                description={beast.description}
                keyword={beast.keyword}
                horns={beast.horns}
              />
            </Col>
          ))}
        </Row>
      </main>
    );
  }
}

export default Main;
