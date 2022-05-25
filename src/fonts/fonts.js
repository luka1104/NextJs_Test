import { Global } from '@emotion/react'

const Fonts = () => (
  <Global 
    styles={`
      @font-face {
        font-family: 'ABCWhyteInktrap-Regular';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/ABCWhyteInktrap-Regular.woff2') format('woff2'), url('./fonts/ABCWhyteInktrap-Regular.woff') format('woff');
      }
    `}
  />
)

export default Fonts
