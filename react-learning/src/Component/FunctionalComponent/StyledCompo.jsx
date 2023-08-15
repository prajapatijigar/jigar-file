import React from 'react';
import styled from 'styled-components';


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

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;





const StyledCompo = () => {
    return (
        <div>
            {/* <h2>htfhjkdjdj</h2> */}
            <Title>
                hello
            </Title>
            <Button className='btn'>button</Button>
            <Button>Normal Button</Button>
            <TomatoButton>Tomato Button</TomatoButton>

        </div>
    );
};

export default StyledCompo;