import React from 'react';

import './Title.scss';

const Title = ({ title, hSize = 1 }) => {
  return hSize === 1 ? (
    <h1 className="title">{title}</h1>
  ) : (
    <h2 className="title">{title}</h2>
  );
};

export default Title;
