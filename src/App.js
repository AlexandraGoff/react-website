import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages'

const App =()=>{
    return(
        <Router>
            <Switch>
                <Route path = "/" component = {Home} exact />
            </Switch>
        </Router>
    );
}


export default App;