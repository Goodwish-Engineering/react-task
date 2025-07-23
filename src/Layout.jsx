import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import BlogList from "./components/BlogList";
import useBlog from "./hooks/useBlog";
import { useState } from "react";
import Portal from "./components/Portal";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout() {
  const { posts } = useBlog();
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(null);

  function handleOpenModal(id) {
    setModal(true);
    const requiredData = posts.filter((item) => item.id === id);
    setData(requiredData);
  }
  return (
    <>
      <AnimatePresence>
        {modal && (
          <Portal>
            <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6"
              >
                <button
                  onClick={() => setModal(false)}
                  className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-xl"
                  aria-label="Close modal"
                >
                  ✕
                </button>

                <h2 className="text-xl font-bold text-gray-900 mb-4 break-words">
                  {data?.[0]?.title}
                </h2>
                <hr />
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {data?.[0]?.body}
                </p>
                <hr />
                <div className="flex items-center gap-1 text-sm text-gray-700 mt-2">
                  <p>You can use</p>
                  <kbd className="px-1.5 py-0.5 bg-black text-white rounded">
                    esc
                  </kbd>
                  <p>to close the modal</p>
                </div>
              </motion.div>
            </div>
          </Portal>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Header handleOpenModal={handleOpenModal} />

        {/* Main Content Area */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
              <Sidebar handleOpenModal={handleOpenModal} />
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <BlogList
                handleOpenModal={handleOpenModal}
                setModal={setModal}
                modal={modal}
              />

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <Pagination />
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
