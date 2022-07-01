import { Colour } from "./Colour";

export function ColourBlock(props) {
  let colour = props.colour;
  if (!colour) {
    colour = "#FFF";
  }

  let style = {
    backgroundColor: new Colour(colour).hex(),
  };

  return <div className="colour-block" style={style}></div>;
}
