import React from 'react'
import "./Box.css"

export const Box = ({ value, onClick }) => {
    // pass the value of the button, X or O to the Box
    const style = value === "X" ? "box-button x-style" : "box-button o-style"
    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}
