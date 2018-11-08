import React from 'react';
import {Link} from 'react-router-dom';

const Homepage = () => (
    <div className="home-hero">
        <h1>Welcome to Warbler</h1>
        <h4>A tiny network for big ideas</h4>
        <Link to='/signup' className='btn btn-primary'>Join today!</Link>
    </div>
);

export default Homepage;
