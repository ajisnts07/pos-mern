import Icon from "../common/Icon";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Select from "../forms/Select";

const Pagination = ({
  data = [],
  itemsPerPage,
  changeItemsPerPage,
  currentPage,
  paginate,
  totaled,
  perPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleCurrentPage = () => {
    paginate(currentPage - 1);
  };

  const handleNextPage = () => {
    paginate(currentPage + 1);
  };

  return (
    <>
      <div
        className={`mt-4 items-center md:flex ${totaled ? "justify-between" : "justify-end"}`}
      >
        {totaled && (
          <p>
            Total <span className="font-semibold">50</span> items
          </p>
        )}

        <div className="flex items-center justify-center gap-4 md:justify-end">
          <ul className="flex items-center justify-center gap-1">
            <li>
              <button
                className="rounded-md p-1 hover:bg-gray-50 disabled:cursor-not-allowed disabled:hover:bg-transparent dark:hover:bg-zinc-900"
                onClick={handleCurrentPage}
                disabled={currentPage === 1}
              >
                <Icon name={FiChevronLeft} />
              </button>
            </li>

            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  className={`rounded-md px-2 py-1 hover:bg-indigo-100 dark:hover:bg-zinc-900 ${currentPage === number ? "bg-indigo-50 text-indigo-950 dark:bg-indigo-950 dark:text-indigo-50" : "text-gray-600 dark:text-gray-400"}`}
                  onClick={() => paginate(number)}
                >
                  {number}
                </button>
              </li>
            ))}

            <li>
              <button
                className="rounded-md p-1 hover:bg-gray-50 disabled:cursor-not-allowed disabled:hover:bg-transparent dark:hover:bg-zinc-900"
                onClick={handleNextPage}
                disabled={currentPage === pageNumbers.length}
              >
                <Icon name={FiChevronRight} />
              </button>
            </li>
          </ul>

          {perPage && (
            <Select
              name="itemsPerPage"
              className="mt-0"
              placeholder="10"
              onChange={changeItemsPerPage}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </Select>
          )}
        </div>
      </div>
    </>
  );
};

export default Pagination;
