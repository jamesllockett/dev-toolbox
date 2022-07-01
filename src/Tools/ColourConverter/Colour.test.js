import { Colour } from "./Colour";

test("Colour defaults to white", () => {
  let colour = new Colour();
  expect(colour.hex()).toEqual("#fff");
});

test("Colour parse 3 digit shorthand hex value (with alphanumeric characters)", () => {
  let colour = new Colour("1AE");
  expect(colour.hex()).toEqual("#1AE");
  expect(colour.rgb()).toEqual("rgb(17,170,238)");
});

test("Colour parse 3 digit shorthand hex value (with numeric characters)", () => {
  let colour = new Colour("369");
  expect(colour.hex()).toEqual("#369");
  expect(colour.rgb()).toEqual("rgb(51,102,153)");
});

test("Colour parse 6 digit hex value (with numeric characters)", () => {
  let colour = new Colour("129913");
  expect(colour.hex()).toEqual("#129913");
  expect(colour.rgb()).toEqual("rgb(18,153,19)");
});

test("Colour parse single digit rgb value", () => {
  let colour = new Colour("4,6,8");
  expect(colour.hex()).toEqual("#040608");
  expect(colour.rgb()).toEqual("rgb(4,6,8)");
});

test("Colour parse double digit rgb value", () => {
  let colour = new Colour("24,86,48");
  expect(colour.hex()).toEqual("#185630");
  expect(colour.rgb()).toEqual("rgb(24,86,48)");
});

test("Colour convert rgb to cmyk [red]", () => {
  let colour = new Colour("255,0,0");
  expect(colour.cmyk()).toEqual("cmyk(0,1,1,0)");
});

test("Colour convert rgb to cmyk [green]", () => {
  let colour = new Colour("0,255,0");
  expect(colour.cmyk()).toEqual("cmyk(1,0,1,0)");
});

test("Colour convert rgb to cmyk [blue]", () => {
  let colour = new Colour("0,0,255");
  expect(colour.cmyk()).toEqual("cmyk(1,1,0,0)");
});

test("Colour convert hex to rgb [red]", () => {
  let colour = new Colour("FF0000");
  expect(colour.rgb()).toEqual("rgb(255,0,0)");
});

test("Colour convert hex to rgb [green]", () => {
  let colour = new Colour("00FF00");
  expect(colour.rgb()).toEqual("rgb(0,255,0)");
});

test("Colour convert hex to rgb [blue]", () => {
  let colour = new Colour("0000FF");
  expect(colour.rgb()).toEqual("rgb(0,0,255)");
});

test("Colour convert rgb to hex [red]", () => {
  let colour = new Colour("255,0,0");
  expect(colour.hex()).toEqual("#ff0000");
});

test("Colour convert rgb to hex [green]", () => {
  let colour = new Colour("0,255,0");
  expect(colour.hex()).toEqual("#00ff00");
});

test("Colour convert rgb to hex [blue]", () => {
  let colour = new Colour("0,0,255");
  expect(colour.hex()).toEqual("#0000ff");
});
