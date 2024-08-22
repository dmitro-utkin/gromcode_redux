import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage > 0;
  const isNextPageAvailable = (currentPage + 1) * itemsPerPage < totalItems;

  return (
    <div className="pagination">
      <button onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && '<'} Prev
      </button>
      <span>{currentPage + 1}</span>
      <button onClick={goNext} disabled={!isNextPageAvailable}>
        Next {isNextPageAvailable && '>'}
      </button>
    </div>
  );
};

export default Pagination;