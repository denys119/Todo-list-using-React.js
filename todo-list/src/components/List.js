import React from "react";
import styled from "styled-components";
//import Item component
import Item from "./Item";
const List = ({ items, toggleItemComplete, deleteItem }) => {
  return (
    <ItemsContainer>
      {items.map((item) => {
        return (
          <Item
            name={item.name}
            complete={item.complete}
            id={item.id}
            toggleItemComplete={toggleItemComplete}
            deleteItem={deleteItem}
          />
        );
      })}
    </ItemsContainer>
  );
};

const ItemsContainer = styled.div`
  min-height: 40vh;
  width: 46rem;
  margin: 0rem auto;
  display: flex;

  flex-direction: column;
  border: 0.3rem solid #23d997;
`;
export default List;
