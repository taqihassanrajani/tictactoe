import React, {useState} from 'react'
import Box from './Box'
import '../css/Board.css'

const Board = () => {
    const [turn, setTurn] = useState("X")
    const [values, setValues] = useState([])
    const [nextTurn, setNextTurn] = useState("O")
    const [winner, setWinner] = useState()

    let items = []
    for (let index = 1; index <= 9; index++) {
        items.push(<Box key={index} index={index} turn={turn} setTurn={setTurn} values={values} setValues={setValues} nextTurn={nextTurn} setNextTurn={setNextTurn} winner={winner} setWinner={setWinner}/>)
    }

    return (
        <>
        <h1 className='gameHeading'>Tic Tac Toe</h1>
        <p className='Notice'>Player {} Win the Game</p>
        <p className='Notice'>Its a Draw</p>
        <p>Now Turn: {turn}</p>
        <p>Player X: 0 Game wins{}</p>
        <p>Player Y: 0 Game wins{}</p>
        <div className='mainBoard'> {items}</div>
        </>
    )
}

export default Board
