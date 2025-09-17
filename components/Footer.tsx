import { FaTwitter, FaGithub, FaInstagram, FaDribbble } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-8 py-6 border-t border-gray-800 text-sm text-gray-500">
      <p>© 2025 Glitche. All rights reserved.</p>
      <div className="flex space-x-4 text-lg">
        <a href="#" className="hover:text-white">
          <FaDribbble />
        </a>
        <a href="#" className="hover:text-white">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-white">
          <FaGithub />
        </a>
        <a href="#" className="hover:text-white">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}
