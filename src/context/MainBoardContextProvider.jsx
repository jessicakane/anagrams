import { useState, createContext } from 'react';

const MainBoardContext = createContext();

const MainBoardContextProvider = ({children}) => {

    const [lettersOut, setLettersOut] = useState([]);
    const [points, setPoints] = useState(0);

    const addLetter = (letter) => {
        const updatedLettersOut = [
            ...lettersOut,
            letter
        ];
        setLettersOut(updatedLettersOut);
        if (lettersOut.length>8) {
            let updatedPoints = points-1;
            setPoints(updatedPoints);
        }
    }

    const removeLetter = (index) => {
        const updatedLettersOut = [
            ...lettersOut.slice(0, index),
            ...lettersOut.slice(index + 1)
        ];
        setLettersOut(updatedLettersOut);
    }

  return (
    <MainBoardContext.Provider value={{addLetter, removeLetter, lettersOut, setLettersOut, points, setPoints}}>
        {children}
    </MainBoardContext.Provider>
  )
}

export {MainBoardContext};
export default MainBoardContextProvider;