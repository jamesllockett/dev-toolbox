import { Component } from "react";
import { Route, Routes, Link} from 'react-router-dom';
import Menu from './Menu.js';
import RandomNumberGenerator from './Tools/RandomNumberGenerator/RandomNumberGenerator.js'
import RandomStringGenerator from './Tools/RandomStringGenerator/RandomStringGenerator.js'

class App extends Component
{
 render()
 {
     return (
         <div>
            <header><h1><strong>dev</strong>toolbox</h1>
            <Link to="/">
            <span className="material-symbols-outlined">home</span>
            </Link>
            </header>
            <Routes>
                <Route exact path="/" element={<Menu/>}/>
                <Route path="/random-number-generator" element={<RandomNumberGenerator />}/>
                <Route path="/random-string-generator" element={<RandomStringGenerator />}/>
            </Routes>
        </div>
     );
 }
}

export default App;