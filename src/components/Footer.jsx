import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-grow justify-between m-4 mx-8">
      <div className="border-t-2 font-mono flex gap-2 flex-col justify-center items-center border-black w-1/3">
        <div className="">PRIVACY POLICY</div>
        <div>TERMS & CONDITIONS</div>
        <div>ABOUT</div>
      </div>
      <div className="flex flex-col gap-2 items-center w-1/3">
        <div className="pb-4 text-2xl font-extrabold  font-serif -mt-4">
          Perfume
          <br />
          <span className=" mx-2">Store</span>
        </div>
        <div className="w-full px-2 gap-2 flex flex-col">
          <div className="flex justify-center gap-6">
            <Link to={"#"}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </Link>
            <Link to={"#"}>
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.5em"
                width="1.5em"
              >
                <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
              </svg>
            </Link>
            <Link to={"#"}>
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.5em"
                width="1.5em"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </Link>
          </div>
          <div className="flex justify-center">weekly Newsletter</div>
          <div>
            <div className="border-2 rounded-t-sm text-center border-gray-500">
              Name@gmail.com
            </div>
            <div className="border-2 text-center rounded-b-sm border-gray-500 border-t-0">
              Subscribe
            </div>
          </div>
          <div className="flex justify-center items-center">
            c 2024 | PerfumeStore
          </div>
        </div>
      </div>
      <div className="border-t-2 font-mono flex gap-2 flex-col justify-center items-center border-black w-1/3">
        <div>SHIPPING INFO</div>
        <div>RETURNS / EXCHANGE</div>
        <div>CONTACT</div>
      </div>
    </div>
  );
}

export default Footer;
