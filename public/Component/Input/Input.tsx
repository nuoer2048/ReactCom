import * as React from 'react';
import './Input.less';
import Omit from 'omit.js';
const classNames = require('classnames');

export const tuple = <T extends string[]>(...args: T) => args;
const sizItems = ['default', 'small','large'];
// 每个传入从父组件传递进来的属性都需要明确类型，在函数内部就不需要判断属性的类型了
interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'|'prefix'>{
 size?:string,
 key?:string,
}
interface States{
  value: string,
}
class Input extends React.PureComponent<Props, States>{
  static defaultProps={
    size: 'default'
  }
 constructor(props:any){
  super(props);
  const {defaultValue} = props;
  this.state={
    value: defaultValue
  }
 }
  handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      e.preventDefault();
      e.stopPropagation();
      this.setInputValue(e.target.value)
      this.props.onChange(e);
      
  }
  setInputValue=(val:string)=>{
     this.setState({
       value: val,
     })
  }
  public render(){
    const { size, placeholder, key } = this.props;
    const {value:curValue} = this.state;
    
  return (
    <React.Fragment>
    <input
  className={classNames('input_default',size)}
  placeholder= {placeholder}
  value={curValue}
  onChange={this.handleChange}
  key={key}
  />
    </React.Fragment>
 
  
  )
  }
}
export default Input;