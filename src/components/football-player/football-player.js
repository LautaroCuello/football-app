import React, { useState } from 'react';
import { Input, Grid, Button } from '@material-ui/core';
import './football-player.css'

export default function FootballPlayer(props) {
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

  if (props.add) {
    const onChangePlayerName = (e) => {
      const newValue = e.target.value;
      if (newValue.length <= MAX_NAME_LENGTH) {
        setPlayerName(newValue);
        props.onChange(props.id, newValue);
      } else {
        e.target.value = playerName;
        props.onChange(props.id, playerName);
      }
    }

    return (
      <Grid container className="container">
        <Grid item xs={9}>
          <Input placeholder="Nombre" defaultValue={props.name} onChange={onChangePlayerName}></Input>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="secondary" onClick={props.removePlayer}>X</Button>
        </Grid>
      </Grid>
    )
  }

  if (props.remove) {
    return (
      <Grid container className="container">
        <Grid item xs={9}>
          <Input placeholder="Nombre" disabled value={props.name}></Input>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="secondary" onClick={props.removePlayer} disabled={props.disable}>X</Button>
        </Grid>
      </Grid>
    )
  }

  if (props.modify) {
    return (
      <Grid container className="container">
        <Grid item xs={9}>
          <Input placeholder="Nombre" onChange={(e) => onChangePlayerName(e)}></Input>
        </Grid>
        <Grid item xs={3}>
          <Input type="Number" defaultValue={playerScore} onChange={(e) => onChangePlayerScore(e)}></Input>
        </Grid>
      </Grid>
    )
  }
  
  if (props.match) {
    return (
      <Grid container className="container">
        <Grid item xs={8}>
          <Input placeholder="Nombre" disabled value={props.name}></Input>
        </Grid>
        <Grid item xs={2}>
          <Input type="Number" disabled value={props.score}></Input>
        </Grid>
        <Grid item xs={2}>
        <Button variant="contained" color="primary" disabled={props.disable}>+</Button>
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid container>
      <Grid item xs={9}>
        <Input placeholder="Nombre" disabled value="props.name"></Input>
      </Grid>
      <Grid item xs={3}>
        <Input type="Number" disabled value="props.score"></Input>
      </Grid>
    </Grid>
  )
}