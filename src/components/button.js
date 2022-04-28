import styled from 'styled-components'

const Btn1 = styled.button`
  border-radius: 3px;
  border: 2px solid red;
  color: red;
  margin: 0 1em;
  
  margin-top: 10px;
  &:hover{
    color: red;
    background-color: gray;
    border: 2px solid yellow;
  }
`

const Btn2 = styled.button`
  border-radius: 3px;
  border: 2px solid red;
  color: pink;
  margin: 0 1em;
  
  margin-top: 10px;
  background: ${(props) => (props.theme === "light" ? "aqua" : "black")};
  color: ${(props) => (props.theme === "light" ? "black" : "aqua")};
  &:hover{
    color: red;
    background-color: gray;
    border: 2px solid yellow;
  }
`


export { Btn1, Btn2 }