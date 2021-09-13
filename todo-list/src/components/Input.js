import React, { useRef, useEffect } from "react";
import styled from "styled-components";
//import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "items";
const Input = ({ items, setItems }) => {
  //useEffect
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedItems) setItems(storedItems);
  }, []);
  //useEffect pentru a scoate itemele din local storage

  //useEffect pentru a salva itemele in localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  //useRef
  const itemName = useRef();

  const addItemHandler = (e) => {
    console.log(items);
    const name = itemName.current.value;
    console.log(name);
    if (name === "") return alert("Completati campul de mai jos!");
    setItems([...items, { id: uuidv4(), name: name, complete: false }]);
    console.log(items);
    itemName.current.value = null;
  };
  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="Add an item to your shop list"
        ref={itemName}
      />
      <button onClick={addItemHandler}>
        <FontAwesomeIcon size="2x" icon={faPlus} />
      </button>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 20vh;
  input {
    height: 4rem;
    width: 40rem;
    margin-right: 1rem;
    padding: 0rem 2rem;
    background: transparent;
    outline: none;
    border: 0.3rem solid #23d997;
    color: #fff;
    font-weight: lighter;
    font-size: 1rem;
  }
  button {
    height: 4rem;
    width: 5rem;
    border: 0.3rem solid #23d997;
    background: transparent;
    outline: none;
    cursor: pointer;
    i,
    svg {
      pointer-events: none;
      color: #fffebf;
    }
  }
`;
export default Input;
