// src/pages/Rsa.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const winners = [
  {
    name: 'Patricia Melendez (2017)',
    description:
      'Patricia Melendez was the Director of General Assembly Third Committee at GSUMUN 2017. She was selected to be the Director-General for GSUMUN 2018.',
    image: '/images/rsa/melendez.png',
  },
  {
    name: 'Kaycie Pitts (2018)',
    description:
      'Kaycie Pitts was the Director of General Assembly Third Committee at GSUMUN 2018. She then served as the Secretary-General at GSUMUN 2019.',
    image: '/images/rsa/pitts.png',
  },
  {
    name: 'Ben Belisle (2019)',
    description:
      'Ben Belisle was the Director of General Assembly Third Committee at GSUMUN 2019.',
    image: '/images/rsa/belisle.jpg',
  },
  {
    name: 'Noor al-Baghdadi (2022)',
    description:
      'Noor al-Baghdadi was the Director of General Assembly First Committee at GSUMUN 2022. She then served as the Director-General of GSUMUN Spring 2023, and Secretary-General of GSUMUN Fall 2023.',
    image: '/images/rsa/noor.png',
  },
  {
    name: 'Samiah Rahman (2023)',
    description:
      'Samiah Rahman was the Director of League of Arab States at GSUMUN 2023.',
    image: '/images/rsa/rahman.png',
  },
  {
    name: 'Noelle Mendoza (2024)',
    description:
      'Noelle Mendoza was awarded the RSA for her exceptional work as the Director for the Food and Agriculture Organization at GSUMUN 2024. She then served as the Director-General for GSUMUN 2025.',
    image: '/images/rsa/mendoza.jpg',
  }
];

const RsaPage = () => {
  return (
    <div className="pt-20 bg-[#ffffff] text-black min-h-screen px-6">
      <div className="max-w-5xl mx-auto text-center pb-20">
        <img
          src="/images/rsa/TRSA3.jpg"
          alt="Raya Siddiqi Award Logo"
          className="w-40 mx-auto mb-6"
        />

        <h1 className="text-4xl font-bold mb-2 font-sf-pro-display">The Raya Siddiqi Award</h1>
        <p className="text-lg text-slate-700 mb-12 font-sf-pro-rounded">
          for an Outstanding Director
        </p>

        <div className="text-left mb-12">
          <h2 className="text-2xl font-semibold mb-4 font-sf-pro-display">About the Award</h2>
          <p className="mb-4 font-helvetica-light">
            The Raya Siddiqi Award for an Outstanding Director was established in 2017 to honor the memory of Raya Siddiqi, one of the most distinguished leaders of our team. It is bestowed upon a committee Director in recognition of excellence in conference preparation as assessed by the Secretariat of GSUMUN.
          </p>
          <p className="mb-4 font-helvetica-light">
            The winner is presented a Golden Gavel and placed on the Secretariat for the following year's conference. Criteria for selection include:
          </p>
          <ul className="list-disc list-inside text-slate-700 space-y-2 font-helvetica-light">
            <li>Timely completion and superior execution of committee background guides</li>
            <li>Exemplary leadership skills and collaboration with members of their dais</li>
            <li>Consistency and punctuality during training events</li>
            <li>Excellent knowledge of and adherence to GSUMUN Rules of Procedure</li>
          </ul>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2 font-sf-pro-display">In Memory of Raya Siddiqi</h3>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden">
                <img
                  src="/images/rsa/raya-placeholder.jpg"
                  alt="Raya Siddiqi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 font-sf-pro-display">Winners</h2>
          <p className="text-slate-700 mb-8 font-sf-pro-rounded">
            The winners of The Raya Siddiqi Award for an Outstanding Director
          </p>
          <div className="bg-slate-50 rounded-xl p-8">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              className="max-w-3xl mx-auto"
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                return (
                  <li
                    className={`inline-block mx-2 ${
                      isSelected ? 'text-slate-700' : 'text-gray-400'
                    }`}
                    onClick={onClickHandler}
                    key={index}
                    role="button"
                    tabIndex={0}
                    aria-label={`${label} ${index + 1}`}
                  >
                    <span className="text-2xl">•</span>
                  </li>
                );
              }}
            >
              {winners.map((winner, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center px-4 py-8"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src={winner.image}
                      alt={winner.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 font-sf-pro-display">{winner.name}</h3>
                  <p className="bg-slate-700/20 px-6 py-9 rounded-xl max-w-md text-sm font-helvetica-light">
                    {winner.description}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RsaPage;