import React from 'react'
import { Box } from './Box'
import "./Board.css"

export const Board = ({ boardList, onClick }) => {
    return (
        <div className="board-style">
            {boardList.map((value, index) => {
                return <Box value={value} onClick={() => onClick(index)} />
            })}
        </div>
    )
}