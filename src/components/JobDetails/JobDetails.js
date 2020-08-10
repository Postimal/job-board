import React from 'react';
import { FaLaptop, FaTimes } from 'react-icons/fa';

import './JobDetails.scss';

const JobDetails = ({ details, setShowDetails }) => {
  const markup = param => {
    return { __html: param };
  };

  return (
    <div className="modal-wrapper">
      <div className="modal__header">
        <div className="modal__date">
          <FaLaptop />
          <span>Data zakończenia {details.expiryDate}</span>
        </div>
        <div className="modal__links-box">
          <a className="modal__link" href={details.applicationLink}>
            Aplikuj bezpośrednio
          </a>
          <a className="modal__link" href={details.urlWithLayout}>
            Więcej o stanowisku
          </a>
        </div>
      </div>
      <h4 className="modal__heading">Wymagania</h4>
      <div dangerouslySetInnerHTML={markup(details.requirements)} />
      <span
        className="modal__cancel"
        onClick={() => setShowDetails(false)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            setShowDetails(false);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="cancel modal"
      >
        <FaTimes />
      </span>
    </div>
  );
};

export default JobDetails;
