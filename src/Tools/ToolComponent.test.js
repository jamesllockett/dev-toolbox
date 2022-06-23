import renderer from 'react-test-renderer';
import { ToolComponent } from './ToolComponent';


test('Update state overrides property', () =>{
 const component = renderer.create(<ToolComponent></ToolComponent>);

 component.setState({test:1});
 component.updateState({test:2});
 expect(component.state('test')).toEqual(2);
});