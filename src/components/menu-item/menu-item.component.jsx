import React from 'react';
import { useNavigate, useMatch } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, navigate, linkUrl, match}) => (
    <div 
        className={`${size} menu-item`}
        onClick={() => navigate(`${linkUrl}`)}
    >
        <div className='background-image'
            style={{backgroundImage: `url(${imageUrl})`}}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export function withRouter(MenuItem) {
    return (props) => {
        const navigate = useNavigate();
        const match = useMatch();
        return <MenuItem navigate={navigate} match={match} {...props} />
    }
}
export default MenuItem;
