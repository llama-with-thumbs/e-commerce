import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size}) => (
    <article className={`${size} menu-item`}>
        
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})`}}>
        </div>

        <div className='content'>
            <h2 className='title'>{title.toUpperCase()}</h2>
            <h3 className='subtitle'>Shop now</h3>
        </div>
    </article>
);

export default MenuItem; 