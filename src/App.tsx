import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { UserProvaider } from "./context/UserContext";
import { Router } from "./Router";
import { GlobalStyle } from "./Style/global";
import { defaultTheme } from "./Style/theme/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <UserProvaider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UserProvaider>
    </ThemeProvider>
  );
}

export default App;
