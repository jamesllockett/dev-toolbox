import { Component } from "react";
import { Route, Routes} from 'react-router-dom';
import { Menu } from './Menu.js';
import { RandomNumberGenerator } from './Tools/RandomNumberGenerator/RandomNumberGeneratorComponent.js';
import { RandomStringGenerator } from './Tools/RandomStringGenerator/RandomStringGeneratorComponent.js';
import { GuidGenerator } from './Tools/GuidGenerator/GuidGeneratorComponent.js';
import { ColourConverter } from './Tools/ColourConverter/ColourConverterComponent.js';

export class App extends Component
{
 render()
 {
     return (
         <div className="app-wrapper">
            <header><h1><strong>dev</strong>toolbox</h1></header>
            <Routes>
                <Route exact path="/" element={<Menu/>}/>
                <Route path="/random-number-generator" element={<RandomNumberGenerator />}/>
                <Route path="/random-string-generator" element={<RandomStringGenerator />}/>
                <Route path="/guid-generator" element={<GuidGenerator />}/>
                <Route path="/colour-converter" element={<ColourConverter />}/>
                <Route path="/color-converter" element={<ColourConverter />}/>
                <Route path="/color-convertor" element={<ColourConverter />}/>
                <Route path="/colour-convertor" element={<ColourConverter />}/>
            </Routes>
        </div>
     );
 }
}
