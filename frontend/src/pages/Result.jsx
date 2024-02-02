import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import "./Gauge.css";
import Gauge from "./Gauge";

const Result = () => {
  return (
    <div>
      <Navbar />
      <div>
        <main className="my-4 flex flex-col items-center h-full">
          <div className="bg-white text-black py-2 px-4 font-serif text-3xl z-10 relative top-3 rounded-lg">
            <h2>Result</h2>
          </div>
          <section className="bg-blue-500 text-white p-4 rounded-lg w-3/5 h-1/4 relative">
            <div className="flex flex-col items-center">
              {/* File upload button */}
              <div className=" bg-white text-black font-semibold font-sans mt-2 w-full px-4 py-2 rounded relative z-10 flex flex-row justify-between">
                <div>
                  <p>1. Image1</p>
                </div>
                <div>
                  <p>Uploaded</p>
                </div>
              </div>
            </div>
          </section>
          <div className="bg-white text-black py-2 px-4 font-serif text-3xl z-10 relative top-4 rounded-lg">
            <h3>Catalogue Score</h3>
          </div>
          <section
            className="bg-blue-500 px-6 py-4 border border-gray-300 rounded-lg relative flex flex-col items-center w-3/5
          font-sans"
          >
            <div className="w-full p-2 bg-white rounded-lg mt-5 mb-2">
              <div className="p-4 mb-4">
                <div htmlFor="catalogueName" className="block text-black">
                  Product Descriptions: 100%
                </div>
                <div htmlFor="catalogueName" className="block text-black">
                  Pricing Information: 100%
                </div>
                <div htmlFor="catalogueName" className="block text-black">
                  Product Images: 100%
                </div>
                <div htmlFor="catalogueName" className="block text-black">
                  Layout & Design: 100%
                </div>
                <div htmlFor="catalogueName" className="block text-black">
                  Discounts & Promotions: 100%
                </div>
                <div htmlFor="catalogueName" className="block text-black">
                  Brand Consistency: 100%
                </div>
                <div htmlFor="catalogueName" className="block text-black">
                  Contact Information & Call to Action: 100%
                </div>
                <div htmlFor="catalogueName" className="block text-black">
                  Typos And Grammar 100%
                </div>
                <div htmlFor="catalogueName" className="block text-black">
                  Legal Compliance: 100%
                </div>
                <div className="font-semibold mt-3">Ares of imporvement</div>
                <div className="border border-slate-600 rounded-lg p-2 shadow-lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorum nihil animi nesciunt, est quod iure voluptatibus.
                  Esse, doloremque ducimus? Neque?
                </div>
                <div className="absolute top-28 right-40 w-48">
                  <div className="gauge">
                    <div className="gauge__body">
                      <Gauge />
                    </div>
                  </div>
                </div>
              </div>

              {/* Scan Again button */}
            </div>
          </section>
          <button
            type="submit"
            className="mt-3 text-lg bg-blue-500 text-white font-semibold px-5 py-2 rounded z-10 shadow-xl hover:shadow-none transition-shadow duration-300 ease-in-out"
          >
            Scan Again
          </button>
        </main>
      </div>
    </div>
  );
};

export default Result;
