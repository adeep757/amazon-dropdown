import React from 'react';
import './index.css';

const Avatar = props => {
    const { name, style, className, textStyle } = props;

    const nameSplit = name.split(' ');
    let initials = '';
    if (name.length)
        initials =
            nameSplit.length > 1
                ? nameSplit[0][0].toUpperCase() + nameSplit[nameSplit.length - 1][0].toUpperCase()
                : nameSplit[0][0].toUpperCase();

    return (
        <div className={`avatar-circle ${className}`} style={style}>
            <span style={textStyle} className="initials">
                {initials}
            </span>
        </div>
    );
};

export default Avatar;
