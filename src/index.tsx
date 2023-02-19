import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundarySuspense }  from 'app/providers/error-boundary';
import { ThemeProvider } from './app/providers/theme';
import { App } from './app/index';
import './shared/config/i18n/i18n';

render(
  <BrowserRouter>
  <ErrorBoundarySuspense> 
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </ErrorBoundarySuspense>
  </BrowserRouter>,
  document.getElementById('root'),
);
