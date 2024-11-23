import React from 'react';
import { FormPage } from '../types';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationProps {
  currentPage: FormPage;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  canProgress: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  totalPages,
  onNext,
  onPrev,
  canProgress
}) => {
  return (
    <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className={`flex items-center px-4 py-2 rounded-md ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-blue-600 hover:bg-blue-50'
        }`}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Zurück
      </button>
      <div className="text-sm text-gray-600">
        Seite {currentPage} von {totalPages}
      </div>
      <button
        onClick={onNext}
        disabled={!canProgress}
        className={`flex items-center px-4 py-2 rounded-md ${
          !canProgress
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-blue-600 hover:bg-blue-50'
        }`}
      >
        Weiter
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
};