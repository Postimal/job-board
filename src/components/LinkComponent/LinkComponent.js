import React from 'react';

const LinkComponent = ({ href, text }) => {
  return (
    <a className="modal__link" href={href}>
      {text}
    </a>
  );
};

export default LinkComponent;
