export class Colour {
  #hexcode = "fff";

  constructor(colour) {
    this.parse(colour);
  }

  parse(colour) {
    if (colour) {
      const rgbrx = /^\d{1,3},\d{1,3}(,\d{1,3})?$/;
      const hexrx = /^#?[0-9A-F]{3,6}$/i;

      if (colour.match(hexrx)) {
        if (colour[0] === "#") {
          this.hexcode = colour.substring(1);
        } else {
          this.hexcode = colour;
        }
      } else if (colour.match(rgbrx)) {
        let [r = 0, g = 0, b = 0] = colour.split(",");

        this.hexcode =
          Number.parseInt(r).toString(16).padStart(2, "0") +
          Number.parseInt(g).toString(16).padStart(2, "0") +
          Number.parseInt(b).toString(16).padStart(2, "0");
      } else {
        this.hexcode = "fff";
      }
    } else {
      this.hexcode = "fff";
    }
  }

  /* Get RGB version of colour */
  rgb() {
    let [r, g, b] = this.#toRGB();

    return `rgb(${r},${g},${b})`;
  }

  /* Get Hex version of colour */
  hex() {
    return "#" + this.hexcode;
  }

  cmyk() {
    let [r, g, b] = this.#toRGB();

    let rb = r / 255.0;
    let gb = g / 255.0;
    let bb = b / 255.0;

    let k = 1 - Math.max(rb, gb, bb);
    let c = (1 - rb - k) / (1 - k);
    let m = (1 - gb - k) / (1 - k);
    let y = (1 - bb - k) / (1 - k);

    return `cmyk(${c},${m},${y},${k})`;
  }

  hsl() {
    /*TODO: HSL Conversion https://www.rapidtables.com/convert/color/rgb-to-hsl.html */
  }

  #toRGB() {
    let r = 255;
    let g = 255;
    let b = 255;

    if (this.hexcode) {
      if (this.hexcode.length === 3) {
        // Get single digit hex values
        [r, g, b] = this.hexcode;

        // Pair them so it creates same double-digit values (e.g. B B B = BB BB BB)
        r = r.toString() + r.toString();
        g = g.toString() + g.toString();
        b = b.toString() + b.toString();
      } else if (this.hexcode.length === 6) {
        // Extract double digit hex values
        r = this.hexcode.substring(0, 2);
        g = this.hexcode.substring(2, 4);
        b = this.hexcode.substring(4);
      }

      // Convert to numeric values from Hex (base 16)
      r = Number.parseInt(r, 16);
      g = Number.parseInt(g, 16);
      b = Number.parseInt(b, 16);
    }

    return [r, g, b];
  }
}
