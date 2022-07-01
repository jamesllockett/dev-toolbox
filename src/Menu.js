import { Link } from "react-router-dom";
import "./menu.css";

export  function Menu() {
 return(
  <nav>
    <section>
      <h2>String Tools</h2>
      <ul>
        <li><Link to="/random-string-generator">Random String Generator</Link></li>
        <li>Base64 Encoder/Decoder</li>
        <li>List Wrapper</li>
      </ul>
    </section>
    <section>
     <h2>Security</h2>
     <ul>
       <li>HASH</li>
       <li>HMAC</li>
       <li>Password Generator</li>
     </ul>
    </section>
    <section>
      <h2>Graphical</h2>
      <ul>
      <li><Link to="/colour-converter">RGB/HEX Colour convertor</Link></li>
      </ul>
    </section>
    <section>
      <h2>General</h2>
      <ul>
        <li><Link to="/random-number-generator">Random Number Generator</Link></li>
        <li><Link to="/guid-generator">GUID Generator</Link></li>
      </ul>
    </section>
  </nav>);
};
