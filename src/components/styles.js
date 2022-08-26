import styled, { keyframes } from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const ButtonTheme = styled.button`
height: 30px;
width: 150px;
font-size: 14px;
align-items: center;
border: 1px solid ${(props) => props.color};
border-radius: 5px;
background: none;
color: ${(props) => props.color};
:hover {
  height: 32px;
  width: 152px;
  font-size: 16px;
  cursor: pointer;
}
`
export const StyledConsole = styled.textarea`
  display: none
  width: 100%
  height: 70vh;
  overflow: hidden;
  resize: none;
  margin-bottom: -3px;
  background: rgb(133 133 133 / 19%);
  font-size: 24px;
  border-radius: 5px;
  &:focus{
    outline:none
  }
  color: ${(props) => props[0].color};
`
const animationButton = keyframes `
    0% {
        animation-timing-function: ease-out;
        transform: scale(1);
    }
    10% {
        animation-timing-function: ease-in;
        transform: scale(0.85);
    }
    17% {
        animation-timing-function: ease-out;
        transform: scale(0.98);
    }
    33% {
        animation-timing-function: ease-in;
        transform: scale(0.87);
    }
    45% {
        animation-timing-function: ease-out;
        transform: scale(1);
    }
`
export const ButtonClean = styled.button`
  background-color: ${(props) => props[0].color};
  height: 35px;
  width: 65px;
  font-size: 16px;
  border-radius: 5px;
  border: initial;
  margin: 20px;
  display: block;
  color: black;
  cursor: pointer;
  &:hover {
    height: 45px;
    width: 85px;
    font-size: 24px;
    }
  animation: ${animationButton} 2s ease 0s infinite normal forwards;
`