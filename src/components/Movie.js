import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  const deleteHandler = (listId) => {
    props.delete(listId);
  };
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={deleteHandler.bind(this, props.id)}>Delete</button>
    </li>
  );
};

export default Movie;
