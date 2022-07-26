import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Row xs={1} md={3} className="g-4">
          {data.map((beast) => (
            <Col>
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
