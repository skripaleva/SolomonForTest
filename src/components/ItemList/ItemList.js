import React from "react";
import PropTypes from 'prop-types';
import Item from "../Item/Item";
import Divider from '@material-ui/core/Divider';

class ItemList extends React.Component {
  render() {
    const {items, onClickDone, onClickDelete} = this.props
    return <ul>
      {items.map(item =>
        <li key={item.id}>
          <Item
            value={item.value}
            isDone={item.isDone}
            id={item.id}
            onClickDone={onClickDone}
            onClickDelete={onClickDelete}
          />
          <Divider />
        </li>
      )}
    </ul>
  }
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
}

export default ItemList;