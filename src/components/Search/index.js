import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { filteredMovie } from "redux/movieSlice";

const Filter = () => {
  const inputRef = useRef(``);
  const dispatch = useDispatch();
  const filterUsers = () => {
    dispatch(filteredMovie(inputRef.current.value));
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        ref={inputRef}
        onChange={filterUsers}
      />
    </form>
  );
};

export default Filter;
