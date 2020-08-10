import React, { useState } from 'react';
import { FaMapMarker, FaLaptop } from 'react-icons/fa';
import { JobDetails, Loader } from 'components';

import api from '../../api';

import './JobOffer.scss';

const JobOffer = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [jobDetails, setJobDetails] = useState(null);

  const fetchJobDetails = async id => {
    setIsLoading(true);
    try {
      const res = await api.post('offer/detail/pl', { ref_id: id });
      setJobDetails(res.data.job);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  return (
    <li>
      <div className={!showDetails ? 'job-item' : 'job-item active'}>
        <div className="logo-container">
          <img
            alt="logo ppl lot"
            src="data:image/png;base64,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"
          />
        </div>
        <a href={job.url} className="job-item__details">
          <div className="job-item__title">
            <h4 className="header">{job.title}</h4>
            <div className="job-item__date">
              <FaLaptop />
              <span>Data dodania {job.date}</span>
            </div>
          </div>
          <div className="job-item__meta">
            <div className="company">PLL LOT</div>
            <div className="job-item__location">
              <FaMapMarker />
              {job.country} / {job.location}
            </div>
          </div>
        </a>
        <button
          className="job-item__more-info-modal"
          onClick={() => {
            setShowDetails(!showDetails);
            !jobDetails && fetchJobDetails(job.reference);
          }}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              setShowDetails(!showDetails);
              !jobDetails && fetchJobDetails(job.reference);
            }
          }}
        >
          + <span className="open-modal-text">więcej szczegółow</span>
        </button>
      </div>
      {isLoading && <Loader />}
      {error && <h3>{error.message}</h3>}
      {showDetails && jobDetails && (
        <JobDetails details={jobDetails} setShowDetails={setShowDetails} />
      )}
    </li>
  );
};

export default JobOffer;
