import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SearchPortal({ isOpen, results, onClose, onSelect }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute z-50 mt-2 w-full sm:w-64 bg-white border border-gray-200 rounded-lg shadow-lg overflow-y-auto max-h-64"
        >
          <ul className="divide-y divide-gray-100">
            {results.length > 0 ? (
              results.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    onSelect(item.id);
                    onClose();
                  }}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                >
                  <h3 className="font-medium text-gray-900 truncate">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 truncate">{item.body}</p>
                </li>
              ))
            ) : (
              <li className="text-gray-500 italic p-3">No results found.</li>
            )}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
