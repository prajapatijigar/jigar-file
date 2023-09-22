import React from 'react';
import { styled } from 'styled-components';
// import Button from './Styled_Compo/Button'


const Title = styled.h1`
font-size: 1.5em;
color: #BF4F74;
`;

const Button = styled.button`
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;





const StyledCompo = () => {
  return (
    <>
      {/* <h2>htfhjkdjdj</h2> */}
      <ol>
        <li>what is styled component in reactjs</li>
        <p>Styled-components is a library that allows you to write CSS in JS while building custom components in Reactjs.?</p>
        <p>There are multiple options you can go with to style a React application. But the CSS in JS technique is good approach, where you write the CSS code right in the JavaScript file. Styled-components takes this approach.</p>
        <li>create a styled component</li>
        <p> step -1 :- Before we style our component, we need to import styled-components into our app.js file:</p>
        <p>Now we will create our custom component called H1 and use it instead of the &#60;h1&#62; tag with custom styling.</p>
        <p>First we need give a custom name of our choice. Then we'll start with styled.&#60;HTML Tag Name&#62; and wrap the style in backticks. Now when we use this custom component it will have the &#60;HTML Tag Name&#62; property with styling.

          import styled from 'styled-components'</p>
        <p>4- ways add to  css in website</p>
        <p>=&gt; 1 - normal css, 2- custom css ,3 - inline css, 4- styled component css</p>


      </ol>
      <Title>
        hello
      </Title>
      <Button bg="gre">button</Button>
      <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton>


    </>
  );
};

export default StyledCompo;