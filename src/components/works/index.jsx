import React from "react";

// --- DATA CONTOH PENGALAMAN KERJA & MAGANG ---
// Anda bisa dengan mudah mengubah atau menambah data di sini.
const workExperiences = [
  {
    id: 1,
    company: "-",
    position: "Guru Privat Lukis, Gambar, Vocal & Mengjasi",
    type: "Part Time",
    location: "Bandung, Indonesia",
    period: "Agustus 2024 - Sekarang",
    description: [
      "Mengajar les privat seni rupa (lukis dan gambar), voak, dan mengaji. Mencakup teori, teknik, serta pembentukan keterampilan sesuai kebutuhan peserta",
    ],
  },
  {
    id: 2,
    company: "-",
    position: "Customer Service Batik Prasasti",
    type: "Part Time",
    location: "Bandung, Indonesia (Remote)",
    period: "Juni 2023 - Desember 2023",
    description: ["Menerima pesanan setiap pelanggan"],
  },
  {
    id: 3,
    company: "-",
    position: "Publik Relationship Industri Kreatif (Needleloops)",
    type: "Paruh Waktu",
    location: "Remote",
    period: "Januari 2023 - Mei 2023",
    description: ["Pengelola hubungan komunikasi kerja sama berbagai mitra"],
  },
  {
    id: 4,
    company: "-",
    position: "Reseller, Dropshiper, dan Affiliator",
    type: "Paruh Waktu",
    location: "Remote",
    period: "Januari 2023 - Mei 2023",
    description: [
      "Menjalankan penjualan produk sebagai reseller, dropshiper, dan affiliator yang mencakup promosi, manajemen pesanan, dan layanan pelanggan.",
    ],
  },
];

// Komponen untuk ikon centang pada list deskripsi
const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-green-600 mr-2 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

// --- HALAMAN UTAMA PENGALAMAN KERJA & MAGANG ---
export default function PengalamanKerjaPage({ ref }) {
  return (
    <section
      ref={ref}
      className="scroll-mt-[80px] w-full my-20 px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col items-center"
    >
      {/* Header Halaman */}
      <div className="max-w-3xl text-center space-y-3 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">
          Pengalaman Kerja & Magang
        </h1>
        <p className="text-gray-700">
          Perjalanan karir profesional saya dalam menerapkan keahlian di dunia
          nyata, baik melalui magang maupun pekerjaan purnawaktu.
        </p>
      </div>

      {/* Container untuk Timeline */}
      <div className="relative w-full max-w-4xl">
        {/* Garis Vertikal Timeline */}
        <div className="absolute left-4 top-2 h-full border-l-2 border-gray-200"></div>

        {/* Mapping data pengalaman untuk membuat setiap item di timeline */}
        <div className="space-y-12">
          {workExperiences.map((exp) => (
            <div key={exp.id} className="relative pl-12">
              {/* Titik pada Timeline */}
              <div className="absolute left-4 top-2 -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white"></div>

              {/* Konten Item Timeline */}
              <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                <h2 className="text-xl font-bold text-gray-900">
                  {exp.position}
                </h2>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-md font-semibold text-gray-700 mb-4">
                  <span>{exp.company}</span>
                  <span className="text-gray-300">•</span>
                  {/* Badge untuk jenis pekerjaan */}
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {exp.type}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span>{exp.location}</span>
                </div>

                {/* Deskripsi dalam bentuk list */}
                <ul className="space-y-2">
                  {exp.description.map((point, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <CheckIcon />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
