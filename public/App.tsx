import * as React from 'react';
import Input from './Component/Input/Input';

class App extends React.Component{
   
    handleChange=( value: any )=>{
        console.log(value);
    }
    public render(){
        return(
            <Input
            size="large"
            defaultValue="test"
            placeholder="input text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{this.handleChange(e)}}
            />
        )
    }
}
export default App;
