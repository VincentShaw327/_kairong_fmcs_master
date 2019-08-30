import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configure from './store/configureStore';
import Route from './route';
import './app/index.css';
// import './app/test/iconfont.css';
// import './test/iconfont.js';
// import './custom.less';


const store = configure( { config: global.gconfig } );
ReactDOM.render(
    <Provider store={store}>
        <Route />
    </Provider>,
    document.getElementById( 'root' ),
)
