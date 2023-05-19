import React from "react";

const GallerySection = () => {
  const toyImages = [
    {
      id: 1,
      src: "toy1.jpg",
      alt: "Toy 1",
    },
    {
      id: 2,
      src: "toy2.jpg",
      alt: "Toy 2",
    },
    {
      id: 3,
      src: "toy3.jpg",
      alt: "Toy 3",
    },
    {
      id: 4,
      src: "toy4.jpg",
      alt: "Toy 4",
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl text-center font-bold mb-8">
        Explore our Action Figure Toys
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/X4Fk6XT/marvel-spider-man-titan-hero-series-venom.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/bPTtzCH/download.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/GFvWd5V/9a48e51e-c244-44d5-9a31-87e597c826d5-302ae8a27adebc0c76423d1a523895e6.webp"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/g6GhxRp/4247c3b5-bedc-441e-967d-9df147298101.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/GpSKvTg/51sq-3-V5-GRL-AC-SL1024.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/TBfmYQm/download-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/HGMCxVF/Mc-Farlane-Toys-DC-Multiverse-Black-Adam-Black-Adam-7-in-Scale-Action-Figure.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/NpKsb1N/51-Tkw8d-IN-L.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/82bNqF1/Mc-Farlane-Toys-DC-Multiverse-Batman-The-Dark-Knight-Returns-Superman-7-in-Action-Figure.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/48zMtF1/1643639144-spiderman-1643639136.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/vsr5Nf4/AAAK347-AABY156-4-1600x.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/NVQ7DtW/qsod-MQ-s-Xbb-VBb1s4-LS0-Edy-Hardjo6.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
