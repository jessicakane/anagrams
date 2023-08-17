import {DisplayWordLetter} from "./DisplayWordLetter";

export const DisplayWord = ({word, index1, deleteWordLetter, wordIndex}) => {
    console.log(word);

    return <div className = {index1 === wordIndex ? 'activeWordContainer' : 'inactiveWordContainer'}>
        {word.map((letter, index) => <DisplayWordLetter key = {index} wordIndex = {wordIndex} letter = {letter} index1 = {index1} index2 = {index} deleteWordLetter = {deleteWordLetter}/>)}
    </div>

}

