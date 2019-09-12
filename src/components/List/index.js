import React from 'react';
import './index.css';
import Avatar from '../Avatar/index';


/**
 *
 * <List />, a functional component to display circular image.
 */
const List = props => {
  const { list } = props;
  



  return (
    <form>
          <div>
       
            {list.map(item =>   <div className="row align-at-end"><div className="center"><Avatar name={item.name}></Avatar>
    
    <div className="px-5">{item.name}</div>
    </div>
    <div> {item.email}</div></div>)}
      
        </div>

     
        </form>
  );
};


export default List;
