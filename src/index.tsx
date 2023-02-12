import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./app/providers/theme/provider";
import { App } from "./app/index";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
