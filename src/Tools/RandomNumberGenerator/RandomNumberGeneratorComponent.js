import { ToolComponent } from "../ToolComponent";
import { SimpleError } from "../../common/SimpleErrorComponent";
import { Random } from "../../common/random";
import { SimpleResultList } from "../../common/SimpleResultListComponent";

export class RandomNumberGenerator extends ToolComponent {
  constructor(props) {
    super(props);

    this.state = {
      min: 1,
      max: 100,
      count: 1,
      results: [],
      error: "",
    };

    this.onMinChange = this.onMinChange.bind(this);
    this.onMaxChange = this.onMaxChange.bind(this);
    this.onCountChange = this.onCountChange.bind(this);
  }

  render() {
    return (
      <section>
        <h2>Random Number Generator</h2>

        <ul>
          <li>
            <label>Minimum value</label>
            <input
              type="number"
              min="0"
              step="1"
              value={this.state.min}
              onChange={this.onMinChange}
            />
          </li>
          <li>
            <label>Maximum value</label>
            <input
              type="number"
              min="1"
              step="1"
              value={this.state.max}
              onChange={this.onMaxChange}
            />
          </li>
          <li>
            <label>Random numbers to generate</label>
            <input
              type="number"
              min="1"
              max="50"
              step="1"
              value={this.state.count}
              onChange={this.onCountChange}
            />
          </li>
        </ul>

        <button onClick={() => this.generateNumbers()}>Generate</button>
        <SimpleError error={this.state.error} />
        <SimpleResultList results={this.state.results} />
      </section>
    );
  }

  generateNumbers() {
    if (this.state.min >= this.state.max) {
      this.setError("Minimum number must be less than the maximum");
    } else if (this.state.count < 1) {
      this.setError("Amount of numbers to generate must be at least 1");
    } else {
      let numbers = [];

      for (var i = 0; i < this.state.count; i++) {
        numbers.push(this.generateNumber(this.state.min, this.state.max));
      }

      this.updateState({ results: numbers });
    }
  }

  onMinChange(event) {
    this.updateState({ min: event.target.value });
  }

  onMaxChange(event) {
    this.updateState({ max: event.target.value });
  }

  onCountChange(event) {
    this.updateState({ count: event.target.value });
  }

  generateNumber(min, max) {
    const r = new Random();

    return Math.round(r.generateInBounds(min, max));
  }

  setError(error) {
    this.setState(Object.assign({}, this.state, { error: error, results: [] }));
  }
}
