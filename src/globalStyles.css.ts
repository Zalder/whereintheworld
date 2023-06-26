import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle<object>`
  #root {
    width: 100%;
    height: 100%;
  }
  
  html {
    box-sizing: border-box;
  }

body {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    background-color: ${(props) => props.theme.background};
    min-height: 100%;
    margin: 0
}

*, *:before, *:after {
    box-sizing: inherit;
    font-family: "Nunito Sans", sans-serif;
    color: ${(props) => props.theme.textColor};
}`