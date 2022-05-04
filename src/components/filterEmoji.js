import emojiList from './emojiList.json'
// 4 - 5 - 2022
// Lọc các emoji theo searchText và đưa ra tối đa 20 kết quả
// thêm thuộc tính color và isCopied cho emoji
export default function filterEmoji(searchText,maxResults) {
    return emojiList.filter(emoji =>{
        emoji.isCopied = false;
        if (emoji.title.toLowerCase().includes(searchText.toLowerCase()))
            return true;
        if (emoji.keywords.includes(searchText))
            return true;
        return false;
    }
    ).slice(0,maxResults);
};
 