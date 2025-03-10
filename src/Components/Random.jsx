import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random() {
  const { gif, loading, fetchData } = useGif();
  //custom hook

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-2/5 h-[450px] bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center mt-[15px]">
      <h1 className="text-2xl font-semibold underline underline-offset-3 mt-2 mb-2">
        A RANDOM GIF
      </h1>
      <div className="relative w-full max-w-2xl flex flex-col items-center justify-center">
        <div className="w-full h-80 bg-transparent overflow-hidden relative px-16">
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <img src={gif} alt="Random GIF" className="object-cover w-full h-full rounded-lg" />
          )}
        </div>
        <button
          onClick={clickHandler}
          className="text-sm font-semibold bg-white bg-opacity-75 rounded-md h-10 px-6 mt-6 w-4/5"
        >
          GENERATE
        </button>
      </div>
    </div>
  );
}

export default Random;
