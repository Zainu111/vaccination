import React from "react";
import { getFlagUrl } from "../../utils/countryUtils";

const CountryOption = ({ country, isSelected, onClick }) => (
  <label className={`max-w-full relative flex flex-col items-center p-3 sm:p-4 px-2 bg-white rounded-xl shadow-md cursor-pointer transition-all border-2 hover:shadow-lg hover:-translate-y-1 ${
    isSelected ? 'border-green-500 bg-green-50' : 'border-transparent hover:border-gray-300'
  }`}>
    <input
      type="checkbox"
      name="country"
      value={country}
      checked={isSelected}
      onChange={() => onClick(country)}
      className="hidden peer"
    />

    {/* Custom checkbox circle */}
    <span
      className={`absolute top-2 right-2 h-5 w-5 flex items-center justify-center rounded-full border-2 transition-all ${
        isSelected
          ? "bg-green-500 border-green-500"
          : "bg-white border-gray-300"
      }`}
    >
      {isSelected && (
        <svg
          className="w-3 h-3 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </span>

    <img
      src={getFlagUrl(country)}
      alt={country}
      className="w-8 sm:w-10 h-auto mb-2"
    />

    <div className="text-center text-xs sm:text-sm font-medium text-gray-800">{country}</div>
  </label>
);

export default CountryOption;
