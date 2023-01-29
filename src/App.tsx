import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Style/global";
import { defaultTheme } from "./Style/theme/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div className="App">
        <h1>Hello word</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
