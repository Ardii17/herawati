"use client";

import React, { useState, useEffect, forwardRef } from "react";

const CertificateCard = ({ imgSrc, alt, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex flex-col space-y-2 group">
        <div className="overflow-hidden rounded-lg">
          <img
            src={imgSrc}
            alt={alt}
            onClick={openModal}
            loading="lazy"
            className="rounded-lg w-full object-cover aspect-video cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div>
          <h2 className="font-semibold text-lg">{title}</h2>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
      {isModalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4 cursor-pointer"
        >
          <span className="absolute top-4 right-6 text-white text-4xl font-bold hover:text-gray-300">
            &times;
          </span>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative p-2 bg-white rounded-lg shadow-xl cursor-default"
          >
            <img
              src={imgSrc}
              alt={alt}
              className="block max-w-[90vw] max-h-[90vh] rounded"
            />
          </div>
        </div>
      )}
    </>
  );
};

const CertificatePage = forwardRef((props, ref) => {
  const [certificatesData, setCertificatesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  // Fetch dari Cloudinary API
  useEffect(() => {
    fetch(`/api/get-images?folder=images/certificates`)
      .then((res) => res.json())
      .then((data) => {
        const mappedData = data.map((item, index) => ({
          id: index,
          imgSrc: item.secure_url,
          alt: item.public_id.split("/").pop(),
          title: item.public_id.split("/").pop(),
          description: "Sertifikat yang telah saya peroleh",
        }));
        setCertificatesData(mappedData);
      });
  }, []);

  // Paginasi
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCertificates = certificatesData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(certificatesData.length / itemsPerPage);

  const handleNextPage = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const handlePrevPage = () =>
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <section
      ref={ref}
      className="scroll-mt-[80px] w-full my-20 px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col items-center space-y-10"
    >
      <div className="max-w-2xl text-center space-y-3">
        <h1 className="text-3xl font-bold">Sertifikat Saya</h1>
        <p className="text-gray-700">
          Berikut adalah beberapa sertifikasi dan kursus yang telah saya
          selesaikan untuk meningkatkan keahlian saya.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {currentCertificates.map((cert) => (
          <CertificateCard
            key={cert.id}
            imgSrc={cert.imgSrc}
            alt={cert.alt}
            title={cert.title}
            description={cert.description}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="bg-[#47240E] text-white py-2 px-4 rounded font-medium hover:bg-[#5a3b1c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Sebelumnya
          </button>
          <span className="font-semibold text-gray-700">
            Halaman {currentPage} dari {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="bg-[#47240E] text-white py-2 px-4 rounded font-medium hover:bg-[#5a3b1c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Berikutnya
          </button>
        </div>
      )}
    </section>
  );
});

CertificatePage.displayName = "CertificatePage";
export default CertificatePage;
