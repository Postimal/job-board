import React from 'react';

const BoardHeader = ({ jobsCategories, error, loading }) => {
  // console.log(jobsCategories);
  return (
    <>
      {error && <div>Error: {error}</div>}
      {loading && <div style={{ textAlign: 'center' }}>...loading...</div>}

      {jobsCategories &&
        jobsCategories.map((category) => (
          <div className="category-box" key={category}>
            <div className="category-box__title">
              <button>{category}</button>
            </div>
          </div>
        ))}
    </>
  );
};

export default BoardHeader;
