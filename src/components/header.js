import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      color: "white",
      borderRadius: "1rem",
    };
  }

  handleColor = () => {
    this.setState({
      backgroundColor:
        this.state.backgroundColor === "black" ? "white" : "black",
      color: this.state.color === "white" ? "black" : "white",
      borderRadius: this.state.borderRadius === "1rem" ? "0" : "1rem",
    });
  };

  render() {
    return (
      <header>
        <h1 style={{ marginTop: "2rem" }}>Horned Animals</h1>

        <button
          style={{
            fontSize: "1.5rem",
            backgroundColor: this.state.backgroundColor,
            color: this.state.color,
            borderRadius: this.state.borderRadius,
            marginBottom: "4rem",
          }}
          onClick={this.handleColor}
        >
          Click to change the style
        </button>
      </header>
    );
  }
}

export default Header;
