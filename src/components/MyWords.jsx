import {DisplayWord} from "./DisplayWord";
import { useContext } from "react";
import { MakingWordContext } from "../context/MakingWordContextProvider";

export const MyWords = () => {

    const {myWords, deleteWordLetter, wordIndex} = useContext(MakingWordContext);

    return (<div className = 'myWordsContainer'>
        {myWords.map((word, index) => <DisplayWord wordIndex = {wordIndex} word = {word} index1 = {index} deleteWordLetter = {deleteWordLetter}/>)}
    </div>)

}

export default MyWords;