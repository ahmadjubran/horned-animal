import React from "react";

class HornedBeast extends React.Component {
  render() {
    return (
      <div className="beast">
        <h2>{this.props.title}</h2>
        <img
          src={this.props.src}
          alt={this.props.alt}
          title={this.props.title}
        />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeast;
