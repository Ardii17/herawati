import React from "react";
import { Roboto_Slab } from "next/font/google";

// Menggunakan font yang sama dengan Navbar untuk konsistensi
const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["700"], // Cukup ambil weight 'bold' untuk nama
  variable: "--font-roboto",
});

// --- Komponen Ikon Media Sosial (untuk kebersihan kode) ---

const InstagramIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 012.153 2.153c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-2.153 2.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-2.153-2.153c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 012.153-2.153c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zm-1.04 4.82a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 9.75a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.5a3 3 0 110-6 3 3 0 010 6z"
      clipRule="evenodd"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

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
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
