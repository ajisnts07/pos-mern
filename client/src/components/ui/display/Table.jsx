import { useState } from "react";
import Button from "../common/Button";
import Input from "../forms/Input";
import Pagination from "../navigation/Pagination";
import SortDataUtil from "@/utils/configs/display/SortDataUtil";
import SearchDataUtil from "@/utils/configs/display/SearchDataUtil";
import PaginateUtil from "@/utils/configs/navigation/PaginateUtil";
import { FormatToRupiahUtil } from "@/utils/helpers/FormatToRupiahUtil";
import { FiPrinter } from "react-icons/fi";

const Table = ({
  columns,
  initialData,
  sorted,
  printed,
  searched,
  paginated,
  totaled,
  perPage,
  current,
  total,
  totalPages,
  handlePageChange,
  handleSizeChange,
  className,
}) => {
  const { sortedData, requestSort, getSortIcon } = SortDataUtil({
    initialData,
  });

  const [searchResult, setSearchResult] = useState(sortedData);
  const { searchTerm, handleSearchData } = SearchDataUtil({
    data: sortedData,
    setSearchResult: setSearchResult,
  });

  const {
    paginatedData,
    itemsPerPage,
    setItemsPerPage,
    paginate,
    currentPage,
  } = PaginateUtil({
    data: searchResult,
  });

  const changeItemsPerPage = (value) => {
    setItemsPerPage(value);
  };

  return (
    <>
      <div
        className={`items-end justify-between md:flex ${className ? className : "mb-4"}`}
      >
        {printed && (
          <Button
            size="md"
            variant="tertiary"
            icon={FiPrinter}
            children="Cetak"
            className="absolute end-8 mt-[10px] md:relative md:end-0 md:mt-0"
          />
        )}

        {searched && (
          <Input
            type="text"
            name="search"
            placeholder="Cari..."
            className="mt-0 md:w-1/4"
            value={searchTerm}
            onChange={handleSearchData}
          />
        )}
      </div>

      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={sorted ? () => requestSort(col.key) : null}
              >
                <div className="flex items-center gap-1">
                  {col.label} {sorted ? getSortIcon(col.key) : null}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {searchResult.map((item, index) => (
            <tr key={index}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>
                  {col.key === "actions"
                    ? col.render
                      ? col.render(item)
                      : null
                    : col.key === "price" || col.key === "purchase_price"
                      ? FormatToRupiahUtil(item[col.key])
                      : item[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {paginated && (
        <Pagination
          totaled={totaled}
          perPage={perPage}
          current={current}
          total={total}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          handleSizeChange={handleSizeChange}
        />
      )}
    </>
  );
};

export default Table;
