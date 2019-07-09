
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            //main: 'rgb(242, 242, 242)',
            main: '#FFFFFF',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        complimentary: {
            light: '#ff7f94',
            main: '#ffb47f',
            dark: '#aa7fff'
        },
        secondary: {
            light: 'rgb(18, 157, 57);',
            main: 'rgb(18, 157, 57);',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffffff',
        },
        background: {
            default: '#eeeeee'
        },
        // error: will use the default color
    },
    priority: {
        low: "#4caf50",
        medium: "#ffeb3b",
        high: "#e53935",
    },
    //shadows: ["none"],
    fontFamily: [
        "Raleway"
    ]
});

export default theme