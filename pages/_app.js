import '../styles/globals.css'
import '../styles/nav.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// import axios from 'axios'


const theme = createTheme({
  palette: {
    primary: {
      main: '#0a192f',
      contrastText: '#ccd6f6',
    },
    secondary: {
      main: '#3f50b5',
      contrastText: '#8892b0',
    },
    info: {
      main: '#64ffda',
      contrastText: '#fff',
    },
    error: {
      main: red[600],
      contrastText: '#fff',
    },
  },
  typography:{
    fontFamily: 'inter'
  }
});

// axios.defaults.baseURL = ''

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )



}

export default MyApp
