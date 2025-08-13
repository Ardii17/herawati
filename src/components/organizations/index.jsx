import React from "react";

// --- DATA CONTOH PENGALAMAN ORGANISASI ---
// Anda bisa dengan mudah mengubah atau menambah data di sini.
const organizationalExperiences = [
  {
    id: 1,
    organization: "Badan Eksekutif Mahasiswa (BEM) Universitas Koding",
    position: "Ketua Departemen Komunikasi & Informasi",
    period: "Maret 2023 - April 2024",
    description: [
      "Mengelola strategi komunikasi internal dan eksternal BEM.",
      "Bertanggung jawab atas semua publikasi media sosial dan website resmi.",
      "Memimpin tim yang terdiri dari 15 anggota untuk menjalankan program kerja departemen.",
      "Berhasil meningkatkan engagement media sosial sebesar 40% dalam satu periode.",
    ],
  },
  {
    id: 2,
    organization: "Himpunan Mahasiswa Teknik Informatika (HMTI)",
    position: "Anggota Divisi Pengembangan Web",
    period: "Februari 2022 - Maret 2023",
    description: [
      "Berkontribusi dalam pengembangan dan pemeliharaan website resmi HMTI.",
      "Mengadakan workshop mingguan tentang dasar-dasar HTML, CSS, dan JavaScript untuk anggota baru.",
      "Terlibat dalam panitia acara 'IT Festival 2022' sebagai koordinator tim teknis website.",
    ],
  },
  {
    id: 3,
    organization: "Unit Kegiatan Mahasiswa (UKM) Fotografi 'Lensa Kita'",
    position: "Sekretaris",
    period: "Januari 2021 - Januari 2022",
    description: [
      "Mengurus administrasi, surat-menyurat, dan arsip dokumen organisasi.",
      "Menyusun proposal kegiatan dan laporan pertanggungjawaban untuk setiap acara.",
      "Mengorganisir jadwal rapat rutin dan pameran foto tahunan.",
    ],
  },
];

// Komponen untuk ikon centang pada list deskripsi
const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-[#47240E] mr-2 flex-shrink-0"
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

// --- HALAMAN UTAMA PENGALAMAN ORGANISASI ---
export default function OrganisasiPage({ ref }) {
  return (
    <section
      ref={ref}
      className="scroll-mt-[80px] w-full my-20 px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col items-center"
    >
      {/* Header Halaman */}
      <div className="max-w-3xl text-center space-y-3 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">
          Pengalaman Organisasi
        </h1>
        <p className="text-gray-700">
          Perjalanan saya dalam berorganisasi telah membentuk kemampuan
          kepemimpinan, kerja tim, dan manajemen proyek.
        </p>
      </div>

      {/* Container untuk Timeline */}
      <div className="relative w-full max-w-4xl">
        {/* Garis Vertikal Timeline */}
        <div className="absolute left-4 top-2 h-full border-l-2 border-gray-200"></div>

        {/* Mapping data pengalaman untuk membuat setiap item di timeline */}
        <div className="space-y-12">
          {organizationalExperiences.map((exp) => (
            <div key={exp.id} className="relative pl-12">
              {/* Titik pada Timeline */}
              <div className="absolute left-4 top-2 -translate-x-1/2 w-4 h-4 bg-[#47240E] rounded-full border-4 border-white"></div>

              {/* Konten Item Timeline */}
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500 mb-1">{exp.period}</p>
                <h2 className="text-xl font-bold text-gray-800">
                  {exp.organization}
                </h2>
                <h3 className="text-md font-semibold text-[#47240E] mb-4">
                  {exp.position}
                </h3>

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
