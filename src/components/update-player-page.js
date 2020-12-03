import React, { useState, useRef } from 'react';
import { Button, Grid, Snackbar } from '@material-ui/core';
import { UpdatePlayer } from './player';
import './common/common-page.css';

export default function UpdatePlayerPage(props) {
  const [players, setPlayers] = useState(props.players);

  const onUpdatePlayer = (id) => {
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
    <UpdatePlayer key={player.id} id={player.id} name={player.name} score={player.score} updatePlayer={onUpdatePlayer}></UpdatePlayer>
  ) : <p>No hay jugadores para modificar</p>;

  return (
    <Grid container direction="column" justify="space-between">
      <p>Modificar jugadores</p>
      {playerList}
      <Grid container justify="space-around">
        <Grid item>
          <div className="button-outer-margin">
            <Button variant="contained" color="primary" onClick={removePlayers}>Guardar cambios</Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}