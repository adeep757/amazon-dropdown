import React from 'react';
import ListItem from '../ListItem';
import './index.css';

/**
 *
 * <Dropdown />, a functional component to display circular image.
 */
const Dropdown = props => {
    const { items, onClick } = props;
  

    return (
        <ul className="custom-dropdown">
            {items.map(item => (
                <ListItem  key={item.name} onClick={onClick} className="list-item" item={{ name: item.name, email: item.email }} />
            ))}
        </ul>
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



export default Dropdown;
