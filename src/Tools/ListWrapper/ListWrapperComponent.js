import { ToolComponent } from "../ToolComponent";
import { ListInput } from "./ListInputComponent";
import { WrappedOutput } from "./WrappedOutputComponent";
import "./Wrapper.scss";

export class ListWrapper extends ToolComponent {
  constructor(props) {
    super(props);

    this.state = {
      suffix: "",
      prefix: "",
      list: ["a", "b", "c"],
    };

    this.onPrefixChanged = this.onPrefixChanged.bind(this);
    this.onSuffixChanged = this.onSuffixChanged.bind(this);
    this.onListChanged = this.onListChanged.bind(this);
  }

  onPrefixChanged(e) {
    this.updateState({ prefix: e.target.value });
  }

  onSuffixChanged(e) {
    this.updateState({ suffix: e.target.value });
  }

  onListChanged(newList) {
    this.updateState({ list: newList });
  }

  render() {
    return (
      <section>
        <h2>List Wrapper</h2>
        <ul>
          <li>
            <label>Prefix</label>
            <input
              type="text"
              maxlength="10"
              value={this.state.prefix}
              onChange={this.onPrefixChanged}
            />
          </li>
          <li>
            <label>Suffix</label>
            <input
              type="text"
              maxlength="10"
              value={this.state.suffix}
              onChange={this.onSuffixChanged}
            />
          </li>
        </ul>
        <div className="main">
          <ListInput onListChanged={this.onListChanged} />
          <WrappedOutput
            results={this.state.list}
            suffix={this.state.suffix}
            prefix={this.state.prefix}
          />
        </div>
      </section>
    );
  }
}
