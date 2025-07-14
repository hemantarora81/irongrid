import React from 'react';
import type { Column } from '../../types/GridTypes';

interface GridCellProps<T> {
  row: T;
  column: Column<T>;
}

export function GridCell<T>({ row, column }: GridCellProps<T>) {
  const value = row[column.field];

  // Future: handle custom renderers here
  if (column.renderCell) {
    return (
      <td className="px-4 py-2 text-gray-800 whitespace-nowrap">
        {column.renderCell(row)}
      </td>
    );
  }

  return (
    <td className="px-4 py-2 text-gray-800 whitespace-nowrap">
      {String(value)}
    </td>
  );
}
