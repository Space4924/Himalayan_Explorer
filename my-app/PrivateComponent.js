import React from 'react'
import { Outlet,Navigate } from 'react-router-dom/dist';

const PrivateComponent = () => {
    const auth=localStorage.getItem('user');
    return auth?<Outlet/>:<Navigate to='signin'/>;
}

export default PrivateComponent