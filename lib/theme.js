import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0d65b3',
        },
        secondary: {
            main: '#2282D6',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#f9f9f9',
        },
    },
    typography:{
        fontFamily: [
            '"Open Sans"',
            'OpenSans',
            'Arial',
            'sans-serif',
        ].join(','),
        fontSize: 16,
    },
});

export default theme;
