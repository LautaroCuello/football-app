import React, { useEffect, useState, useRef } from 'react';
import { Button, Grid, Snackbar } from '@material-ui/core';
import FootballPlayer from '../football-player/football-player';

export default function FootballPlayerList(props) {
  const [players, setPlayers] = useState(props.players ? props.players : []);
  const [open, setOpen] = useState(false);
  let playerID = useRef(0);
  // useEffect(() => {}, [players])

  if (props.remove) {
    const removePlayer = (e) => {
      const matchedPlayer = players.findIndex(item => item.id === e);
      if (matchedPlayer >= 0) {
        let playerList = [...players];
        playerList[matchedPlayer].delete = playerList[matchedPlayer].delete ? false : true;
        setPlayers(playerList);
      }
    }

    const removePlayers = () => {
      const playersToRemove = players.filter(item => item.delete === true);
      const playersLeft = players.filter(item => item.delete !== true);
      setPlayers(playersLeft);
    }

    const playerList = players.length ? players.map(e =>
      <FootballPlayer
        remove
        key={e.id}
        name={e.name}
        disable={e.delete}
        removePlayer={() => {removePlayer(e.id)}}></FootballPlayer>) : <p>Sin jugadores para borrar</p>
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

  if (props.add) {
    const addPlayer = () => {
      const playerList = [...players];
      playerList.push({ name: "", id: playerID.current });
      setPlayers(playerList);
      playerID.current++;
    }

    const removePlayer = (e) => {
      const playerList = players.filter(item => item.id !== e);
      setPlayers(playerList);
    }

    const updatePlayer = (id, value) => {
      const match = players.findIndex(e => e.id === id);
      if (match >= 0) {
        let playersList = [...players];
        playersList[match].name = value;
        setPlayers(playersList);
      }
    }

    const handleSave = () => {
      setOpen(true);
      console.log(players);
    }

    const handleSaveClose = () => {
      setOpen(false);
    }

    const playerList = players.length? players.map(e => <FootballPlayer add key={e.id} id={e.id} name={e.name} removePlayer={() => removePlayer(e.id)} onChange={updatePlayer}></FootballPlayer>) : <p>Presione añadir jugador</p>;
    
    return (
      <Grid container direction="column" justify="space-between">
        <p>Añadir jugadores</p>
        {playerList}
        <Grid container justify="space-around">
          <Grid item>
            <Button variant="contained" onClick={() => addPlayer()}>Añadir jugador</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={() => handleSave()}>Guardar</Button>
          </Grid>
        </Grid>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          message="Jugadores guardados"
          onClose={handleSaveClose}
        >
        </Snackbar>
      </Grid>
    )
  }

  if (props.list) {
    const playerList = players.length ? players.map(e => <FootballPlayer match name={e.name} score={e.score} disable={false}></FootballPlayer>) : <p>No hay jugadores</p>;

    return (
      <Grid container direction="column" justify="space-between">
        <Grid container>
          <Grid item xs={8}>
            <p>Nombre</p>
          </Grid>
          <Grid item xs={3}>
            <p>Puntuación</p>
          </Grid>
        </Grid>
        {playerList}
      </Grid>
    )
  }
  
  const addPlayer = () => {
    const playerList = [...players];
    playerList.push({ name: "" });
    setPlayers(playerList);
  }

  const playerList = players.length ? players.map(e => <FootballPlayer add name={e.name}></FootballPlayer>) : "Presione añadir jugador";

  return (
    <Grid container direction="column" justify="space-between">
      {playerList}
      <Grid container justify="space-around">
        <Grid item>
          <Button variant="contained" onClick={() => addPlayer()}>Añadir jugador</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">Guardar</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}