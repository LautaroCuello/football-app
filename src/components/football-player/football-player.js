import React, { useState } from 'react';
import { Input } from '@material-ui/core';
import './football-player.css'

export default function FootballPlayer() {
  const [playerName, setPlayerName] = useState("");
  const [playerScore, setPlayerScore] = useState(1);
  const MAX_NAME_LENGTH = 25;
  const MAX_PLAYER_SCORE = 10;
  const MIN_PLAYER_SCORE = 1;

  const onChangePlayerName = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= MAX_NAME_LENGTH) {
      setPlayerName(newValue);
    } else {
      e.target.value = playerName;
    }
  }

  const onChangePlayerScore = (e) => {
    const newValue = e.target.value;
    if (newValue >= MIN_PLAYER_SCORE && newValue <= MAX_PLAYER_SCORE) {
      setPlayerScore(newValue);
    } else {
      e.target.value = playerScore;
    }
  }

  return (
    <span className="container">
      <Input className="name"  placeholder="Nombre" onChange={(e) => onChangePlayerName(e)}></Input>
      <Input className="score" type="Number" defaultValue={playerScore} onChange={(e) => onChangePlayerScore(e)}></Input>
    </span>
  )
}