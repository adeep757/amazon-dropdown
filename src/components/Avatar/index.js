import React from 'react';
import './index.css';


/**
 *
 * <Avatar />, a functional component to display circular image.
 */
const Avatar = props => {
  const { name, style, className, id } = props;
  


  const nameSplit = name.split(' ');
  let initials = '';
  if (name.length)
    initials =
      nameSplit.length > 1
        ? nameSplit[0][0].toUpperCase() +
          nameSplit[nameSplit.length - 1][0].toUpperCase()
        : nameSplit[0][0].toUpperCase();

  return (
    <div>
      <div
        id={id}
        className={`avatar-circle ${className}`}
        style={style}

      >
        <div className="d-flex justify-content-center w-100 h-100 align-items-center p-3">
          <span className="initials">{initials}</span>
        </div>
      </div>
    </div>
  );
};


export default Avatar;
