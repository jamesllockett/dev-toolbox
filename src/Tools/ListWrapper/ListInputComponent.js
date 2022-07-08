import { Component } from "react";
export class ListInput extends Component {
  constructor(props) {
    super(props);

    this.onInputChanged = this.onInputChanged.bind(this);
  }

  render() {
    return (
      <div className="input-box">
        <textarea onChange={this.onInputChanged}></textarea>
      </div>
    );
  }

  onInputChanged(e) {
    let list = e.target.value.split("\n");

    console.log("List", list);

    if (this.props.onListChanged) {
      this.props.onListChanged(list);
    }
  }
}
