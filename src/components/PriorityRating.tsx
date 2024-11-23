import React from 'react';

interface PriorityRatingProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export const PriorityRating: React.FC<PriorityRatingProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div className="w-full bg-blue-50 p-4 rounded-lg mb-2">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">
          {value === 0 ? 'Nicht bewertet' : `${value}/10`}
        </span>
      </div>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
          <button
            key={number}
            onClick={() => onChange(number)}
            className={`flex-1 py-1 text-sm font-medium rounded ${
              value === number
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-blue-100'
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};