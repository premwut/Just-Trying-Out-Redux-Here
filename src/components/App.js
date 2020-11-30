import React from 'react';
import './styles/App.css';
import Colors from './Colors'
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={Colors}></Route>
            <div/>
        </div>
        </BrowserRouter>
    )
};

export default App;