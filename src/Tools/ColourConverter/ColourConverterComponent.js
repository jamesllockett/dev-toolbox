import { ToolComponent } from "../ToolComponent";
import { ColourBlock } from "./ColourBlockComponent";
import { Colour } from "./Colour";
import "./style.css";

export class ColourConverter extends ToolComponent {
  constructor(props) {
    super(props);

    this.state = {
      colourCode: "FFF",
    };

    this.onColourCodeChanged = this.onColourCodeChanged.bind(this);
  }

  render() {
    let c = new Colour(this.state.colourCode);

    return (
      <section>
        <div className="colour-row">
          <label>Colour</label>
          <input
            type="text"
            value={this.state.colourCode}
            onChange={this.onColourCodeChanged}
          />
          <ColourBlock colour={this.state.colourCode} />
        </div>
        <div className="output">
          <dl>
            <dt>RGB</dt>
            <dd>{c.rgb()}</dd>
            <dt>Hex</dt>
            <dd>{c.hex()}</dd>
            <dt>CMYK</dt>
            <dd>{c.cmyk()}</dd>
          </dl>
        </div>
      </section>
    );
  }

  onColourCodeChanged(e) {
    this.updateState({ colourCode: e.target.value });
  }
}
