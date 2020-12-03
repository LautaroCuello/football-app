import React, { useState, useRef } from 'react';
import { Button, Grid, Snackbar } from '@material-ui/core';
import { DeletePlayer } from './player';

export default function DeletePlayerPage(props) {
  const [players, setPlayers] = useState(props.players);

  const onRemovePlayer = (id) => {
    const matchIndex = players.findIndex(item => item.id === id);
    if (matchIndex >= 0) {
      const playersCopy = [...players];
      playersCopy[matchIndex].remove = !playersCopy[matchIndex].remove;
      setPlayers(playersCopy);
    }
  }

  const removePlayers = () => {
    const filteredPlayers = players.filter(item => item.remove !== true);
    setPlayers(filteredPlayers);
  }

  const playerList = players.length ? players.map(player =>  
    <DeletePlayer key={player.id} id={player.id} name={player.name} removePlayer={onRemovePlayer}></DeletePlayer>
  ) : <p>No hay jugadores para eliminar</p>;

  return (
    <Grid container direction="column" justify="space-between">
      <p>Eliminar jugadores</p>
      {playerList}
      <Grid container justify="space-around">
        <Grid item>
          <Button variant="contained" color="secondary" onClick={removePlayers}>Borrar jugadores</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}