import { useRef, useState } from 'react';
import { Column } from '../../types/GridTypes';
import { ExcelFilterMenu } from '../../plugins/filtering/ExcelFilterMenu';

interface GridHeaderProps<T> {
   field: keyof T;
  columns: Column<T>[];
  sorting?: boolean;
  sortBy?: keyof T | null;
  sortDirection?: 'asc' | 'desc' | null;
  onSort?: (field: keyof T) => void;
  filtering?: boolean;
  applyFilter?: (field: keyof T, values: string[]) => void;
  clearFilter?: (field: keyof T) => void;
  getUniqueColumnValues?: (field: keyof T) => string[];
  activeFilters?: Record<string, string[]>;
}



export function GridHeader<T>({
  columns,
  sorting,
  sortBy,
  sortDirection,
  onSort,
  filtering,
  applyFilter,
  clearFilter,
  getUniqueColumnValues,
  activeFilters,
}: GridHeaderProps<T>) {
  const [openFilterFor, setOpenFilterFor] = useState<keyof T | null>(null);
  const buttonRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleFilterMenu = (field: keyof T) => {
    setOpenFilterFor((prev) => (prev === field ? null : field));
  };

  return (
    <thead className="font-semibold text-gray-700 bg-gray-50">
      <tr>
        {columns.map((col) => {
          const isActiveSort = sortBy === col.field;
          const sortIcon = !isActiveSort
            ? '↕'
            : sortDirection === 'asc'
            ? '↑'
            : '↓';

          const hasFilter = filtering && col.filterable;

          return (
            <th
  key={String(col.field)}
  className={`relative px-4 py-3 text-left select-none bg-white border-b border-gray-200 ${
    isActiveSort ? 'text-blue-600 font-bold' : 'text-gray-700'
  } ${col.headerClassName ?? ''}`}
>
  <div
    className="flex items-center justify-between gap-2 cursor-pointer group"
    ref={(el) => (buttonRefs.current[col.field as string] = el)}
  >
    <span
      onClick={() => sorting && col.sortable && onSort?.(col.field)}
      className="transition-colors duration-150 group-hover:text-blue-700"
    >
      {col.header}
      {sorting && col.sortable && (
        <span className="ml-1 text-sm text-gray-400">{sortIcon}</span>
      )}
    </span>

    {hasFilter && (
      <span
        onClick={() => toggleFilterMenu(col.field)}
        className={`text-xs px-1 py-0.5 rounded-md transition-colors duration-150 ${
          activeFilters?.[col.field as string]?.length
            ? 'bg-blue-100 text-blue-700 font-semibold'
            : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        ⏷
      </span>
    )}
  </div>

  {/* Filter Dropdown */}
  {openFilterFor === col.field &&
    getUniqueColumnValues &&
    applyFilter &&
    clearFilter && (
      <div className="absolute left-0 z-50 mt-1 top-full">
        <ExcelFilterMenu
          options={getUniqueColumnValues(col.field)}
          selected={new Set(activeFilters?.[col.field as string] || [])}
          onApply={(values) => {
            applyFilter(col.field, values);
            setOpenFilterFor(null);
          }}
          onClear={() => {
            clearFilter(col.field);
            setOpenFilterFor(null);
          }}
          onClose={() => setOpenFilterFor(null)}
          anchorRef={{ current: buttonRefs.current[col.field as string] }}
        />
      </div>
    )}
</th>

          );
        })}
      </tr>
    </thead>
  );
}
