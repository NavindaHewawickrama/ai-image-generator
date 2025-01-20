import styled, { ThemeProvider } from "styled-components";
import {darkTheme} from "./utils/Theme"

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  jsutify-content: space-between;
  flex: 3;
  `;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Wrapper>
          Hello
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
