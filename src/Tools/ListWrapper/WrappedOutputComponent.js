import { Component } from "react";
export class WrappedOutput extends Component {
  render() {
    if (this.props.results) {
      var items = this.props.results.map((v, i) => (
        <li key={i}>{this.wrap(v)}</li>
      ));

      return (
        <div className="output-box">
          <ul>{items}</ul>
        </div>
      );
    } else {
      return <div className="output-box"></div>;
    }
  }

  wrap(value) {
    return `${this.props.prefix}${value}${this.props.suffix}`;
  }
}
