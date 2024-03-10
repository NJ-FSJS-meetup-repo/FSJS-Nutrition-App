const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
      <div className="mb-2">
        <a href="/" className="text-xl font-bold">NutriApp</a>
      </div>
      <div className="mb-2">
        © {new Date().getFullYear()} NutriApp. All rights reserved.
      </div>
      <div className="flex justify-center space-x-4 mb-2">
        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
        <a href="#" className="hover:text-gray-400">Terms of Service</a>
      </div>
      <div className="flex justify-center space-x-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
