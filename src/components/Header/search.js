import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Spinner } from "reactstrap";
import { SEARCH_KEDAI } from "../../store/types";

function Search() {
  const [query, setQuery] = useState("");
  const [kedaiResult, setKedaiResult] = useState({});
  const [warnInput, setWarnInput] = useState("");
  const [isLoad, setIsLoad] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      if (query.length < 1) {
        setWarnInput("please type something");
      } else {
        setWarnInput("");
        setIsLoad(true);
        await axios
          // .get(`http://localhost:3000/api/kedai?search=${query}`)
          .get(
            `https://hello-dhkh-express.herokuapp.com/api/kedai?search=${query}`
          )
          .then(function (response) {
            const result = response.data.result;
            if (result.length < 1) {
              setIsLoad(false);
              setWarnInput("maaf yang kamu cari gak ada nih");
            } else {
              setIsLoad(false);
              setKedaiResult({
                isSuccess: response.data.isSuccess,
                result: result,
              });
              // console.log("kedai result", kedaiResult);
            }
          })
          .catch(function (error) {
            setWarnInput("error");
            setKedaiResult({ message: error });
            // console.log(error);
          });
      }
    } catch (err) {
      setWarnInput("error");
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
      <section className="warn-input">
        <Spinner
          style={{ display: isLoad ? " block" : "none", margin: "0px" }}
          size="sm"
          type="grow"
          color="danger"
        />
        <p id="warn-input-text">{warnInput}</p>
      </section>
    </>
  );
}

export default Search;
