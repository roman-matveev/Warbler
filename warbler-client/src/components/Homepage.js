import React from 'react';
import {Link} from 'react-router-dom';
import MessageFeed from './MessageFeed';

const Homepage = ({currentUser}) => {
    if (!currentUser.isAuthenticated) {
        return (
            <div className="home-hero">
                <h1>Welcome to Warbler</h1>
                <h4>A tiny network for big ideas</h4>
                <Link to='/signup' className='btn btn-primary'>Join today!</Link>
            </div>
        );
    }

    return (
        <div>
            <MessageFeed profileImageUrl={currentUser.user.profileImageUrl}
                username={currentUser.user.username}
            />
        </div>
    );
}

export default Homepage;
