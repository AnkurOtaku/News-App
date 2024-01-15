import React, { useContext } from "react";
import { AppContext } from "../store/store";

function Category() {
  const { querry , category, error, setCategory } = useContext(AppContext);
  const list = [
    "general",
    "business",
    "trending",
    "health",
    "science",
    "sports",
    "tech",
    "politics",
  ];

  function handleClick(value) {
    setCategory(value);
  }

  return (
    <>
      {!querry && !error && (
        <div className="mx-auto max-w-5xl grid grid-cols-4 gap-2 p-1 md:p-2 text-sm md:text-base">
          {list.map((item) => (
            <button key={item}
              className={`border rounded-md text-center py-1 capitalize ${
                category === item
                  ? "bg-[#223363] text-white"
                  : "hover:bg-[#4963a8] hover:text-white"
              }`}
              onClick={() => handleClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default Category;
