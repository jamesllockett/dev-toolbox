import { Component } from "react";
import { Link } from "react-router-dom";

export class ToolLink extends Component {
  render() {
    return (
      <li>
        <Link to={"/" + this.props.to}>{this.props.name}</Link>
      </li>
    );
  }
}
