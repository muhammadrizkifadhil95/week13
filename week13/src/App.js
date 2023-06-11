import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [thing, setThing] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGIyMGEzY2EzNWZiMGE5NGVjODVjNDg0MjczOGZhNiIsInN1YiI6IjY0NzYxMzk2OTYzODY0MDBmYmIyNTY1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fzzrFuxDGIKePKWzr_hZT4yvJBt_jQ8r0AgvXhIvGi0"
    }
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      setThing(json.results);
    });

  const RenderThis = () => {
    return thing.map((val, index) => {
      return (
        <div>
          <h1>{val.original_title}</h1>
          <p>{val.overview}</p>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <RenderThis />
    </div>
  );
}
