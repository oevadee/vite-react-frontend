import { ThemeProvider } from "styled-components";
import { Layout } from "./layout";
import { Routes } from "./router/Routes";
import { GlobalStyle } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

function App() {
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </Layout>
  );
}

export default App;
