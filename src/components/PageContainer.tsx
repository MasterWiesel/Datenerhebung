import React from 'react';
import { FormPage } from '../types';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PageContainerProps {
  currentPage: FormPage;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  currentPage,
  totalPages,
  onNext,
  onPrev,
  children
}) => {
  const Navigation = () => (
    <div className="flex justify-between items-center py-6 border-t border-gray-200">
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
        disabled={currentPage === totalPages}
        className={`flex items-center px-4 py-2 rounded-md ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-blue-600 hover:bg-blue-50'
        }`}
      >
        Weiter
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );

  return (
    <div className="space-y-6">
      <Navigation />
      {children}
      <Navigation />
    </div>
  );
};