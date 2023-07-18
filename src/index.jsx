import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { styled } from 'styled-components';
import styleee from './assets/css/style.module.scss'

const Btn = styled.button`
    margin : 40px;
    padding : 30px
  `

  


class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myNumber : 5
    }
  }
  render() {
    return (
      <>
        <div className={styleee.box}>counter value is <span className={styleee.box2}>{this.state.myNumber}</span></div>
        <Btn onClick={()=> this.setState({myNumber : this.state.myNumber +1})}>add1</Btn>
        <Btn onClick={()=> this.setState({myNumber : this.state.myNumber -1})}>minus1</Btn>
        <br />
        <Btn onClick={()=> this.setState({myNumber : this.state.myNumber +5})}>add5</Btn>
        <Btn onClick={()=> this.setState({myNumber : this.state.myNumber -5})}>minus5</Btn>
      </>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Counter />
);

