import {DisplayLetterBoard} from "./DisplayLetterBoard";
import { useContext } from "react";
import { MakingWordContext } from "../context/MakingWordContextProvider";
import { MainBoardContext } from "../context/MainBoardContextProvider";
import axios from "axios";

export const YourBoard = () => {

    const {yourBoard, setYourBoard, myWords, setMyWords, checkBoardStatus, apiUrl, wordIndex, setWordIndex, myWordsReference, setMyWordsReference} = useContext(MakingWordContext);
    const {lettersOut, setLettersOut, points, setPoints} = useContext(MainBoardContext);

    const deleteLetterFromBoard = (index) => {
        if (yourBoard[index].fromMiddle) {
            const updatedLettersOut = [
                ...lettersOut,
                yourBoard[index].value
            ];
            setLettersOut(updatedLettersOut);
            const updatedBoard = [
                ...yourBoard.slice(0, index),
                ...yourBoard.slice(index + 1)
            ];
            setYourBoard(updatedBoard);
        } else {
            const newWord = myWords[yourBoard[index].index1];
            newWord[yourBoard[index].index2] = yourBoard[index].value;
            const updatedWords = [...myWords];
            updatedWords[yourBoard[index].index1] = newWord;
            setMyWords(updatedWords);
            const updatedBoard = [
                ...yourBoard.slice(0, index),
                ...yourBoard.slice(index + 1)
            ];
            setYourBoard(updatedBoard);

        } checkBoardStatus();
        console.log(yourBoard);

    }

    const getRootWord = async (wordObj) => {
        try {
          const apiKey = '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';
          const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
          const response = await axios.post(
            apiUrl,
            {
              prompt: `What is the root of the word "${wordObj.wordStr}"?`,
              max_tokens: 100,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
              },
            }
          );
    
          const rootText = response.data.choices[0].text;
          const rootArray = rootText.split('\"');
          console.log(`root array of function 1: ${rootArray}`);
          const root = rootArray[3];
          console.log(root);
          wordObj.root = root;
          
        } catch (error) {
          console.error('Error fetching data from GPT-3 API:', error);
    
        }
    
      };
      

    async function addWord(word) {

        const wordString = word.join('');
        let isWordFromBoard = false;
        let updatedPoints = points;

        if (word.length < 4) {
            return alert('Word must be at least 4 letters!')
        }

        const wordObj = {wordStr: wordString};
        await getRootWord(wordObj);

        if (!isNaN(wordIndex)) {
            isWordFromBoard = true;
            for (let i = 0; i < myWords[wordIndex].length; i++) {
                if (myWords[wordIndex][i] !== '') {
                    return alert('You must use all letters of a word in order to change it!')
                }
            }
            let usedLetterFromMiddle = false;
            for (let i = 0; i < yourBoard.length; i++) {
                if (yourBoard[i].fromMiddle === true) {
                    usedLetterFromMiddle = true;
                }
            }
            if (! usedLetterFromMiddle) {
                return alert('You must add at least one letter from the middle!');
            }
            if ((wordObj.root === myWordsReference[wordIndex].root) && (wordObj.root !== undefined)) {
                return alert('You must change the root of the word!');
            }
        }

        console.log(wordString);
        const apiEndpoint = apiUrl + wordString;

        fetch(apiEndpoint).then((response) => {
            if (response.ok) {

                if (isWordFromBoard) {
                    for (let i = 0; i < myWords[wordIndex].length; i++) {
                        if (i < 3) {
                            updatedPoints = points + 2;
                        } else {
                            updatedPoints--;
                        }
                    }
                }

                for (let i = 0; i < word.length; i++) {
                    if (i < 3) {
                        updatedPoints = updatedPoints;
                    } else {
                        updatedPoints++;
                    }
                }
                setPoints(updatedPoints);
                const updatedWords = [
                    ...myWords,
                    word
                ];

                

                setMyWords(updatedWords);
                console.log(myWords);
                setYourBoard([]);
                setWordIndex('a');
                const wordObj = {wordStr: wordString};
                getRootWord(wordObj);
                const updatedWordsReference = [
                    ...myWordsReference,
                    wordObj
                ];
                setMyWordsReference(updatedWordsReference);
                console.log(myWordsReference);

            } else {

                alert(`${wordString} is not a valid word!`);

            }
        }).catch((error) => {
            console.error('Error fetching data:', error)
        })
    }

    let word = [];

    for (let i = 0; i<yourBoard.length; i++) {
        word.push(yourBoard[i].value);
    }

    return <div className = 'yourBoardContainer'>
    <div className = 'yourBoard'>
        <h1>Your Board</h1>
        <div className = 'wordContainer'>
        {yourBoard.map((letter, index) => <DisplayLetterBoard key = {index} letter= {letter} deleteLetterFromBoard = {deleteLetterFromBoard} index = {index}/>)}
        </div>
        <div className = 'boardButtons'>
        <button onClick = {() => addWord(word)}>Add word</button>
        </div>
    </div>
    </div>
}

//<button onClick = {() => clearBoard()}>Clear board</button>

export default YourBoard;