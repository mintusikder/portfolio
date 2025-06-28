import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar';
import Hero from '../pages/Hero/Hero';

const Main = () => {
    return (
        <div>
           <Hero></Hero>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;