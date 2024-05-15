import React from 'react';

function AwardsComponent({ awards }) {
  return (
    <div className="w-full flex flex-col items-center m space-y-4">
      <div className="w-[90%] h-24 rounded-full mt-5 flex justify-center items-center bg-gradient-to-r from-black via-gray-700 to-black drop-shadow-lg text-center italic text-4xl font-semibold tracking-tight font-serif text-gray-100">
        Awards/Certificates 🏆
      </div>
      <ul className="flex flex-wrap justify-center">
        {awards.map((award, index) => (
          <li key={index} className="m-2">
            <h3 className="text-lg font-semibold mb-2">Award</h3>
            <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
              <p className="text-indigo-600 font-semibold">{award}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AwardsComponent;
