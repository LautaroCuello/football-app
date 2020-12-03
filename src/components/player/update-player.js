import React, { useState } from 'react';
import { Input, Grid } from '@material-ui/core';
import { validateName, validateScore } from './common/common-player';
import './common/common-player.css'

export default function UpdatePlayer(props) {
  const [name, setName] = useState(props.name);
  const [score, setScore] = useState(props.score);

  const onChangeName = (event) => {
    const newName = event.target.value;
    if (validateName(newName)) {
      setName(newName);
      props.getName(props.id, newName);
    }
  }

  const onChangeScore = (event) => {
    const newScore = event.target.value;
    if (validateScore(newScore)) {
      setScore(newScore);
      props.getScore(props.id, newScore);
    }
  }

  return (
    <Grid container className="container">
      <Grid item xs={9}>
        <Input value={name} onChange={onChangeName}></Input>
      </Grid>
      <Grid item xs={3}>
        <Input type="number" value={score} onChange={onChangeScore}></Input>
      </Grid>
    </Grid>
  )
}