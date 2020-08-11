import React from 'react';
import { FaLaptop, FaTimes } from 'react-icons/fa';
import { LinkComponent } from 'components';

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
          <LinkComponent
            href={details.applicationLink}
            text="Aplikuj bezpośrednio"
          />
          <LinkComponent
            href={details.urlWithLayout}
            text=" Więcej o stanowisku"
          />
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
