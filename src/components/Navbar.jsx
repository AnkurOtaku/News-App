import React, { useState, useContext } from "react";
import { AppContext } from "../store/store";
import Updates from "./Updates";
import countryList from '../country_capital_code.json'

function Navbar() {
  const [popup, setPopup] = useState(false);
  const { country, setCountry, setQuerry } = useContext(AppContext);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = (value) => {
    setCountry(value);
    console.log(value);
    setDropdown(!dropdown);
  };
  
  function handleSubmit(e){
    e.preventDefault();
    if(e.target.elements.searchInput.value){
      setCountry(false);
      setQuerry(e.target.elements.searchInput.value);
      console.log(e.target.elements.searchInput.value, country);
    }
  }

  return (
    <>
      <div className="h-18 py-1 md:py-4 min-w-full bg-[#A13737] flex items-center place-content-around">
        
        {/* heading */}
        <h1 className="px-4 text-3xl text-white font-semibold self-center">
          Worldwide News
        </h1>

        {/* search bar */}
        <form className="hidden md:flex" onSubmit={(e)=>handleSubmit(e)}>
          <div className="rounded-md w-80 flex justify-center items-center bg-[#A75F5F]">
            <input
              className="mx-4 w-4/5 bg-transparent text-white focus:outline-none"
              placeholder="search"
              name="searchInput"
            />
            <button className="m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="22"
                viewBox="0 0 31 29"
                fill="none"
              >
                <path
                  d="M22.4513 18.483H21.0831L20.5982 18.0481C22.6764 15.7926 23.7502 12.7155 23.1614 9.445C22.3474 4.96625 18.3294 1.3897 13.4801 0.841937C6.15416 0.00418556 -0.011394 5.73956 0.889192 12.5543C1.47804 17.0653 5.32285 20.803 10.1375 21.5602C13.6533 22.1079 16.9612 21.1091 19.3858 19.1758L19.8535 19.6269V20.8996L27.214 27.7466C27.9241 28.4072 29.0845 28.4072 29.7945 27.7466C30.5046 27.0861 30.5046 26.0067 29.7945 25.3462L22.4513 18.483ZM12.0599 18.483C7.7475 18.483 4.26639 15.2448 4.26639 11.2333C4.26639 7.22174 7.7475 3.9835 12.0599 3.9835C16.3723 3.9835 19.8535 7.22174 19.8535 11.2333C19.8535 15.2448 16.3723 18.483 12.0599 18.483Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </form>

        {/* dropdown */}
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex justify-center items-center px-4 py-2 w-32 h-[38px] border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-700"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={()=>setDropdown(!dropdown)}
            >
              {country ? country.country : "Live Location"}
              <svg
                className="-mr-1 ml-2 h-5 w-5 rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 8.293L5.707 12.586a1 1 0 1 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 1 1-1.414 1.414L10 8.293z"
                />
              </svg>
            </button>
          </div>

          {/* Dropdown Menu */}
          {dropdown && (
            <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg">
              <div className="rounded-md bg-white h-80 overflow-y-auto shadow-xs">
                <div
                  className="py-1 px-2"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a 
                    className={`block w-full px-4 py-2 rounded-md text-center text-sm text-gray-700 ${!country?'bg-black text-white':'hover:bg-gray-100 hover:text-gray-900'}`}
                    href="/"
              >
                Live Location
              </a>
                  {countryList.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => handleClick(item)}
                      className={`block w-full px-4 py-2 rounded-md text-sm text-gray-700 ${country&&item.country===country.country?'bg-black text-white':'hover:bg-gray-100 hover:text-gray-900'}`}
                      role="menuitem"
                      // disabled={country?false:country.country===item.country?true:false}
                    >
                      {item.country}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* update icon */}
        <button
          className="mx-3 p-2 rounded-full"
          onClick={() => {
            setPopup(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            fill="none"
            className="h-[30px] w-[30px]"
          >
            <path
              d="M35.0025 22.3288V18.8475H32.31V22.8863C32.3101 23.2433 32.452 23.5856 32.7045 23.8381L36.3488 27.4825V29.6175H6.73126V27.4825L10.3756 23.8381C10.628 23.5856 10.7699 23.2433 10.77 22.8863V17.5013C10.7665 15.6096 11.2623 13.7506 12.2071 12.1118C13.152 10.473 14.5126 9.1126 16.1514 8.16788C17.7902 7.22315 19.6493 6.72759 21.541 6.73122C23.4326 6.73485 25.2898 7.23756 26.925 8.18857V5.17862C25.6435 4.61125 24.2805 4.24965 22.8863 4.10714V1.34625H20.1938V4.10714C16.8748 4.44482 13.799 6.00115 11.561 8.47517C9.32298 10.9492 8.08183 14.1652 8.07751 17.5013V22.3288L4.43321 25.9732C4.18072 26.2256 4.03883 26.568 4.03876 26.925V30.9638C4.03876 31.3208 4.18059 31.6632 4.43306 31.9157C4.68554 32.1682 5.02796 32.31 5.38501 32.31H14.8088V33.6562C14.8088 35.4415 15.5179 37.1536 16.7803 38.416C18.0426 39.6783 19.7548 40.3875 21.54 40.3875C23.3252 40.3875 25.0374 39.6783 26.2997 38.416C27.5621 37.1536 28.2713 35.4415 28.2713 33.6562V32.31H37.695C38.0521 32.31 38.3945 32.1682 38.6469 31.9157C38.8994 31.6632 39.0413 31.3208 39.0413 30.9638V26.925C39.0412 26.568 38.8993 26.2256 38.6468 25.9732L35.0025 22.3288ZM25.5788 33.6562C25.5788 34.7274 25.1532 35.7547 24.3958 36.5121C23.6384 37.2695 22.6111 37.695 21.54 37.695C20.4689 37.695 19.4416 37.2695 18.6842 36.5121C17.9268 35.7547 17.5013 34.7274 17.5013 33.6562V32.31H25.5788V33.6562Z"
              fill="white"
            />
            <path
              d="M35.0025 16.155C37.9765 16.155 40.3875 13.7441 40.3875 10.77C40.3875 7.79596 37.9765 5.38501 35.0025 5.38501C32.0284 5.38501 29.6175 7.79596 29.6175 10.77C29.6175 13.7441 32.0284 16.155 35.0025 16.155Z"
              fill="white"
            />
          </svg>
        </button>

      </div>
      <form className="md:hidden flex bg-[#A13737] justify-center pb-2">
        <div className="rounded-md max-w-md flex justify-center items-center bg-[#A75F5F]">
          <input
            className="mx-4 w-4/5 bg-transparent text-white focus:outline-none"
            placeholder="search"
          />
          <button className="m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="22"
              viewBox="0 0 31 29"
              fill="none"
            >
              <path
                d="M22.4513 18.483H21.0831L20.5982 18.0481C22.6764 15.7926 23.7502 12.7155 23.1614 9.445C22.3474 4.96625 18.3294 1.3897 13.4801 0.841937C6.15416 0.00418556 -0.011394 5.73956 0.889192 12.5543C1.47804 17.0653 5.32285 20.803 10.1375 21.5602C13.6533 22.1079 16.9612 21.1091 19.3858 19.1758L19.8535 19.6269V20.8996L27.214 27.7466C27.9241 28.4072 29.0845 28.4072 29.7945 27.7466C30.5046 27.0861 30.5046 26.0067 29.7945 25.3462L22.4513 18.483ZM12.0599 18.483C7.7475 18.483 4.26639 15.2448 4.26639 11.2333C4.26639 7.22174 7.7475 3.9835 12.0599 3.9835C16.3723 3.9835 19.8535 7.22174 19.8535 11.2333C19.8535 15.2448 16.3723 18.483 12.0599 18.483Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <button className="mx-2 w-8 aspect-square items-center rounded-full flex border-none place-content-center bg-[#863E3E]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M2 2.00012L8.30415 14.1656L14.6083 2.00012"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
      {popup && <Updates popup={popup} setPopup={setPopup} />}
    </>
  );
}

export default Navbar;
