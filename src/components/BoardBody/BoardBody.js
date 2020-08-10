import React from 'react';
import { JobOffer, Loader } from 'components';

const BoardBody = ({ jobs, loading, currentFilter }) => {
  return (
    <>
      {loading && <Loader />}
      {jobs && (
        <ul>
          {jobs
            .filter(job =>
              currentFilter
                ? job.category[0].toLowerCase() === currentFilter
                : job
            )
            .map(job => (
              <JobOffer job={job} key={job.url} />
            ))}
        </ul>
      )}
    </>
  );
};

export default BoardBody;
