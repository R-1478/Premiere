import React from 'react';
import logo1 from '../png prem.png'; // Import the image for Premiere Group
import logo2 from '../png 2.png'; // Import the image for Premiere Insurance Agency

const AboutPage = () => {
  return (
    <div className=" mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">About Premiere Group and Premiere Insurance Agency</h2>
      <div className="max-w-xl mx-auto grid gap-8">
        {/* Premiere Group Container */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-center">Premiere Group</h3>
            <img src={logo1} alt="Premiere Group" className="mx-auto block my-7 w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover" />
            <p className="text-gray-700 leading-relaxed">
              Premiere Group offers comprehensive services tailored to your needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        </div>

        {/* Premiere Insurance Agency Container */}
        <div className=" mx-auto px-4 py-8 justify-left object-left">
      <h2 className="text-3xl font-semibold text-center mb-6">About Premiere Group and Premiere Insurance Agency</h2>
      <div className="max-w-xl mx-auto grid gap-8"></div>
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <div className="p-4 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-2 text-center">Premiere Insurance Agency</h3>
            <img src={logo2} alt="Premiere Insurance Agency" className="mx-auto block my-7 w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover" />
            <p className="text-gray-700 leading-relaxed text-center">
              Premiere Insurance Agency provides top-notch insurance services. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
