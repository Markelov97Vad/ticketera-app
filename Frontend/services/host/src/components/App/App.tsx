import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";

function App () {

    return (
        <div data-testid={'App.DataTestId'}>
            HOST
            <Outlet/>
        </div>
    );
};

export default App;