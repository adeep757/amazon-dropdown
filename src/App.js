import React, { Component } from 'react';

import './index.css';
import List from './components/ListItem/index';
import Chip from './components/Chip';
import CustomInput from './components/CustomInput';

class App extends Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        return (
            <div className="container">
           
                <CustomInput />
            </div>
        );
    }
}

export default App;
