import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface DropdownProps {
  items: string[];
  value: string | null;
  setValue: (value: string) => void;
  width: string;
}

const Dropdown: React.FC<DropdownProps> = ({ items, value, setValue, width }) => {
  const [isActiveSelect, setIsActiveSelect] = useState(false);

  const handleItemClick = (itemName: string) => {
    setValue(itemName);
    setIsActiveSelect(false);
  };

  return (
    <div className="relative mt-2" role="combobox" aria-expanded={isActiveSelect}>
      <button
        type="button"
        onClick={() => {
          setIsActiveSelect(!isActiveSelect);
        }}
        aria-haspopup="listbox"
        aria-labelledby="select-label"
        className={`flex w-${width} cursor-pointer items-center rounded-md border-2 border-black bg-white px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none`}
      >
        <div className="mx-auto flex items-center h-[18px] z-2 capitalize">
          {value === null || !value ? 'Select' : value}
          <FaChevronDown
            style={{ transform: `rotate(${isActiveSelect ? '180deg' : '0'})` }}
            className={'ml-3 h-4 w-4 transition-transform ease-in-out'}
          />
        </div>
      </button>
      <div
        style={{
          top: isActiveSelect ? '80px' : '50px',
          opacity: isActiveSelect ? '1' : '0',
          visibility: isActiveSelect ? 'visible' : 'hidden',
        }}
        role="listbox"
        aria-labelledby="select-label"
        className={`absolute left-0 top-[70px] w-${width} rounded-md border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all z-10`}
      >
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              handleItemClick(item);
            }}
            aria-selected={value === item}
            className="capitalize block w-full border-b-2 border-black bg-white px-5 py-3 first:rounded-t-[5px] last:rounded-b-[5px] hover:bg-[#a36ec4] z-10"
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
