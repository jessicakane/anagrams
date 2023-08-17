

export const DisplayLetter = ({letter, removeLetter, index, addLetterToBoard}) => {
    const handleLetterClick = (letter, index) => {
        removeLetter(index);
        addLetterToBoard(letter);
    }
    if (letter !== undefined) {
    return <button onClick = {() => handleLetterClick(letter, index)} className="letter">{letter}</button>}
    else {
        return null;
    }
}
