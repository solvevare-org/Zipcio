"use client";

import VideoUrl from "../assets/HeaderVideo.mp4";
import Property_1 from "../assets/property_1.jpg";
// import Property_2 from "../assets/property_2.jpg";
import Property_3 from "../assets/Dashboard.png";

export default function Header() {
  return (
    <section id="home">
      {/* <Navbar /> */}
      <div className="px-8 py-1 pb-20 bg-[#f5f5f5] font-[poppins]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-14">
              {/* Badge */}
              <div className="inline-flex  gap-2 px-4 py-2 bg-[#bbbf4f33] rounded-full">
                <svg
                  className="w-4 h-4 text-[#BCBF4F]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
                <span className="text-sm font-semibold text-[#BCBF4F]">
                    REAL ESTATE SOLUTION
                </span>
              </div>

              {/* Heading */}
              <div>
                <h1 className="text-5xl lg:text-6xl font-[500] text-gray-900 leading-tight">
                  NuHelixx RE
                </h1>
                <p className="pt-2">
                  NuHelixX RE brings every part of the real estate journey into
                  one platform. Brokerages gain full visibility, agents work
                  with less admin and more focus, and clients enjoy a seamless,
                  transparent experience from the first meeting to the final
                  signature.
                </p>
              </div>
              <br />
              <div>
                <button className="bg-[#BCBF4F] hover:bg-[#bbbf4fc8] text-white px-8 py-3 rounded-full font-medium">
                  Book A Demo
                </button>
              </div>

            

              {/* CTA Button */}
            </div>

            {/* Right Content - 3D Coin & Card */}
            <div className="min-h-[400px] gap-4 border-none grid grid-cols-2">
              <div className=" rounded-2xl overflow-hidden border-none">
                <video
                  src={VideoUrl}
                  loop
                  autoPlay
                  muted
                  className="h-[100%] rounded-2xl overflow-hidden w-full object-cover"
                />
              </div>

              <div className="flex flex-col items-center">
                <div className="rounded-2xl w-full h-[60%] overflow-hidden">
                  <img
                    src={Property_1}
                    alt="property"
                    className="h-full w-auto object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center items-center h-[40%]">
                  <p className="text-5xl font-bold text-gray-900">+70%</p>
                  <p className="text-gray-600 mt-2">Client Retention</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-24">
            <div className="flex min-h-[28rem] w-[100%] justify-center overflow-hidden rounded-2xl">
              <img
                src={Property_3}
                alt="property"
                className="h-full w-auto object-cover"
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-6 flex items-center justify-center ">
                <br />
                <div className="flex flex-col gap-8">
                    <h2>Why NuHelixX RE</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Every deal comes with countless moving parts — leads,
                  listings, contracts, deadlines, and client communication. Most
                  CRMs only add more steps, slowing you down. NuHelixX RE is
                  different. Built with AI at its core, it unifies every tool
                  into one streamlined platform so you can focus on what matters
                  most: closing deals and serving clients. With NuHelixX RE,
                  agents spend less time juggling software and paperwork, and
                  more time building relationships, winning listings, and
                  growing your business. From the first lead to the final
                  signature, complexity becomes clarity — and every deal feels
                  seamless.
                  </p>

                  <div className="mb-2">
                    <button className="bg-[#BCBF4F] hover:bg-[#bbbf4fc8] text-white px-8 py-3 rounded-full font-medium">
                      Contact Us
                    </button>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
