const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 py-4 flex items-center justify-center bottom-0 left-0">
      <p className="text-gray-700 text-sm">&copy; {new Date().getFullYear()} Blog App</p>
    </footer>
  );
};

export default Footer;
