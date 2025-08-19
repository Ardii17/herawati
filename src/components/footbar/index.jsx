import React from "react";
import { Roboto_Slab } from "next/font/google";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

// Menggunakan font yang sama dengan Navbar untuk konsistensi
const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["700"], // Cukup ambil weight 'bold' untuk nama
  variable: "--font-roboto",
});

// --- KOMPONEN FOOTER UTAMA ---
export default function Footer() {
  // Mendapatkan tahun saat ini secara dinamis
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#47240E] text-white py-6">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        {/* Container utama dengan Flexbox */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Elemen 1: Nama Portofolio */}
          <div className="text-center md:text-left">
            <a
              href="/"
              className={`${roboto_slab.className} text-xl font-bold tracking-wide`}
            >
              Herawati
            </a>
          </div>

          {/* Elemen 2: Copyright */}
          <div className="text-center text-sm text-gray-300">
            <p>Copyright © {currentYear} Herawati. All Rights Reserved.</p>
          </div>

          {/* Elemen 3: Logo Media Sosial */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
