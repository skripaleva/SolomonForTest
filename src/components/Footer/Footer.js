import React from "react";
import PropTypes from 'prop-types';
import styles from '../App/App.module.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Footer = ({ count, onClickDeleteAllTrue, onClickFilterAll, onClickFilterFalse, onClickFilterTrue }) => (
  <div className={styles.Footer}>
    Осталось выполнить: {count}
    <ButtonGroup variant="text" color="default">
      <Button onClick={onClickFilterAll}>Все</Button>
      <Button onClick={onClickFilterFalse}>Активные</Button>
      <Button onClick={onClickFilterTrue}>Выполненные</Button>
    </ButtonGroup>
    <Button
      color="default"
      startIcon={<DeleteIcon />}
      onClick={onClickDeleteAllTrue}
    >
      Удалить выполненные
    </Button>
  </div>
);

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;