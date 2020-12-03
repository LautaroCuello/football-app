import React, { useState } from 'react';
import { Button, Grid, Snackbar } from '@material-ui/core';
import { ReadPlayer } from './player';
import './common/common-page.css';

export default function ReadPlayerPage(props) {
  const [players, setPlayers] = useState(props.players);

  if (props.match) {
    const playerList = players.length ? players.map(player => 
      <ReadPlayer key={player.id} id={player.id} name={player.name} score={player.score} match></ReadPlayer>
    ) : <p>No hay jugadores</p>
  
    return (
      <Grid container direction="column" justify="space-between">
        <p>Jugadores</p>
        <Grid container>
          <Grid item xs={7}>
            <p>Nombre</p>
          </Grid>
          <Grid item xs={2}>
            <p>Puntuacion</p>
          </Grid>
        </Grid>
        {playerList}
        <Grid container justify="space-around">
          <Grid item>
            <div className="button-outer-margin">
              <Button variant="contained" color="primary" onClick={() => {}}>Añadir al partido</Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const playerList = players.length ? players.map(player => 
    <ReadPlayer key={player.id} id={player.id} name={player.name} score={player.score}></ReadPlayer>
  ) : <p>No hay jugadores</p>

  return (
    <Grid container direction="column" justify="space-between">
      <p>Jugadores</p>
      <Grid container>
        <Grid item xs={9}>
          <p>Nombre</p>
        </Grid>
        <Grid item xs={3}>
          <p>Puntuacion</p>
        </Grid>
      </Grid>
      {playerList}
    </Grid>
  )
}