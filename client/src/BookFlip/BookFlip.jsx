import React, { useState } from 'react';
import './BookFlip.css';

function BookFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex justify-center items-end h-screen">
      <div
        className={`flip-container ${isFlipped ? 'rotate' : ''} rounded-lg`}
        onClick={() => handleFlip()}
      >
        <div className={`flip-card ${isFlipped ? 'rotate' : ''}`}>
          <div className="flip-card-front p-4 bg-gray-200">
            <h2 className="text-xl font-bold">Ön Sayfa</h2>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
              Sayfayı Çevir
            </button>
          </div>
          <div className={`flip-card-back p-4 bg-yellow-300`}>
            <h2 className="text-xl font-bold">Arka Sayfa</h2>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
              Sayfayı Çevir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookFlip;
