import React from 'react';
import { JobOffer } from 'components';

const BoardBody = ({ jobs, loading }) => {
  return (
    <>
      {loading && <div style={{ textAlign: 'center' }}>...loading...</div>}
      {jobs && (
        <ul>
          {jobs.map((job) => (
            <JobOffer job={job} key={job.url} />
          ))}
        </ul>
      )}
    </>
  );
};

export default BoardBody;
