import React, { Component } from 'react';
import './SearchInput.css'
class Searchinput extends Component {
    constructor(props) {
        super(props);
        this.searchRef = React.createRef();
    }
    searchValue = ()=>{
        this.props.SearchEmoji(this.searchRef.current.value);
    }
    render() {
        return (
            <div>
                <input type="text" className='text_input' ref={this.searchRef} onChange={this.searchValue} placeholder="Input emoji" />
            </div>
        );
    }
}

export default Searchinput;
