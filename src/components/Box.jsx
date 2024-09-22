import React, { useState } from 'react'
import '../css/Box.css'

const Box = ({ index, turn, setTurn, values, SetValues, nextTurn, setNextTurn, winner, setWinner}) => {

    const winnersArr = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,5,9],
        [2,5,8],
        [3,5,7]
    ]

    const changeTurn = () => {
        console.log("change turn function running");

        if (turn === "X") {

            setTurn("O")
            setNextTurn("X")

        } else {

            setTurn("X")
            setNextTurn("O")

        }


        console.log("Now turn is: ", nextTurn)


    }


    const clickHandler = () => {
        console.log("Index", index, "clicked!!! and", turn, "turn done")
        
        if (!values[index]) {
            
            values[index] = turn
            
            winnersArr.forEach(element => {
                // element.forEach(element => {
                    console.log("element" , element)
                    // if(element === ){
                    

                    // }
                // });
            });

            changeTurn(turn)

        }

    }
    return (
        <button className='box' onClick={clickHandler}>{values[index]}</button>

    )
}

export default Box
