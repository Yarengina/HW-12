import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Consolas;
    box-sizing: border-box;
    background: black;
    width: 100%;
    min-height: 100vh;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`
export const Flex = styled.div`
    background: black;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 15px;
`