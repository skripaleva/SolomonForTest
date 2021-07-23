import React from "react";
import Item from "../Item/Item";

const ItemList = ({items}) => (
  <ul>
    {items.map(item => <li key={item.value}><Item value={item.value} /></li> )}
  </ul>
)

export default ItemList;