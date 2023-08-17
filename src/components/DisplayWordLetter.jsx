export const DisplayWordLetter = ({letter, index1, index2, deleteWordLetter, wordIndex}) => {
    if (letter !== '') {
        if (isNaN(wordIndex)) {
            return <button onClick = {() => deleteWordLetter(index1, index2)} className = 'wordLetter'>{letter}</button>  
        } else {
            return <button onClick = {() => deleteWordLetter(index1, index2)} className = {(index1===wordIndex) ? 'activeWordLetter': 'inactiveWordLetter'}>{letter}</button>}
        } else {
            return <div></div>
        }
}

