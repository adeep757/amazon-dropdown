import React from 'react';


/**
 *
 * <Avatar />, a functional component to display circular image.
 */
const Avatar = props => {
  const { src, width, style, alt } = props;
  const avatarStyle = {
    borderRadius: '50%',
    width,
    height: width,
    backgroundColor: '#c9c6c6',
  };

  return <img src={src} style={{ ...avatarStyle, ...style }} alt={alt} />;
};


export default Avatar;
