import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import styles from '../App/App.module.css';

const Todo = () => {
  const initialState = {
    items: [
      {
        value: 'Передать в футер кол-во дел которые нужно выполнить!',
        isDone: true,
        id: 1,
      },
      {
        value: 'Передать 3 дела в Item!',
        isDone: false,
        id: 2,
      },
      {
        value: 'Запушить в репозиторий!',
        isDone: true,
        id: 3,
      },
      {
        value: 'Дополнительный!',
        isDone: false,
        id: 4,
      },
    ],
    count: 4,
  };

  const [items, setItems] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);

  useEffect(() => {
    console.log('update')
  });

  useEffect(() => {
    console.log('mount')
  }, [items]);

  //Стрелочная ф-ция не теряет контекст, поэтому будем использовать ее.
  const onClickDone = (id) => {
    const newItems = items.map(item => {
      const newItem = {...item};
      if (newItem.id === id) {
        newItem.isDone = !newItem.isDone;
      }
      return newItem
    });
    setItems(newItems)
  }

  const onClickDelete = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  };

  const onClickAdd = (value) => {
    const newItems = [
      ...items,
      {
        value,
        isDone: false,
        id: count + 1,
      }
    ]
    setItems(newItems);
    setCount((count) => count + 1)
  }

  const onClickDeleteAllTrue = () => {
    const newItems = items.filter(item => item.isDone === false);
    setItems(newItems);
  }

  const onClickFilterAll = () => {

  }

  const onClickFilterFalse = () => {

  }

  const onClickFilterTrue = () => {

  }

    return (
      <div>
        <div>
          <h1 className={styles.title}>Важные дела:</h1>
          <InputItem
            onClickAdd={onClickAdd}
          />
          <ItemList
            items={items}
            onClickDone={onClickDone}
            onClickDelete={onClickDelete}
          />
          <Footer
            count={items.length}
            onClickDeleteAllTrue={onClickDeleteAllTrue}
            onClickFilterAll={onClickFilterAll}
            onClickFilterFalse={onClickFilterFalse}
            onClickFilterTrue={onClickFilterTrue}
          />
        </div>
      </div>
    )
}

export default Todo;