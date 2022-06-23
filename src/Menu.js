import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
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
     </ul>
    </section>
    <section>
      <h2>Graphical</h2>
      <ul>
      <li>RGB/HEX Colour convertor</li>
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

export default Menu;
