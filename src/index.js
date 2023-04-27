import React from 'react';
import ReactDOM  from 'react-dom';
import {App} from './App'

// Context
import NavigationContext from "./Context/NavigationContext";
import LoginContext from './Context/LoginContext'

ReactDOM.render(
    <LoginContext.Provider>
        <NavigationContext.Provider>
            <App/>
        </NavigationContext.Provider>
    </LoginContext.Provider>
    ,
    document.getElementById('app'))