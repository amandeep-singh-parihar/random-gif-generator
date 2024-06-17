import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Tag() {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("");

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const { data } = await axios.get(url);
  //   const imageScource = data.data.images.downsized_large.url;
  //   // console.log(imageScource);
  //   setGif(imageScource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const {gif,loading,fetchData}=useGif(tag);
  // we have to pass the tag in this hook for the urls
  //custom hook

  function clickHandler() {
    fetchData(tag);
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className="w-2/5 bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center mt-[15px] mb-[15px]">
      <h1 className="text-2xl font-semibold underline underline-offset-3 mt-2 mb-2 uppercase">
        RANDOM {tag} GIF
      </h1>

      <div className="relative w-full max-w-2xl flex flex-col items-center justify-center">
        <div className="w-full h-80 bg-transparent overflow-hidden relative px-16">
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <img
              src={gif}
              alt="Random GIF"
              className="object-cover w-full h-full rounded-lg"
            />
          )}
        </div>
        <input
          type="text"
          className="w-4/5 text-lg py-2 rounded-lg text-center border border-gray-400 mt-4"
          onChange={changeHandler}
          value={tag}
        />
        <button
          onClick={clickHandler}
          className="text-sm font-semibold bg-white bg-opacity-75 rounded-md h-10 px-6 mt-4 w-4/5 mb-4"
        >
          GENERATE
        </button>
      </div>
    </div>
  );
}

export default Tag;
