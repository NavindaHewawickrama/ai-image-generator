import styled, { ThemeProvider } from "styled-components";
import {darkTheme} from "./utils/Theme"

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      Hello World
    </ThemeProvider>
  );
}

export default App;
