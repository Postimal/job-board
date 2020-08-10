import React from 'react';

const FilterButton = ({ category, onClick, filter, currentFilter }) => {
  return (
    <button
      className={
        currentFilter === filter.toLowerCase()
          ? 'category__button active'
          : 'category__button'
      }
      name="category"
      value={`${category}`}
      onClick={() => onClick(filter.toLowerCase())}
    >
      {category}
    </button>
  );
};

export default FilterButton;
