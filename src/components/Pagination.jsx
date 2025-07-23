

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  return (
    <div className="pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>« Prev</button>

      <span style={{ margin: '0 10px' }}>
        {currentPage}/{totalPages}
      </span>

      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next »</button>
    </div>
  );
}
