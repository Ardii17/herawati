import React from "react";

// --- DATA CONTOH PENGALAMAN ORGANISASI ---
// Anda bisa dengan mudah mengubah atau menambah data di sini.
const organizationalExperiences = [
  {
    id: 1,
    organization: "Himpunan Mahasiswa Rekan Kriya Tekstil (HIMA REKAT)",
    position: "Anggota Departemen Minat dan Bakat",
    period: "Februari 2022 – Maret 2023",
    description: [
      "Menyusun strategi serta menjalankan program kerja departemen.",
      "Mengelola kegiatan pelatihan fashion show dan perlombaan kreatif.",
      "Menjadi penghubung informasi kegiatan pameran lintas kampus.",
      "Berkontribusi dalam program yang berkaitan dengan desain dan pengembangan kreativitas mahasiswa.",
    ],
  },
  {
    id: 2,
    organization: "Unit Kegiatan Mahasiswa (UKM) Paduan Suara",
    position:
      "Divisi Kreasi Busana Mempersiapkan konsep dan tampilan busana untuk anggota paduan suara.",
    period: "2022 - 2023",
    description: [
      "Menjadi stylist dalam penampilan panggung agar sesuai tema dan karakter acara.",
    ],
  },
  {
    id: 3,
    organization: "Pameran TPB “Upagga Artista”",
    position: "Ketua Pelaksana",
    period: "2021",
    description: [
      "Memimpin persiapan dan pelaksanaan pameran karya mahasiswa baru Kriya.",
      "Mengatur koordinasi tim untuk menampilkan karya secara kreatif dan representatif.",
      "Mengelola jalannya acara agar sesuai dengan visi pameran.",
    ],
  },
  {
    id: 4,
    organization: "Pameran Fotografi “SEFOKA”",
    position: "Ketua Divisi Acara",
    period: "2023",
    description: [
      "Merancang konsep acara pameran fotografi mahasiswa.",
      "Mengatur alur acara, termasuk pembukaan, sesi pameran, hingga penutupan.",
      "Berkoordinasi dengan divisi lain untuk kelancaran keseluruhan acara.",
    ],
  },
  {
    id: 5,
    organization: "Hizbul Wathan (HW) SMA",
    position: "Ketua Kobilah Perempuan",
    period: "2019 - 2020",
    description: [
      "Mengatur kegiatan organisasi kepanduan tingkat SMA.",
      "Membina anggota perempuan dalam kegiatan latihan, kedisiplinan, dan pengembangan karakter.",
      "Mengkoordinasi pelaksanaan kegiatan internal maupun eksternal sekolah.",
    ],
  },
  {
    id: 6,
    organization: "Ikatan Pelajar Muhammadiyah (IPM) SMA",
    position: "Ketua Divisi Kader",
    period: "2018 - 2019",
    description: [
      "Bertanggung jawab atas perekrutan, pembinaan, dan pelatihan anggota baru.",
      "Mengelola program kaderisasi untuk meningkatkan kepemimpinan dan organisasi siswa.",
      "Berperan dalam menjaga keberlangsungan regenerasi organisasi.",
    ],
  },
  {
    id: 7,
    organization: "-",
    position: "Vokalis Band SMA",
    period: "2018 - 2020",
    description: [
      "Membawakan lagu di berbagai genre sesuai kebutuhan acara.",
      "Mengatur koordinasi tim untuk menampilkan karya secara kreatif dan representatif.",
      "Mengelola jalannya acara agar sesuai dengan visi pameran.",
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
