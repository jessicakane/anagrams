export const DisplayLetterBoard = ({letter, deleteLetterFromBoard, index}) => {
    return <button onClick = {() => deleteLetterFromBoard(index)} id = 'boardLetter' className="boardLetter">{letter.value}</button>
}

