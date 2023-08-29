import { styled } from 'styled-components'

const Button = styled.button`
background-color : ${(props) =>  props.bg === ""? "green" : ""  }; 
color : white;
font-size: 20px;
padding: 5px;
tansition: 0.5s all ease-in

`
export default Button

