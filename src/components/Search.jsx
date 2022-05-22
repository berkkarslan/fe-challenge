import React, { useState } from "react";
import { useServices } from "../services/";
import { Link } from "react-router-dom";
export default function Search() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const { api } = useServices();

  const getSuggestions = () => {
    return new Promise((resolve, reject) => {
      if (input.length > 1 && input !== "") {
        api.server.get(`/search/movie`, `&query=${input}`).then((res) => {
          setSuggestions(res.results);
          resolve();
        });
      } else {
        setSuggestions([]);
        resolve();
      }
    });
  };

  const onChange = async (e) => {
    setInput(e.target.value);
    await getSuggestions();
  };

  return (
    <>
      <div className='search'>
        <form action=''>
          <label>
            <input type='text' onChange={onChange} value={input} placeholder="Film, dizi, kişi ara..." />
          </label>
          <input type='submit' value='Search' />
        </form>
        {suggestions.length > 0 ? (
          <ul className='suggestions'>
            {suggestions.map((suggestion) => {
              return (
                <Link
                  key={suggestion.id}
                  className=''
                  to={`/movie/${suggestion.id}`}
                >
                  <li>
                    {suggestion.original_title} (
                    {suggestion?.release_date?.substr(0, 4)})
                  </li>
                </Link>
              );
            })}
          </ul>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
