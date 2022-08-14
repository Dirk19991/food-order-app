import React, { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import mealsImage from '../../components/assets/meals.jpg';

export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='meals' />
      </div>
    </Fragment>
  );
}
