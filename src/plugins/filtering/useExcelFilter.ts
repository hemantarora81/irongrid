// src/plugins/filtering/useExcelFilter.ts
import { useMemo, useState } from 'react';
import type { Column } from '../../types/GridTypes';

export interface FilterState {
  [field: string]: string[];
}

export function useExcelFilter<T>(data: T[], columns: Column<T>[]) {
  const [filters, setFilters] = useState<FilterState>({});

  const filteredData = useMemo(() => {
    return data.filter((row) => {
      return Object.entries(filters).every(([field, selectedValues]) => {
        if (selectedValues.length === 0) return true;
        const cellValue = String(row[field as keyof T]);
        return selectedValues.includes(cellValue);
      });
    });
  }, [data, filters]);

  function applyFilter(field: keyof T, values: string[]) {
    setFilters((prev) => ({
      ...prev,
      [field]: values
    }));
  }

  function clearFilter(field: keyof T) {
    setFilters((prev) => {
      const updated = { ...prev };
      delete updated[field as string];
      return updated;
    });
  }

  function getUniqueColumnValues(field: keyof T): string[] {
    const uniqueSet = new Set<string>();
    for (const row of data) {
      uniqueSet.add(String(row[field]));
    }
    return Array.from(uniqueSet);
  }

  return {
    filters,
    filteredData,
    applyFilter,
    clearFilter,
    getUniqueColumnValues
  };
}
