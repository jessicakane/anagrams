import {useContext} from 'react';
import {DisplayLetter} from './DisplayLetter';
import { MainBoardContext } from '../context/MainBoardContextProvider';
import { MakingWordContext } from '../context/MakingWordContextProvider';

export const LettersOut = () => {

    const {lettersOut, removeLetter} = useContext(MainBoardContext);
    const {addLetterToBoard} = useContext(MakingWordContext);

    return <div className = 'board'>
        {lettersOut.map((letter, index) => <DisplayLetter key = {index} index = {index} removeLetter = {removeLetter} addLetterToBoard = {addLetterToBoard} letter = {letter}/>)}
    </div>
}
