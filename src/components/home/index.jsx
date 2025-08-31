import React from "react";

// Komponen untuk ikon pada tombol
const ArrowIcon = () => (
  <svg
    className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    ></path>
  </svg>
);

// Kita bisa mendefinisikan detail WhatsApp di luar komponen agar lebih rapi
const phoneNumber = "6285624947874"; // Gunakan format internasional tanpa '+'
const message = "Halo Herawati, saya tertarik dengan jasa Anda."; // Pesan default
const encodedMessage = encodeURIComponent(message); // Mengubah spasi dan karakter lain menjadi format URL

// Membuat URL WhatsApp lengkap
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

export default function HomePage({ ref }) {
  return (
    <section
      ref={ref}
      className="min-h-screen w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-12 px-4 md:px-8 lg:px-16 xl:px-20 py-10 md:py-0"
    >
      {/* Kolom Kiri: Teks & Call to Action */}
      <div className="w-full lg:w-1/2 flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start">
        <p className="text-lg font-medium text-gray-600">
          Selamat datang di Portofolio Saya
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Halo, Saya <span className="text-[#47240E]">Herawati</span>
          <span className="block text-2xl md:text-3xl font-medium text-gray-500 mt-2">
            Desainer & Kreator Produk Kreatif Berbasis Tekstil
          </span>
        </h1>

        <p className="max-w-md text-gray-600 leading-relaxed">
          Dengan perpaduan seni, keterampilan teknis, dan nilai keberlanjutan,
          saya menciptakan karya yang tidak hanya estetis, tetapi juga
          bermanfaat bagi lingkungan dan masyarakat. Mulai dari desain busana,
          aksesori, hingga produk kreatif berbahan limbah tekstil, setiap karya
          saya lahir dari eksplorasi ide dan perhatian pada detail.
        </p>

        {/* --- PERUBAHAN DI SINI --- */}
        {/* Mengubah <button> menjadi <a> dengan href ke URL WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#47240E] text-white py-3 px-6 self-center lg:self-start rounded-lg font-semibold hover:bg-[#5a3b1c] transition-colors cursor-pointer my-2 inline-flex items-center group shadow-lg hover:shadow-xl"
        >
          Hubungi Saya
          <ArrowIcon />
        </a>
      </div>

      {/* Kolom Kanan: Gambar */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="relative w-full max-w-sm md:max-w-md">
          <div className="absolute inset-0 bg-amber-100 rounded-full blur-2xl opacity-50 transform -rotate-12"></div>
          <div className="relative">
            <img
              src="https://res.cloudinary.com/djxacnifu/image/upload/v1755070845/home-pic_ttwbke.jpg"
              alt="Foto Herawati, seorang makeup artist profesional"
              className="w-full h-auto object-cover rounded-xl shadow-2xl aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
