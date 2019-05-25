import React from 'react';
import './styles/header.scss'

const Header = (props) =>{
     return(
      <div className="header">
          <div className="container">
            <h1 className="header_title">{props.title}</h1>
            <h2 className="header_subtitle">{props.subtitle}</h2>
          </div>
      </div>
   )
}

export default Header;
