import { useState, ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  openButtonText: string;
}

export const Modal: React.FC<ModalProps> = ({ children, openButtonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white rounded px-4 py-2 my-2 hover:bg-blue-700 transition duration-200"
      >
        {openButtonText}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-3xl h-auto overflow-hidden relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl p-2 font-bold"
              aria-label="Close Modal"
            >
              &times;
            </button>
            <div className="overflow-y-auto max-h-[70vh]">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                {" "}
                {openButtonText}
              </h2>
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
