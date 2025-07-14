import { useState, useMemo } from 'react';
import type { Column } from '../../types/GridTypes';

export function useFiltering<T>(data: T[], columns: Column<T>[]) {
  const [filters, setFilters] = useState<Record<string, any>>({});

  const handleFilterChange = (field: keyof T, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const filteredData = useMemo(() => {
    return data.filter((row) => {
      return columns.every((col) => {
        const filterValue = filters[col.field as string];
        if (!col.filterable || filterValue == null || filterValue === '') return true;

        const cellValue = row[col.field];

        if (col.filter === 'text') {
          return String(cellValue).toLowerCase().includes(String(filterValue).toLowerCase());
        }

        if (col.filter === 'checkbox') {
          return Array.isArray(filterValue)
            ? filterValue.includes(cellValue)
            : true;
        }

        if (col.filter === 'number') {
          const numFilter = parseFloat(filterValue);
          return !isNaN(numFilter) && cellValue === numFilter;
        }

        // fallback or custom
        return true;
      });
    });
  }, [data, filters, columns]);

  return {
    filteredData,
    filters,
    handleFilterChange
  };
}
