import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; //  withRouter, Redirect 
import theme from './themes';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Home from './Pages/Home.js';
import Error404 from './Pages/404.js';

class Root extends React.Component {

    constructor(props) {
        super(props);
        console.log(theme);
    }
    /*
    return (
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route component={Error404} />
                </Switch>
            </MuiThemeProvider>
        </BrowserRouter>
    )*/
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                        <Home/>
            </MuiThemeProvider>
        )
    }
}

export default Root;