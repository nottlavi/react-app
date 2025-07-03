import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export const Pagination = () => {
  const { page, totalPages, pageHandler } = useContext(AppContext);
  return (
    <div className="flex w-full justify-evenly border-t-gray-300 border-t-2 py-3 items-center fixed bg-white bottom-0">
      <div className="flex gap-6">
        {page > 1 && (
          <button
            onClick={() => pageHandler(page - 1)}
            className="border-gray-400 border-2  p-1 rounded-lg w-[100px]"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => pageHandler(page + 1)}
            className="border-gray-400 border-2  p-1 rounded-lg w-[100px]"
          >
            Next
          </button>
        )}
      </div>

      <p className="font-bold text-[14px]">
        page <span>{page}</span> of <span>{totalPages}</span>
      </p>
    </div>
  );
};

export default Pagination;
