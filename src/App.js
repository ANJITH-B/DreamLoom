import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Routes from './routes/Routes';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <HashRouter>
          <Routes />
        </HashRouter>
      </Provider>
    </ThemeProvider>
  );
}