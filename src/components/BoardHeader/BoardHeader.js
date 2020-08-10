import React from 'react';
import { Loader, FilterButton } from 'components';

import './BoardHeader.scss';

const BoardHeader = ({
  jobsCategories,
  error,
  loading,
  onClick,
  currentFilter,
}) => {
  return (
    <>
      {error && <div>Error: {error}</div>}
      {loading && <Loader />}
      {jobsCategories &&
        jobsCategories.map(category => (
          <FilterButton
            key={category}
            category={category}
            filter={category}
            currentFilter={currentFilter}
            onClick={onClick}
          />
        ))}
      {jobsCategories && (
        <button
          autoFocus
          className="category__button"
          onClick={() => onClick(false)}
        >
          Wszystkie Oferty
        </button>
      )}
    </>
  );
};

export default BoardHeader;
