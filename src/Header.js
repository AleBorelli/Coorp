import React from 'react';

class Header extends React.Component{
    render(){
      return(
        <header>
          <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">Coorp</span>
          </nav>
        </header>
      )
    }
}

export default Header;