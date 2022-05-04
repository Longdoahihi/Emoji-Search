import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './EmojiResultRow.css'
import { copyImageToClipboard  } from 'copy-image-clipboard';
/*
    Mỗi dòng hiển thị ảnh emoji,tiêu đề,và thông tin

*/
class Emojiresultrow extends PureComponent {
    constructor(props) {
        super(props);
        this.imgRef = React.createRef();
    }
    
    static propTypes = {
        image : PropTypes.string,
        tiltle : PropTypes.string,
        info : PropTypes.string
    }
    /**
     * Gói npm i copy-image-clipboard
     * search "copy-image-clipboard"
     */
    copytoClipboard = ()=>{
        const imgCurrent = this.imgRef.current;
        copyImageToClipboard(imgCurrent.src)
            .then(() => {
                this.props.changeEmojiResultRowCopied(this.props.tiltle);
            })
            .catch((e) => {
                console.log('Error: ', e.message)
            })
    }
    render() {
        const codePointHex = this.props.image.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
        return (
            <div className='emoji-result-row' onClick={this.copytoClipboard}>
                <img src={src}  alt={this.props.tiltle} className='emoji-icon' ref={this.imgRef} />
                <span className='title'>{this.props.tiltle}</span>
                <span className='info' style={this.props.isCopied ? {color : "green"} : {color : "#ccc"}} >{this.props.info}</span>
            </div>
        );
    }
}

export default Emojiresultrow;
