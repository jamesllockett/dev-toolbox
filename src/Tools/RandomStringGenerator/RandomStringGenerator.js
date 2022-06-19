import { ToolComponent } from "../ToolComponent";

class RandomStringGenerator extends ToolComponent
{
    constructor(props){
        super(props);

        this.state = {
            chars:'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_!"£$%^&*()-',
            stringLength: 50,
            stringCount: 1,
            results:[],
            error: ''
        };

        this.onCountChange = this.onCountChange.bind(this);
        this.onCharsChange = this.onCharsChange.bind(this);
        this.onLengthChange = this.onLengthChange.bind(this);
    }

    render() {
        let results = this.state.results.map((v) => {
            return (<li>{v}</li>);
        });

        let errorBox;

        return (
            <section>
                <h2>Random String Generator</h2>

                <ul>
                    <li>
                        <label>Characters</label>
                        <textarea value={this.state.chars} onChange={this.onCharsChange}></textarea>
                    </li>
                    <li>
                        <label>Length of strings</label>
                        <input type="number" min="1" max="250" step="1" value={this.state.stringLength} onChange={this.onLengthChange}/>
                    </li>
                    <li>
                        <label>Number of strings to generate</label>
                        <input type="number" min="1" max="50" step="1" value={this.state.stringCount} onChange={this.onCountChange}/>
                    </li>
                </ul>

                <button onClick={() => this.generateStrings()}>Generate</button>
                {errorBox}
                <ul className="results">
                {results}
                </ul>
                
            </section>
        );
    }

    onCountChange(event){
        this.updateState({stringCount:event.target.value});
    }

    onLengthChange(event){
        this.updateState({stringLength:event.target.value});
    }

    onCharsChange(event){
        this.updateState({chars:event.target.value});
    }

    generateStrings(){

        if (this.state.stringCount < 1){
            this.setError("String count must be greater than or equal to 1");
        } else if (this.state.stringLength < 1) {
            this.setError("String length must be greater than or equal to 1");
        }
        else {
            let strings = [];

            for(var i=0; i<this.state.stringCount; i++){

                strings.push(this.generateString(this.state.chars, this.state.stringLength));
            }

            this.updateState({results: strings});
        }
    }

    generateString(chars, len) {
        let charArray = [];

        for(var c=0; c<len; c++){

            let index = Math.round(Math.random() * (chars.length-1));

            charArray.push(chars[index]);
        }

        return charArray.join('');
    }

    setError(err){
        this.setState(Object.assign({}, this.state, {error: err}));
    }
}

export default RandomStringGenerator;