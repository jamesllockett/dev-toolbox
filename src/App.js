import { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Menu } from "./Menu.js";
/*
import { RandomNumberGenerator } from "./Tools/RandomNumberGenerator/RandomNumberGeneratorComponent.js";
import { RandomStringGenerator } from "./Tools/RandomStringGenerator/RandomStringGeneratorComponent.js";
import { GuidGenerator } from "./Tools/GuidGenerator/GuidGeneratorComponent.js";
import { ColourConverter } from "./Tools/ColourConverter/ColourConverterComponent.js";
import { ListWrapper } from "./Tools/ListWrapper/ListWrapperComponent.js";*/

import { DevTools } from "./Links";

export class App extends Component {
  render() {
    let routes = DevTools.groups.flatMap((f) =>
      f.tools
        .filter((f) => f.enabled)
        .flatMap((t) =>
          t.fragments.map((f) => {
            console.log(t);
            return <Route key={f} path={"/" + f} element={t.element} />;
          })
        )
    );

    return (
      <div className="app-wrapper">
        <header>
          <h1>
            <strong>dev</strong>toolbox
          </h1>
          <Link to="/">
            <span className="material-symbols-outlined">home</span>
          </Link>
        </header>
        <Routes>
          <Route exact path="/" element={<Menu />} />
          {routes}
        </Routes>
      </div>
    );

    /*
    <Route
      path="/random-number-generator"
      element={<RandomNumberGenerator />}
    />
    <Route
      path="/random-string-generator"
      element={<RandomStringGenerator />}
    />
    <Route path="/guid-generator" element={<GuidGenerator />} />
    <Route path="/colour-converter" element={<ColourConverter />} />
    <Route path="/color-converter" element={<ColourConverter />} />
    <Route path="/color-convertor" element={<ColourConverter />} />
    <Route path="/colour-convertor" element={<ColourConverter />} />
    <Route path="/list-wrapper" element={<ListWrapper />} />
    */
  }
}
