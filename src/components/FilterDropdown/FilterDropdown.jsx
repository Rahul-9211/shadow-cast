import React, { useState } from 'react';

const FilterDropdown = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]); // Initial filter value

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedOption(item); // Update the selected option
    setIsOpen(false); // Close the dropdown after selection
    onChange(item); // Call the onChange function with the selected item
  };

  return (
    <div className="relative inline-block">
      <button
        className="bg-black text-white text-md flex justify-between px-[11px] py-1 items-center rounded cursor-pointer w-[166px] h-[34px]  bg-transparent shadow border border-solid border-1 border-gray-700"
        onClick={toggleDropdown}
      >
        {selectedOption}
        <span className=" text-xs">▼</span>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 w-full rounded mt-[2px] py-1 bg-black text-white z-[2]">
          {options.map((item, index) => (
            <div
              key={index}
              className={`px-3 py-2 text-md cursor-pointer ${
                index !== options.length - 1 ? '' : ''
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
