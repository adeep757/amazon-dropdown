import React from 'react';
import './index.css';
import Avatar from '../Avatar/index';

const ListItem = props => {
    const { item, className, onClick } = props;

    return (
        <div key={item.name} className={`row row-flex ${className}`} onClick={()=>onClick(item.name)}>
            <div className="col-md-6 row-flex">
                <Avatar style={styles.avatar} textStyle={styles.title} name={item.name}></Avatar>
                <div className="name">{item.name}</div>
            </div>
            <div className="col-md-6 email"> {item.email}</div>
        </div>
    );
};

const styles = {
    avatar: {
        width: '25px',
        height: '25px'
    },
    title: {
        fontSize: '10px'
    }
};

export default ListItem;
