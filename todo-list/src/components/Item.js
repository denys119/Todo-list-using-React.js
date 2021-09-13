import React from "react";
import styled from "styled-components";
//import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
const Item = ({ name, complete, toggleItemComplete, id, deleteItem }) => {
  const handleItemComplete = (e) => {
    toggleItemComplete(id);
  };
  const handleDeleteItem = (e) => {
    console.log(e);
    deleteItem(id);
  };
  return (
    <ItemContainer>
      <ListItem>
        <p className={complete ? "completeItem" : ""}>{name}</p>
      </ListItem>
      <Check onClick={handleItemComplete}>
        <FontAwesomeIcon size="2x" icon={faCheck} />
      </Check>
      <Trash onClick={handleDeleteItem}>
        <FontAwesomeIcon size="2x" icon={faTrash} />
      </Trash>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem auto;
  width: 90%;
`;
const ListItem = styled.div`
  width: 70%;
  height: 4rem;
  margin: 1rem 0rem;
  border: 0.2rem solid #fffebf;
  display: flex;
  align-items: center;
  padding-left: 1rem;

  p {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    letter-spacing: 0.3rem;
  }
  .completeItem {
    text-decoration: line-through;
  }
`;

const Check = styled.div`
  width: 10%;
  height: 4rem;
  margin: 1rem 0rem;
  border: 0.2rem solid #fffebf;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  i,
  svg {
    pointer-events: none;
    color: #8effa0;
  }
`;
const Trash = styled.div`
  width: 10%;
  height: 4rem;
  margin: 1rem 0rem;
  border: 0.2rem solid #fffebf;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  i,
  svg {
    pointer-events: none;
    color: #ff4d4d;
  }
`;
export default Item;
