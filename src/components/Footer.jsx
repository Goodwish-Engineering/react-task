export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-gray-600 text-sm">
              © 2025 TechBlog. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="pointer-events-none text-gray-400 cursor-not-allowed text-gray-600 hover:text-blue-600 text-sm "
            >
              About
            </a>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="pointer-events-none text-gray-400 cursor-not-allowed text-gray-600 hover:text-blue-600 text-sm"
            >
              Contact
            </a>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="pointer-events-none text-gray-400 cursor-not-allowed text-gray-600 hover:text-blue-600 text-sm"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
