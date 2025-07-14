import type { GridProps } from '../../types/GridTypes';
import { GridBody } from './GridBody';
import { GridHeader } from './GridHeader';
import { useSorting } from '../../plugins/sorting/useSorting';
import { useExcelFilter } from '../../plugins/filtering/useExcelFilter';

export function Grid<T>({
  data,
  columns,
  sorting,
  filtering,
}: GridProps<T>) {
  // 1️⃣ Sorting logic
  const {
    sortedData,
    sortBy,
    sortDirection,
    handleSort,
  } = useSorting<T>(data);

  // 2️⃣ Filtering logic
  const {
    filteredData,
    applyFilter,
    clearFilter,
    activeFilters,
    getUniqueColumnValues,
  } = useExcelFilter<T>(sorting ? sortedData : data, columns);

  // 3️⃣ Final data
  const finalData = filtering ? filteredData : sorting ? sortedData : data;

  return (
    <div
      className="overflow-x-auto bg-white border border-gray-300 shadow-sm rounded-xl"
      data-irongrid
    >
      <table className="min-w-full text-sm border-collapse table-auto">
        <GridHeader
          columns={columns}
          sorting={sorting}
          sortBy={sortBy}
          sortDirection={sortDirection}
          onSort={handleSort}
          filtering={filtering}
          getUniqueColumnValues={getUniqueColumnValues}
          applyFilter={applyFilter}
          clearFilter={clearFilter}
          activeFilters={activeFilters}
        />
        <GridBody data={finalData} columns={columns} />
      </table>
    </div>
  );
}
