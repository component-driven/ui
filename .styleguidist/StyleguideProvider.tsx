import * as React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../packages/components/src/theme"

const StyleguideProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default StyleguideProvider
