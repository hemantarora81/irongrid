import React from 'react';
import type { Column } from '../../types/GridTypes';
import { GridCell } from './GridCell';

interface GridBodyProps<T> {
  data: T[];
  columns: Column<T>[];
}

export function GridBody<T>({ data, columns }: GridBodyProps<T>) {
  
  return (
    <tbody className="divide-y divide-gray-100">
      {data.map((row, rowIndex) => (
        <tr key={rowIndex} className="transition hover:bg-gray-50">
          {columns.map((col) => (
            <GridCell key={String(col.field)} row={row} column={col} />
          ))}
        </tr>
      ))}
    </tbody>
  );
}
