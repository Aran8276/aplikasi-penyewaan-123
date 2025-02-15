import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { navData } from "../Header/Header.data";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white">Penyewaan Alat</h2>
            <p className="mt-2 text-sm w-[375px] text-gray-400">
              Solusi terbaik untuk penyewaan alat berkualitas dengan harga
              terbaik.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Navigasi</h3>
            <ul className="mt-2 space-y-2">
              {navData.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="hover:text-white transition-all"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Ikuti Kami</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-xl transition-all"
              >
                <FaFacebook />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-xl transition-all"
              >
                <FaTwitter />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-xl transition-all"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Aplikasi Penyewaan Alat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
