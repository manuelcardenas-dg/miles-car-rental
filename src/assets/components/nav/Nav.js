import React, { Component } from 'react';
import MilesLogo from '../../images/miles-logo.png';
import '../../css/Global.css';
import { NavList } from "./NavList";

class Nav extends Component{
    render(){
        return(
            <nav className="c-nav">
                <img src={MilesLogo} className="c-nav__logo" alt="Miles Cart Rental Logo" />
                <div className="MenuIcon">
                    
                </div>
                <ul>
                    {NavList.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Nav