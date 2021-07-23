import React from "react";
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import './App.css';

const items = [
  {
    value: 'Передать в футер кол-во дел которые нужно выполнить!'
  },
  {
    value: 'Передать 3 дела в Item!'
  },
  {
    value: 'Запушить в репозиторий!'
  },
]

const App = () => (
  <div className="wrap">
    <h1 className="wrap__title">Важные дела:</h1>
    <InputItem />
    <ItemList items={items} />
    <Footer className="wrap__Footer" count={3}/>
  </div>
)

export default App;