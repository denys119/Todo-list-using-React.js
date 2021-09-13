import React, { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";
//import Global Styles
import GlobalStyle from "./components/GlobalStyle";
//import styled
import { AppStyle, Title } from "./style";
function App() {
  //Create a state for the list item
  const [items, setItems] = useState([]);
  const toggleItemComplete = (id) => {
    const newItems = [...items]; //creem un nou array deoarece nu e ok sa modificam pe cel initial
    const item = newItems.find((item) => item.id === id); //cautam in array itemul care are acelasi id cu cel selectat de noi
    item.complete = !item.complete; //dupa ce am obtinut itemul nou ii schimbam valoarea lui complete
    setItems(newItems); //actualizam sirul
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id)); //va lasa doar elementele care nu au id-ul egal cu cel pe care am dat click
  };
  return (
    <>
      <GlobalStyle />
      <AppStyle>
        <Title>Shop List With React</Title>
        <Input setItems={setItems} items={items} />
        <List
          items={items}
          toggleItemComplete={toggleItemComplete}
          deleteItem={deleteItem}
        />
      </AppStyle>
    </>
  );
}

export default App;
