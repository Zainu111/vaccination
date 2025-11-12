import React, { useState } from "react";
import CountryOption from "./UI/CountryOption";
import Button from "./UI/Button";
import { DISPLAY_COUNTRIES } from "../utils/countryUtils";
import { COUNTRIES_WITH_REGION } from "../lib/data";

// Create CONTINENT_COUNTRIES mapping from COUNTRIES_WITH_REGION
const CONTINENT_COUNTRIES = COUNTRIES_WITH_REGION.reduce(
  (acc, { name, region }) => {
    if (!acc[region]) acc[region] = [];
    acc[region].push(name);
    return acc;
  },
  {}
);

const CountriesModal = ({
  isOpen,
  onClose,
  countries,
  selectedCountries,
  onToggleSelection,
  onCompare,
  onClear, // New prop to handle clearing selections
}) => {
  const [showAllContinents, setShowAllContinents] = useState(false);

  if (!isOpen) return null;

  // Get unique continents, sorted alphabetically
  const continents = [
    ...new Set(COUNTRIES_WITH_REGION.map(({ region }) => region)),
  ].sort();

  // Filter countries based on showAllContinents state
  const displayedCountries = !showAllContinents
    ? countries // Show all countries instead of slicing
    : null;

  // helper: toggle full continent selection
  const handleContinentToggle = (continent, checked) => {
    const continentCountries = CONTINENT_COUNTRIES[continent] || [];

    // Call onToggleSelection for each country individually
    continentCountries.forEach((country) => {
      const isCurrentlySelected = selectedCountries.includes(country);

      // Only toggle if the current state doesn't match desired state
      if (checked && !isCurrentlySelected) {
        onToggleSelection(country);
      } else if (!checked && isCurrentlySelected) {
        onToggleSelection(country);
      }
    });
  };

  // Handle clear action
  const handleClear = () => {
    onClear();
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex justify-center items-center z-[1000] p-4 sm:p-5"
      onClick={(e) => e.target.className.includes("fixed") && onClose()}
    >
      <div className="bg-white p-5 sm:p-6 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
        <button
          className="absolute top-3 right-4 text-3xl sm:text-4xl font-bold text-gray-400 cursor-pointer z-10 hover:text-black transition-colors leading-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="flex gap-2 mb-6 flex-wrap bg-gray-100 p-3 rounded-lg justify-center items-center max-w-max mx-auto shadow-lg px-5">
          <button
            onClick={() => setShowAllContinents(false)}
            className={`px-4 py-2 rounded border-2 border-[#d17728] shadow-md transition-all font-medium ${
              !showAllContinents
                ? 'bg-[#d17728] text-white'
                : 'bg-gray-100 text-black hover:bg-[#ffe9d5]'
            }`}
          >
            All Countries
          </button>
          <button
            onClick={() => setShowAllContinents(true)}
            className={`px-4 py-2 rounded border-2 border-[#d17728] shadow-md transition-all font-medium ${
              showAllContinents
                ? 'bg-[#d17728] text-white'
                : 'bg-gray-100 text-black hover:bg-[#ffe9d5]'
            }`}
          >
            Continent
          </button>
        </div>

        {/* Countries display */}
        <div>
          {showAllContinents ? (
            continents.map((continent) => {
              const continentCountries = CONTINENT_COUNTRIES[continent] || [];
              const allSelected = continentCountries.every((c) =>
                selectedCountries.includes(c)
              );
              const someSelected = continentCountries.some((c) =>
                selectedCountries.includes(c)
              );

              return (
                <div key={continent} className="mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm mb-4">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">{continent}</h3>
                    <input
                      type="checkbox"
                      checked={allSelected}
                      ref={(el) => {
                        if (el) el.indeterminate = !allSelected && someSelected;
                      }}
                      onChange={(e) =>
                        handleContinentToggle(continent, e.target.checked)
                      }
                      className="w-5 h-5 accent-[#d17728] cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                    {continentCountries.map((country) => (
                      <CountryOption
                        key={country}
                        country={country}
                        isSelected={selectedCountries.includes(country)}
                        onClick={onToggleSelection}
                      />
                    ))}
                  </div>
                </div>
              );
            })
          ) : displayedCountries && displayedCountries.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {displayedCountries.map((country) => (
                <CountryOption
                  key={country}
                  country={country}
                  isSelected={selectedCountries.includes(country)}
                  onClick={onToggleSelection}
                />
              ))}
            </div>
          ) : (
            <p>No countries available for this selection.</p>
          )}
        </div>
      </div>

      <div className="absolute bottom-[60px] sm:bottom-[80px] left-1/2 -translate-x-1/2 flex gap-3 z-20">
        <Button onClick={onCompare}>Compare</Button>
        <Button onClick={handleClear} className="!bg-gray-500 hover:!bg-gray-600">Clear</Button>
      </div>
    </div>
  );
};

export default CountriesModal;
