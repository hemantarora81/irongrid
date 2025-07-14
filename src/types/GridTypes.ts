export type Column<T> = {
  field: keyof T | null | undefined;
  ExcelFilterMenufield: keyof T;
  header: string;
  headerTemplate?: (field: keyof T, column: Column<T>) => React.ReactNode;
  headerClassName?: string;
  headerTooltip?: string;
  headerAlign?: 'left' | 'center' | 'right';
  sortable?: boolean;
  filterable?: boolean;
  editable?: boolean;
  filter?: 'text' | 'number' | 'checkbox' | 'custom' | 'excel';
  options?: string[]; // for checkbox filter
   renderCell?: (row: T) => React.ReactNode;
};

export interface GridProps<T> {
  data: T[];
  columns: Column<T>[];

  // Optional plugin flags
  sorting?: boolean;
  filtering?: boolean;
  pagination?: boolean;
  selection?: boolean;
  editing?: boolean;
}
