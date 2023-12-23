import React,{ useState } from "react";
import Updates from "./Updates";

function handleClick() {
  console.log("button clicked");
}

function Navbar() {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <div className="h-18 py-1 md:py-4 min-w-full bg-[#A13737] flex place-content-around">
        <h1 className="px-4 text-3xl text-white font-semibold self-center">
          Worldwide News
        </h1>
        <form className="hidden md:flex">
          <div className="rounded-md w-80 flex justify-center items-center bg-[#A75F5F]">
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
        {/* update icon */}
        <button
          className="mx-3 p-2 rounded-full"
          onClick={() => {
            setPopup(true);
            console.log(popup);
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
              fill="black"
            />
            <path
              d="M35.0025 16.155C37.9765 16.155 40.3875 13.7441 40.3875 10.77C40.3875 7.79596 37.9765 5.38501 35.0025 5.38501C32.0284 5.38501 29.6175 7.79596 29.6175 10.77C29.6175 13.7441 32.0284 16.155 35.0025 16.155Z"
              fill="black"
            />
          </svg>
        </button>
        <button className="flex place-items-center" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="30"
            viewBox="0 0 75 37"
            fill="none"
          >
            <path
              d="M21.2532 0.592896C9.56392 0.592896 0 8.65307 0 18.5044C0 28.3557 9.56392 36.4159 21.2532 36.4159C32.9424 36.4159 42.5063 28.3557 42.5063 18.5044C42.5063 8.65307 32.9424 0.592896 21.2532 0.592896ZM35.0677 12.4593C36.1304 12.4593 36.9274 13.1309 37.99 13.1309C37.193 14.0265 33.7394 14.0265 32.6767 12.9071C33.4737 12.6832 34.0051 12.4593 35.0677 12.4593ZM2.65665 18.5044C2.65665 17.6088 2.65665 16.7132 2.92231 15.5938C3.18797 15.5938 3.45364 15.8177 3.7193 15.8177C3.7193 15.8177 3.98497 16.0416 3.98497 16.2655C3.98497 16.9371 4.78196 17.3849 5.31329 17.3849C7.43861 17.6088 8.2356 19.1761 10.0953 19.6239C10.6266 19.8478 10.3609 20.2956 10.0953 20.7433C8.50127 22.5345 9.82959 23.8779 11.1579 24.9973C12.4862 25.8929 12.4862 26.7885 12.7519 28.1318C12.7519 29.6991 13.0176 31.4902 13.8146 33.0575C7.17294 30.3708 2.65665 24.9973 2.65665 18.5044ZM21.2532 34.177C19.3935 34.177 17.2682 33.9531 15.6742 33.5053C15.4085 33.0575 15.4085 32.6097 15.6742 32.1619C16.7369 30.3708 17.7995 28.8035 19.1278 27.2363C19.6592 26.7885 20.1905 26.3407 20.1905 25.669C20.1905 25.2212 20.4562 24.5495 20.7218 24.1017C21.5188 22.9823 21.2532 22.3106 20.1905 22.0867C18.0652 21.6389 17.0025 20.0717 15.4085 19.4C13.8146 18.7283 12.2206 18.2805 10.8922 18.9522C10.3609 19.1761 9.56392 19.4 9.56392 18.7283C9.56392 17.8327 8.2356 17.161 8.50127 16.2655C8.2356 16.2655 7.96994 16.2655 7.70427 16.4894C7.43861 16.7132 7.17294 16.9371 6.64161 16.7132C6.11028 16.2655 6.37595 15.8177 6.37595 15.3699C6.64161 14.9221 6.90728 14.6982 7.43861 14.4743C8.50127 14.2504 9.56392 14.2504 10.0953 15.3699C10.8922 13.3548 12.4862 12.2354 14.0802 11.3398C14.0802 11.3398 16.2055 9.77254 16.4712 9.77254C16.7369 9.77254 17.0025 10.2203 17.5339 10.4442C18.0652 10.4442 18.3309 10.4442 18.3309 9.99644C18.5965 8.87697 17.7995 7.5336 16.7369 7.30971C16.7369 7.08582 17.0025 7.08582 17.0025 7.08582C17.7995 6.86192 18.8622 6.41413 18.5965 5.74245C18.5965 4.84688 17.5339 4.39909 16.4712 4.39909C15.9399 4.39909 15.4085 4.39909 14.8772 4.62298C13.8146 5.07077 12.4862 5.51856 10.8922 5.51856C13.8146 3.72741 17.5339 2.83183 21.2532 2.83183H23.3785C21.7845 3.05573 20.1905 3.50352 19.1278 3.9513C20.7218 4.1752 20.9875 4.84688 20.4562 5.96635C20.1905 6.41413 20.4562 6.86192 20.9875 7.08582C21.5188 7.30971 22.0502 7.30971 22.3158 6.86192C22.8472 6.19024 23.9098 5.96635 24.7068 5.74245C25.7695 5.51856 26.5665 5.07077 27.3634 4.1752C27.3634 3.9513 27.6291 3.9513 27.8948 3.72741C29.4888 4.1752 31.0828 5.07077 32.6767 5.96635C32.4111 5.96635 32.4111 6.19024 32.1454 6.19024C31.6141 6.63803 30.8171 6.86192 31.6141 7.7575C31.8797 8.20529 31.6141 8.42918 31.3484 8.65307C30.8171 8.87697 30.5514 8.65307 30.2858 8.42918C30.0201 8.20529 30.0201 7.7575 29.2231 7.7575C28.9574 8.20529 28.1604 8.42918 28.1604 9.10086C29.4888 9.10086 29.2231 9.99644 29.4888 10.6681C27.8948 10.892 27.3634 11.5637 28.1604 12.6832C28.4261 13.1309 27.8948 13.3548 27.6291 13.5787C26.5665 14.9221 25.5038 15.8177 25.5038 17.3849C25.5038 18.9522 26.8321 20.5194 28.9574 20.2956C31.3484 20.0717 31.3484 20.0717 32.1454 21.8628C32.1454 22.0867 32.4111 22.3106 32.4111 22.5345C32.6767 22.9823 32.9424 23.4301 32.6767 23.8779C31.8797 25.669 32.9424 27.0124 33.7394 28.3557C34.0051 28.8035 34.2707 29.0274 34.5364 29.2513C31.0828 32.3858 26.5665 34.177 21.2532 34.177Z"
              fill="white"
            />
          </svg>
          <select>
            <option value={"jp"}>Japan</option>
          </select>
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
      {popup && (
        <Updates
          popup={popup}
          setPopup={setPopup}
        />
      )}
    </>
  );
}

export default Navbar;