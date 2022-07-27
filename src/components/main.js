import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      beasts: data,
    };
  }
  handleSearch = (e) => {
    e.preventDefault();

    const filteredBeasts = data.filter((beast) => {
      if (Number(this.state.search) === 0) return data;
      else return beast.horns === Number(this.state.search);
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
        <Form
          onSubmit={this.handleSearch}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Form.Group
            style={{
              width: "50%",
            }}
            className="mb-3"
          >
            <Form.Label htmlFor="selectSearch">
              Search by number of horns
            </Form.Label>
            <Form.Select id="selectSearch" onChange={this.handleChange}>
              <option value="0">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
          </Form.Group>

          <Button
            style={{
              width: "25%",
              marginBottom: "3rem",
            }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>

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
