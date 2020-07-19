import React from 'react';

const Header = () => {
  const title = 'To-Do List';
  const subtitle = 'Set your daily to-do list and get it done';
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{title}</h1>
        <h2 className="header__subtitle">{subtitle}</h2>
      </div>
    </div>
  )
}

export default Header;