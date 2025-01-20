import styled, { ThemeProvider } from "styled-components";
import {darkTheme} from "./utils/Theme"
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
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
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home/>} />
            </Routes>
          </BrowserRouter>
          <Home />
          <CreatePost />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
