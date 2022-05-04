import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import EmojiResultRow from './EmojiResultRow';
import './EmojiResult.css'
/**
 * List các dòng emoji
 */
class EmojiResult extends PureComponent {
    static propTypes = {
        emojiData : PropTypes.array
    }
    // Khi dòng emoji đc vopy thì đổi trạng thái isCopied
    changeEmojiResultRowCopied=(emojiCopied)=>{
        this.props.setCopiedResult(emojiCopied);
    }
    render() {
        return (
            <div className='list-emoji'>
              {this.props.emojiData.map((emoji,index)=>{
                                return  <EmojiResultRow 
                                            key={index}
                                            image={emoji.symbol}
                                            tiltle={emoji.title}
                                            isCopied={emoji.isCopied}
                                            info={emoji.isCopied ? "Emoji is Copied" : "Click to copy emoji"}
                                            setColorCopied={this.props.setColorCopied}
                                            changeEmojiResultRowCopied={this.changeEmojiResultRowCopied}
                                        />
                            })}  
            </div>
        );
    }
}

export default EmojiResult;
