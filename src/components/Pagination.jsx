import React, { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useBlog from "../hooks/useBlog";

export default function Pagination() {
  const { setCurrentPage, currentPage, totalPages, setLoading } = useBlog();

  const handlePrev = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setCurrentPage, setLoading]);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setCurrentPage, setLoading, totalPages]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleNext, handlePrev]);

  return (
    <nav className="flex items-center gap-2" aria-label="Pagination">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md disabled:text-gray-400 disabled:hover:bg-transparent transition-colors text-sm"
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
        <span className="hidden sm:inline">Previous</span>
      </button>

      <span className="px-4 py-2 text-gray-700 font-medium text-sm">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md disabled:text-gray-400 disabled:hover:bg-transparent transition-colors text-sm"
        aria-label="Next page"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}
