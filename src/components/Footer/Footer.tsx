import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          
          {/* Logo & Deskripsi */}
          <div>
            <h2 className="text-2xl font-bold text-white">Penyewaan Alat</h2>
            <p className="mt-2 text-sm text-gray-400">
              Solusi terbaik untuk penyewaan alat berkualitas dengan harga terbaik.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-lg font-semibold text-white">Navigasi</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-white">Beranda</a></li>
              <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-white">Layanan</a></li>
              <li><a href="#" className="hover:text-white">Kontak</a></li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h3 className="text-lg font-semibold text-white">Ikuti Kami</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebook /></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Penyewaan Alat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
