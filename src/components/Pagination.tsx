import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useBlogStore } from "../store/blogStore";
import React from "react";

interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPosts,
  postsPerPage,
}) => {
  const { currentPage, setCurrentPage } = useBlogStore();
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      // Case 1: Less than or equal to 7 pages → show all
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Case 2: More than 7 pages → show ellipsis format
      if (currentPage <= 4) {
        // Beginning section: show first 5, ellipsis, and last page
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        // Ending section: show first page, ellipsis, and last 5
        pages.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        // Middle section: show first, ellipsis, current ±1, ellipsis, last
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-1 flex-wrap px-4 py-4">
      <button
        onClick={() => setCurrentPage(currentPage - 1)} //go to previous page
        disabled={currentPage === 1}
        className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaAngleLeft />
      </button>

      {/* dynamically generates page buttons */}
      {generatePageNumbers().map((page, idx) =>
        typeof page === "number" ? (
          <button
            key={idx}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-2 text-sm sm:text-base rounded-md border ${
              currentPage === page
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={idx} className="px-2 py-2 text-gray-400">
            {page}
          </span>
        )
      )}

      <button
        onClick={() => setCurrentPage(currentPage + 1)} //move to next page
        disabled={currentPage === totalPages}
        className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};
