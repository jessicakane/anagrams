import { useContext } from "react";
import { MainBoardContext } from "../context/MainBoardContextProvider";

export const DisplayPoints = () => {

    const {points} = useContext(MainBoardContext);

    return (
        <div className="pointContainer">
            Your Points: {points}
        </div>
    )
}

