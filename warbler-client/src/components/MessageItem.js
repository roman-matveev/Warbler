import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import DefaultProfileImage from '../images/default.jpg';

const MessageItem = ({date, profileImageUrl, text, username, deleteMessage, isCorrectUser}) => (
    <div>
        <li className="list-group-item">
            <img src={profileImageUrl || DefaultProfileImage}
                alt={username}
                height='100' width='100'
                className='feed-avatar'
            />
            <div className="message-area">
                <Link to='/'>@{username} &nbsp;</Link>
                <span className="text-muted">
                    <Moment className="text-muted" format='MMM Do[,] YYYY'>{date}</Moment>
                </span>
                <p>{text}</p>
                {isCorrectUser && (
                    <a className='btn btn-outline-danger btn-sm' onClick={deleteMessage}>Delete</a>
                )}
            </div>
        </li>
    </div>
);

export default MessageItem;
