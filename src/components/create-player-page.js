import React, { useState, useRef } from 'react';
import { Button, Grid, Snackbar } from '@material-ui/core';
import { CreatePlayer } from './player';
import './common/common-page.css';

const createPlayerStructure = (id) => { return { id: id, name: "", score: 5 } }

export default function CreatePlayerPage() {
  const [players, setPlayers] = useState([]);
  const [open, setOpen] = useState(false);
  const counter = useRef(0);

  const addPlayer = () => {
    const newPlayer = createPlayerStructure(counter.current);
    setPlayers((oldValue) => [...oldValue, newPlayer]);
    counter.current++;
  }

  const savePlayers = () => {
    setOpen(true);
  }

  const handleClosePopup = () => {
    setOpen(false);
  }

  const onChangeName = (id, name) => {
    const matchIndex = players.findIndex(item => item.id === id);
    if (matchIndex >= 0) {
      const playersCopy = [...players];
      playersCopy[matchIndex].name = name;
      setPlayers(playersCopy);
    }
  }

  const onRemovePlayer = (id) => {
    const filteredPlayers = players.filter(item => item.id !== id);
    setPlayers(filteredPlayers);
  }

  const playerList = players.length ? players.map(player =>  
    <CreatePlayer key={player.id} id={player.id} getName={onChangeName} onRemovePlayer={onRemovePlayer}></CreatePlayer>
  ) : <p>Presione añadir jugador</p>;

  return (
    <Grid container direction="column" justify="space-between">
      <p>Añadir jugadores</p>
      {playerList}
      <Grid container justify="space-around">
        <Grid item>
          <div className="button-outer-margin">
            <Button variant="contained" onClick={() => addPlayer()}>Añadir jugador</Button>
          </div>
        </Grid>
        <Grid item>
          <div className="button-outer-margin">
            <Button variant="contained" color="primary" onClick={() => savePlayers()}>Guardar</Button>
          </div>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        message="Jugadores añadidos"
        onClose={handleClosePopup}
      >
      </Snackbar>
    </Grid>
  )
}