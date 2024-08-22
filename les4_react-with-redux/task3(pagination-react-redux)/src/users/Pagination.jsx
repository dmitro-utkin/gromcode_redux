import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  // Создаем переменные на основе свойств компонента
  const isPrevPageAvailable = currentPage > 0;
  const isNextPageAvailable = (currentPage + 1) * itemsPerPage < totalItems;

  return (
    <div className="pagination">
      <button 
        className={`pagination-button ${!isPrevPageAvailable ? 'disabled' : ''}`} 
        onClick={goPrev} 
        disabled={!isPrevPageAvailable}
      >
        {isPrevPageAvailable ? '<' : ''} Prev
      </button>
      <span className="pagination-page">{currentPage + 1}</span>
      <button 
        className={`pagination-button ${!isNextPageAvailable ? 'disabled' : ''}`} 
        onClick={goNext} 
        disabled={!isNextPageAvailable}
      >
        Next {isNextPageAvailable ? '>' : ''}
      </button>
    </div>
  );
};

export default Pagination;
