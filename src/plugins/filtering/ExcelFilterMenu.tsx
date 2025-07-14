import React, { useState, useEffect, useRef } from 'react';

interface ExcelFilterMenuProps {
  options: string[];
  selected: Set<string>;
  onApply: (values: string[]) => void;
  onClear: () => void;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLElement>;
  disableSearch?: boolean;
  hideSortOptions?: boolean;
}

export function ExcelFilterMenu({
  options,
  selected,
  onApply,
  onClear,
  onClose,
  anchorRef,
  disableSearch,
  hideSortOptions,
}: ExcelFilterMenuProps) {
  const [localSelected, setLocalSelected] = useState(new Set(selected));
  const [search, setSearch] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !anchorRef.current?.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [anchorRef, onClose]);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  const toggleOption = (opt: string) => {
    setLocalSelected((prev) => {
      const next = new Set(prev);
      next.has(opt) ? next.delete(opt) : next.add(opt);
      return next;
    });
  };

  const toggleAll = () => {
    setLocalSelected((prev) =>
      prev.size === options.length ? new Set() : new Set(options)
    );
  };

  const apply = () => {
    onApply(Array.from(localSelected));
    onClose();
  };

  return (
    <div
      ref={menuRef}
      className="absolute z-50 p-4 bg-white border border-gray-200 shadow-xl w-72 rounded-xl animate-fade-in"
    >
      {!hideSortOptions && (
        <div className="mb-3 space-y-1">
          <button className="w-full text-left px-3 py-1.5 rounded-md hover:bg-gray-100 text-sm text-gray-700 font-medium">
            ↑ Sort: A → Z
          </button>
          <button className="w-full text-left px-3 py-1.5 rounded-md hover:bg-gray-100 text-sm text-gray-700 font-medium">
            ↓ Sort: Z → A
          </button>
        </div>
      )}

      {!disableSearch && (
        <input
          className="w-full px-3 py-2 mb-3 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Search options..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}

      <div className="space-y-1 overflow-auto text-sm max-h-48">
        <div className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100">
          <input
            type="checkbox"
            className="accent-blue-600"
            checked={localSelected.size === options.length}
            onChange={toggleAll}
          />
          <span className="font-semibold text-gray-700">Select All</span>
        </div>

        {filteredOptions.map((opt) => (
          <div
            key={opt}
            className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100"
          >
            <input
              type="checkbox"
              className="accent-blue-600"
              checked={localSelected.has(opt)}
              onChange={() => toggleOption(opt)}
            />
            <span className="text-gray-700">{opt}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4 text-sm">
        <button
          onClick={() => {
            setLocalSelected(new Set());
            onClear();
          }}
          className="text-gray-500 hover:underline"
        >
          Clear Filter
        </button>

        <div className="space-x-2">
          <button
            onClick={onClose}
            className="px-3 py-1 text-gray-600 border rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={apply}
            className="px-3 py-1 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
