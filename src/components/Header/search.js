import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { SEARCH_KEDAI } from "../../store/types";

function Search() {
  const [query, setQuery] = useState("");
  const [kedaiResult, setKedaiResult] = useState({});
  const [warnInput, setWarnInput] = useState("");
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      if (query.length < 1) {
        setWarnInput("please type something");
      } else {
        setWarnInput("");
        await axios
          .get(`http://localhost:3000/api/kedai?search=${query}`)
          .then(function (response) {
            const result = response.data.result;
            if (result.length < 1) {
              // setKedaiResult({
              //   isSuccess: true,
              //   message: "maaf yang kamu cari gak ada nih",
              // });
              setWarnInput("maaf yang kamu cari gak ada nih");
            } else {
              setKedaiResult({
                isSuccess: response.data.isSuccess,
                result: result,
              });
              // console.log("kedai result", kedaiResult);
            }
          })
          .catch(function (error) {
            setKedaiResult({ message: error });
            // console.log(error);
          });
      }
    } catch (err) {
      // console.log("err search", err);
    }
  };
  // put dispath in here, it's kinda weird but yahh mau gimana lagi
  dispatch({ type: SEARCH_KEDAI, payload: kedaiResult });

  return (
    <>
      <form onSubmit={handleSearch} className="form-inline search-bar">
        <input
          value={query}
          className="form-control mr-sm-2 search-input"
          type="text"
          name="search"
          placeholder="kedai or halte/stasiun"
          aria-label="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="btn btn-outline-info my-0 my-sm-2 search-bttn"
          type="submit"
        >
          Search
        </button>
      </form>
      <p id="warn-input">{warnInput}</p>
    </>
  );
}

export default Search;
