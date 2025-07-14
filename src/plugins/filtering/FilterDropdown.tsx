import React from 'react';

interface FilterDropdownProps<T> {
  column: { field: keyof T; filter?: string; options?: string[] };
  value: any;
  onChange: (field: keyof T, value: any) => void;
}

export function FilterDropdown<T>({ column, value, onChange }: FilterDropdownProps<T>) {
  const { field, filter, options } = column;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(field, e.target.value);
  };

  const handleCheckbox = (option: string) => {
    const prev: string[] = value || [];
    if (prev.includes(option)) {
      onChange(field, prev.filter((o) => o !== option));
    } else {
      onChange(field, [...prev, option]);
    }
  };

  return (
    <div className="absolute z-50 p-3 mt-2 bg-white border rounded-md shadow-md w-52">
      {filter === 'text' && (
        <input
          type="text"
          value={value || ''}
          onChange={handleInput}
          placeholder="Filter text..."
          className="w-full p-1 text-sm border border-gray-300 rounded"
        />
      )}

      {filter === 'number' && (
        <input
          type="number"
          value={value || ''}
          onChange={handleInput}
          placeholder="Enter number..."
          className="w-full p-1 text-sm border border-gray-300 rounded"
        />
      )}

      {filter === 'checkbox' && (
        <div className="flex flex-col gap-1 overflow-y-auto max-h-40">
          {options?.map((opt) => (
            <label key={opt} className="inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={value?.includes(opt)}
                onChange={() => handleCheckbox(opt)}
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
