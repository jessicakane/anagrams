import React, {useState, useContext} from 'react';
import { MainBoardContext } from '../context/MainBoardContextProvider'; 

export const FlipLetter = () => {

    const {addLetter} = useContext(MainBoardContext);

    const [letterCount, setLetterCount] = useState([{letter: 'A', count: 0, max: 13}, {letter: 'B', count: 0, max: 3}, {letter: 'C', count: 0, max: 3}, {letter: 'D', count: 0, max: 6}, {letter: 'E', count: 0, max: 18}, {letter: 'F', count: 0, max: 3}, {letter: 'G', count: 0, max: 4}, {letter: 'H', count: 0, max: 3}, {letter: 'I', count: 0, max: 12}, {letter: 'J', count: 0, max: 2}, {letter: 'K', count: 0, max: 2}, {letter: 'L', count: 0, max: 5}, {letter: 'M', count: 0, max: 3}, {letter: 'N', count: 0, max: 8}, {letter: 'O', count: 0, max: 11}, {letter: 'P', count: 0, max: 3}, {letter: 'Q', count: 0, max: 2}, {letter: 'R', count: 0, max: 9}, {letter: 'S', count: 0, max: 6}, {letter: 'T', count: 0, max: 9}, {letter: 'U', count: 0, max: 6}, {letter: 'V', count: 0, max: 3}, {letter: 'W', count: 0, max: 3}, {letter: 'X', count: 0, max: 2}, {letter: 'Y', count: 0, max: 3}, {letter: 'Z', count: 0, max: 2}])

    const [tileCount, setTileCount] = useState(0);

    const newLetter = () => {
        if (tileCount === 144) {
            return alert('No more tiles!');
        } 
        const alph = 'AAAAAAAAAAAAABBBCCCDDDDDDEEEEEEEEEEEEEEEEEEFFFGGGGHHHIIIIIIIIIIIIJJKKLLLLLMMMNNNNNNNNOOOOOOOOOOOPPPQQRRRRRRRRRSSSSSSTTTTTTTTTUUUUUUVVVWWWXXYYYZZ'
        const randomIndex = Math.floor(Math.random()*alph.length);
        for (let i = 0; i < letterCount.length; i++) {
            if (letterCount[i].letter === alph[randomIndex]) {
                if (letterCount[i].count === letterCount[i].max) {
                    return newLetter();
                } 
                const updatedLetterCount = [...letterCount];
                updatedLetterCount[i].count++;
                setLetterCount(updatedLetterCount);
                break;
            }
        }
        let newTileCount = tileCount + 1;
        setTileCount(newTileCount);
        return alph[randomIndex];
    }

    return <div className ='buttonContainer'>
        <button onClick={() => {addLetter(newLetter())}}>Flip letter</button>
    </div>

}
