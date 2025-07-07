const Footer = () => {
  return (
    <footer className="bg-[#dc2626] text-gray-200 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div>
          <h2 className="text-lg font-semibold">Speedee Music</h2>
          <p className="text-sm">© {new Date().getFullYear()} Speedee Music Inc. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="/about" className="hover:text-white">About</a>
          <a href="/contact" className="hover:text-white">Contact</a>
          <a href="/privacy" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
