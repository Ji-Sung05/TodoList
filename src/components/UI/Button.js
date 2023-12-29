import React from 'react'
import styled from 'styled-components';

const Btn = styled.button`
  width: ${props => props.width}px;
  background-color: ${props => props.color}; 
  font-size: ${props => props.size}px;
  font-weight: bold;
  border-radius: 20px;
  padding: 3px;
`;

const Button = ({text, width, onClick, color, size}) => {
  return (
    <Btn 
      width={width}
      color={color}
      size={size}
      onClick={onClick}
      >
        {text}
    </Btn>
  )
}

export default Button;