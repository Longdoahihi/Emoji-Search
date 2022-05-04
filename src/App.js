import React, { Component } from 'react';
import Header from './components/Header';
import filterEmoji from './components/filterEmoji'
import SearchInput from './components/SearchInput';
import './App.css'
import EmojiResult from './components/EmojiResult';
/**05 - 04 -2022 */
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emojiData : filterEmoji("",20)
        }
    }
    SearchEmoji = (value)=>{
        this.setState({emojiData : filterEmoji(value,20)});
    }
    setCopiedResult = (emojiCopied)=>{
        const emojiDataNew = this.state.emojiData.map((emoji)=>{
            if (emojiCopied === emoji.title)
                emoji.isCopied = true;
            else
                emoji.isCopied = false;
            return emoji;
        })
        this.setState(()=>({emojiData : emojiDataNew}));
    }
    render() {
        return (
            <div className='contain'>
                <Header/>
                <SearchInput SearchEmoji={this.SearchEmoji} />
                <EmojiResult 
                    emojiData={this.state.emojiData}
                    setCopiedResult={this.setCopiedResult}
                    />
            </div>
        );
    }
}

export default App;
