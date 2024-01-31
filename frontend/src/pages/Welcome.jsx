import React from "react";
import Navbar from "../components/Navbar";
import handIcon from "../assets/hand.png";

const Welcome = () => {
  return (
    <div>
      <Navbar />
      <div>
        <main className="my-4 flex flex-col items-center h-full">
          <div className="bg-white text-black py-2 px-4 text-2xl z-10 relative top-3 rounded-lg">
            <h2>Test Your Catalogue</h2>
          </div>
          <section className="bg-blue-500 text-white p-4 rounded-lg w-3/5 h-1/4 relative">
            <div className="flex flex-col items-center">
              {/* File upload button */}
              <button
                className=" bg-white text-black font-semibold mt-8 mb-8 px-4 py-2 rounded relative z-10 shadow-xl hover:shadow-none transition-shadow duration-300 ease-in-out"
                onClick={"/"}
              >
                Upload Your File
              </button>
              <img
                src={handIcon}
                alt="Hand Icon"
                className="absolute right-72 top-1/2 transform -translate-y-1/2 h-8 w-auto"
              />
            </div>
          </section>
          <div className="bg-white text-black py-2 px-4 text-2xl z-10 relative top-4 rounded-lg">
            <h3>Enter the Data</h3>
          </div>
          <section className="bg-blue-500 px-6 py-4 border border-gray-300 rounded-lg relative flex flex-col items-center w-3/5">
            {/* Form fields */}
            <form className="w-full p-2 bg-white rounded-lg mt-5 mb-2">
              <div className="p-4 mb-4">
                <label
                  htmlFor="catalogueName"
                  className="block mt-2 text-black"
                >
                  Name of the Catalogue:
                </label>
                <input
                  type="text"
                  id="catalogueName"
                  name="catalogueName"
                  className="border border-slate-700 rounded-lg shadow-xl p-1 w-full"
                />
                <label htmlFor="description" className="block mt-2 text-black">
                  Description:
                </label>
                {/* Textarea for description */}
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  cols="50"
                  className="border border-slate-700 rounded-lg shadow-xl p-1 w-full"
                ></textarea>
              </div>

              {/* Scan button */}
            </form>
          </section>
          <button
            type="submit"
            className="mt-3 text-lg bg-blue-500 text-white font-semibold px-5 py-2 rounded z-10 shadow-xl hover:shadow-none transition-shadow duration-300 ease-in-out"
          >
            Scan
          </button>
        </main>
      </div>
    </div>
  );
};

export default Welcome;
