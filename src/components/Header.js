import React, { Component } from 'react';
import './Header.css'
class Header extends Component {
    render() {
        return (
            <header>
                <img 
                    src="//cdn.jsdelivr.net/emojione/assets/png/1f601.png" 
                    width="32"
                    height="32"
                    alt="" />
                Emoji Search by Quách Văn Long
                <img 
                    src="//cdn.jsdelivr.net/emojione/assets/png/1f601.png" 
                    width="32"
                    height="32"
                    alt="" />                
            </header>
        );
    }
}

export default Header;
