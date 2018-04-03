import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}

/*
Hot Module Replacement
Hot Module Replacement (HMR) is a tool to reload your application in the browser. 
The browser doesn’t perform a page refresh. You can easily activate it in 
create-react-app. In your src/index.js, your entry point to React, you have to 
add one little configuration.

The biggest benefit is that you can keep the application state with HMR.
It keeps the application state even though the source code changes. 
The application itself reloads, but not the page.
*/