import React, { Component } from 'react';
import Avatar from '../Avatar';
import './index.css';

const Chip = props => {
    const { title,  keyValue, onClick, flag } = props;

    return (
        <div key={keyValue} className={flag?"chip-danger":"chip"}>
            <Avatar name={title} style={styles.avatar} />
            <div className="title">{title}</div>
            <i onClick={()=>onClick(title)} className="fa fa-times-circle"></i>
        </div>
    );
};

const styles = {
    avatar: {
        width: '30px',
        height: '30px'
    }
};

export default Chip;
