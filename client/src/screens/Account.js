import React, { useState } from 'react';
import Login from '../components/Login';


function Account() {
    const [ user] = useState(localStorage.getItem('user'));
    if (!user) {
        return (
            <Login/>
        );
    } else {
        return (
            <h1>register</h1>
        );
    }

}

export default Account;