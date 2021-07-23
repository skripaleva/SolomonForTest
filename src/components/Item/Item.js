import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import styles from '../App/App.module.css'
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

class Item extends React.Component {
  componentDidMount() {
    this.timerID = setInterval(() => console.log('interval'), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    const {value, isDone, onClickDone, id, onClickDelete} = this.props;
    return <span className={
      classNames({
        [styles.ItemList]: true,
        [styles.done]: isDone
      })
    }>
  <span>
    <Checkbox
      checked={isDone}
      tabIndex={-1}
      onClick={() => onClickDone(id)}
    />
    {value}
  </span>
  <IconButton
    className={styles.delete}
    aria-label="delete"
    onClick={() => onClickDelete(id)}
  >
    <DeleteIcon />
  </IconButton>
</span>}
}

Item.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
}

export default Item;