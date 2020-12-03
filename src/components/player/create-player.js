import React, { useState } from 'react';
import { Input, Grid, Button } from '@material-ui/core';
import { validateName } from './common/common-player';
import './common/common-player.css'

export default function CreatePlayer(props) {
  const [name, setName] = useState("");

  const onChangeName = (event) => {
    const newName = event.target.value;
    if (validateName(newName)) {
      setName(newName);
      props.getName(props.id, newName);
    }
  }

  return (
    <Grid container className="container">
      <Grid item xs={9}>
        <Input placeholder="Nombre" value={name} onInput={onChangeName}></Input>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" color="secondary" onClick={() => props.onRemovePlayer(props.id)}>X</Button>
      </Grid>
    </Grid>
  )
}