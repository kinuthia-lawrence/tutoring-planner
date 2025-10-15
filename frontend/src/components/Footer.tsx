const Footer = () => (
  <footer className="w-full border-t border-gray-200 px-4 py-1 flex flex-col md:flex-row md:items-center md:justify-between bg-white text-black dark:bg-gray-950 dark:text-gray-200 text-sm">
    <div>&copy; {new Date().getFullYear()} TutorNova, Inc. All rights reserved.</div>
    <div className="hidden md:flex md:w-1/2 justify-end gap-6 mt-2 md:mt-0">
      <a href="#features" className="hover:text-blue-700" title="View Features section">Features</a>
      <a href="#pricing" className="hover:text-blue-700" title="View Pricing section">Pricing</a>
      <a href="#faq" className="hover:text-blue-700" title="View Frequently Asked Questions">FAQ</a>
    </div>
  </footer>
);

export default Footer;
