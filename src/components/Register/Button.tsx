import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface ButtonProps {
  handleSubmit: () => void;
  load: boolean;
}

const Button: React.FC<ButtonProps> = ({ handleSubmit, load }) => {
  return (
    <>
      <button
        className="flex items-center justify-center py-3 px-4 my-5 w-60 hover:bg-blue-600 ease-in duration-200 h-12 bg-blue-500 rounded text-white"
        type="submit"
        onClick={handleSubmit}
      >
        {load && (
          <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-white mr-2" />
        )}
        <p className="text-white">Confirm Registration</p>
      </button>
    </>
  );
};

export default Button;
