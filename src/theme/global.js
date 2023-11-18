import { createGlobalStyle } from "styled-components"
import spacing from "./spacing"
import typescale from "./typescale"
const GlobalStyle = createGlobalStyle`
    
    ${spacing}
    ${typescale}

    *{
        font-size: var(--fs-1);
        margin: 0;
        padding: 0;
        border: none;
        line-height: 1;
        box-sizing: border-box;
        font-family: 'Poppins', normal;
    }

`

export default GlobalStyle
