import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="max-w-[1170px] mx-auto mb-[60px] md:mb-[120px] px-5 md:px-0"
      id="about"
    >
      <h2 className="text-center text-[32px] font-bold text-gray-800 mb-10">
        About Us
      </h2>
      <div className="flex gap-8 md:flex-row flex-col">
        {/* Card 1 */}
        <div className="border border-[#ADADAD] rounded-[20px] md:w-[570px] w-full p-10">
          <div className="flex items-center gap-6">
            <img
              className="w-[100px] h-[100px] object-cover rounded-full"
              src="/images/aboutimage2.png"
              alt="Christina Pali"
            />
          </div>
          <h2 className="text-default font-bold text-[24px] mt-6">
            Christina Pali, IOR
          </h2>
          <p className="flex items-center gap-2  mb-5">
            <MdOutlineEmail className="text-gray" />{" "}
            <span className="text-base text-[#262626]">
              christina.pali@paligroupservices.org
            </span>
          </p>
          <p className="text-gray leading-relaxed">
            Christina Pali brings over 30 years of experience in construction
            management to her role as founder of Pali Group Services,
            established in 2008. She holds a Bachelor of Science with an
            emphasis in Biogeochemistry from the California University...
            <Link
              to="/aboutUs"
              className="text-blue-600 font-bold underline ml-1"
            >
              more
            </Link>
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-[#ADADAD] rounded-[20px] md:w-[570px] w-full p-10">
          <div className="flex items-center gap-6">
            <img
              className="w-[100px] h-[100px] object-cover rounded-full"
              src="/images/aboutimage1.png"
              alt="Miceal Moran"
            />
          </div>
          <h2 className="text-default font-bold text-[24px] mt-6">
            Miceal Moran, Document Control QA/QC
          </h2>
          <p className="flex items-center gap-2  mb-5">
            <MdOutlineEmail className="text-gray" />{" "}
            <span className="text-base text-[#262626]">
              miceal.moran@paligroupservices.org
            </span>
          </p>
          <p className="text-gray leading-relaxed">
            Miceal Moran brings over 30 years of experience in construction and
            design to the team. A graduate of California Polytechnic State
            University, San Luis Obispo with a background in architecture and
            drafting, Miceal is a season professional with deep industry...
            <Link
              to="/aboutUs"
              className="text-blue-600 font-bold underline ml-1"
            >
              more
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
