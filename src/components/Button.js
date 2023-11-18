import React from "react"
import styled from "styled-components"

const Button = ({
  theme = "light",
  text = "button",
  onClick = () => {
    alert("no action")
  },
}) => {
  return (
    <ButtonStyle className={theme} onClick={onClick}>
      {text}
    </ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled.button`
  cursor: pointer;
  font-size: var(--fs-3);
  font-weight: 500;
  background-color: transparent;
  padding: var(--space-sm) var(--space-md);
  border: 4px solid black;

  &.dark {
    background-color: black;
    color: white;
  }

  &:hover {
    background-color: black;
    color: white;
    border-color: white;
    &.dark {
      background-color: transparent;
      color: black;
    }
  }
`
