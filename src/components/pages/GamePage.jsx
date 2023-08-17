import React from 'react'
import {DisplayPoints} from '../DisplayPoints'
import {LettersOut} from '../LettersOut'
import {FlipLetter} from '../FlipLetter'
import {YourBoard} from '../YourBoard'
import {MyWords} from '../MyWords'
import MainBoardContextProvider from '../../context/MainBoardContextProvider'
import MakingWordContextProvider from '../../context/MakingWordContextProvider'

export const GamePage = () => {
  return (
    <div>
        <MainBoardContextProvider>
            <MakingWordContextProvider>
                <DisplayPoints/>
                <LettersOut/>
                <FlipLetter/>
                <YourBoard/>
                <MyWords/>
            </MakingWordContextProvider>
         </MainBoardContextProvider>
    </div>
  )
}
