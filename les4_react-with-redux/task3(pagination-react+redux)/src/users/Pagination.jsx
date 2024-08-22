// src/users/Pagination.jsx
import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage > 0;
  const isNextPageAvailable = (currentPage + 1) * itemsPerPage < totalItems;

  return (
    <div>
      <button className='btn' onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && '<'} Prev
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className='btn' onClick={goNext} disabled={!isNextPageAvailable}>
        Next {isNextPageAvailable && '>'}
      </button>
    </div>
  );
};

export default Pagination;