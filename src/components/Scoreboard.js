import React from 'react'
import "./Scoreboard.css"

export const Scoreboard = ({ scores, xIsPlaying }) => {
    const { xScore, oScore } = scores;
    return (
        <div className="scoreboard">
            {/* turn on the inactive class for the player that is not active */}
            <span className={`score x-score ${!xIsPlaying &&
                "inactive"}`}>X - {xScore}</span>
            <span className={`score o-score ${xIsPlaying && "inactive"}`}>O - {oScore}</span>
        </div>
    )
}
