import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#E6E922',
        },
        secondary: {
            main: '#393939'
        },
    },
    typography: {
        body1: {
            lineHeight: 1
        }
    },
});

export { theme };
