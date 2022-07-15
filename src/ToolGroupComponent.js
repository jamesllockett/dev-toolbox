import { Component } from "react";
import { ToolLink } from "./ToolLinkComponent";

export class ToolGroup extends Component {
  render() {
    let toolLinks = [];

    if (this.props.tools) {
      toolLinks = this.props.tools
        .filter((t) => t.enabled)
        .map((t) => <ToolLink to={t.fragments[0]} name={t.name} />);
    }

    if (toolLinks.length > 0) {
      return (
        <section>
          <h2>{this.props.name}</h2>
          <ul>{toolLinks}</ul>
        </section>
      );
    } else {
      return null;
    }
  }
}
