import { useState, useMemo } from 'react';

export function useSorting<T>(data: T[]) {
  const [sortBy, setSortBy] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null);

  const handleSort = (field: keyof T) => {
    if (sortBy === field) {
      // Toggle direction
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : prev === 'desc' ? null : 'asc'));
      if (sortDirection === 'desc') setSortBy(null); // Reset if clicked thrice
    } else {
      setSortBy(field);
      setSortDirection('asc');
    }
  };

  const sortedData = useMemo(() => {
    if (!sortBy || !sortDirection) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (aValue === bValue) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
  }, [data, sortBy, sortDirection]);

  return {
    sortedData,
    sortBy,
    sortDirection,
    handleSort
  };
}
