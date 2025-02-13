import React from "react";
import { Button } from "react-bootstrap";
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  if (totalPages <= 1) return null;


  const maxPageButtons = 10;
  
  
  let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
  if (endPage - startPage < maxPageButtons - 1) {
    startPage = Math.max(1, endPage - maxPageButtons + 1);
  }

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="pagination-container text-center mt-4">
      {currentPage > 1 && (
        <Button onClick={goToPrevPage} className="pagination-btn">
          Prev
        </Button>
      )}

      
      {[...Array(endPage - startPage + 1)].map((_, index) => {
        const pageNumber = startPage + index;
        return (
          <Button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={`pagination-btn ${
              currentPage === pageNumber ? "active-page" : ""
            }`}
          >
            {pageNumber}
          </Button>
        );
      })}

      
      {currentPage < endPage && (
        <Button onClick={goToNextPage} className="pagination-btn">
          Next
        </Button>
      )}
    </div>
  );
};

export default Pagination;
