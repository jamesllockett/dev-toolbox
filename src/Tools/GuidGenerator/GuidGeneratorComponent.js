import { Component } from 'react';
import { v4 } from 'uuid';
import { SimpleError } from "../../common/SimpleErrorComponent";
import { SimpleResultList  } from "../../common/SimpleResultListComponent";
import { ToolComponent } from "../ToolComponent";

export class GuidGenerator extends ToolComponent{

  constructor(props){
    super(props);

    this.state = {
      count: 1,
      results: [],
      error: ''
    };

    this.onCountChange = this.onCountChange.bind(this);
  }

  render(){
    return (
      <section>
          <h2>GUID Generator</h2>
          <ul>
          <li>
              <label>GUID Version</label>
              <select>
                <option>v4</option>
              </select>
          </li>
              <li>
                  <label>Number of GUIDs to generate</label>
                  <input type="number" min="1" max="100" step="1" value={this.state.count} onChange={this.onCountChange}/>
              </li>
          </ul>

          <button onClick={() => this.generateGUIDs()}>Generate</button>
          <SimpleError error={this.state.error} />
          <SimpleResultList results={this.state.results} />

          <footer>
            <p>Powered by <a href="https://www.npmjs.com/package/uuid" target="_blank">UUID</a></p>
          </footer>
      </section>
    );
  }

  onCountChange(event){
    this.updateState({count: event.target.value});
  }

 generateGUIDs(){
   if (this.state.count < 1 || this.state.count > 100){
     this.updateState({error: 'Count must be between 1 and 100'});
   } else{

     let guids = [];

     for(var i=0; i<this.state.count; i++){
       guids.push(v4());
     }

     this.updateState({results: guids});
   }
 }
}
