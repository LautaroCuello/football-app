// import logo from './logo.svg';
// import './App.css';
// import FootballPlayerList from './components/football-player-list/football-player-list';
// import FootballPlayer from './components/football-player/football-player';
import { Container } from '@material-ui/core';
import { AddPlayer, ReadPlayer, DeletePlayer, UpdatePlayer } from './components/player';
import CreatePlayerPage from './components/create-player-page';
import DeletePlayerPage from './components/delete-player-page';
import ReadPlayerPage from './components/read-player-page';
import UpdatePlayerPage from './components/update-player-page';

const playersRemoveMock = [
  { id: 0, name: "Nico", remove: false },
  { id: 1, name: "Vistor", remove: false }
]

const playersMock = [
  { id: 1 , name: "Lautaro", score: 5 },
  { id: 1 , name: "Nico", score: 6 }
]

// const playerscoso = [
//   { id: 0, name: "Nico", score: 1 },
//   { id: 1, name: "Vistor", score: 5 },
// ]

function App() {
  return (
    <Container>
      <CreatePlayerPage></CreatePlayerPage>
      <UpdatePlayerPage players={playersMock}></UpdatePlayerPage>
      <DeletePlayerPage players={playersRemoveMock}></DeletePlayerPage>
      <ReadPlayerPage players={playersMock} match></ReadPlayerPage>
      <ReadPlayerPage players={playersMock}></ReadPlayerPage>
      {/* Añadir
      <AddPlayer></AddPlayer>
      Leer
      <ReadPlayer name="Juan" score="10"></ReadPlayer>
      Actualizar
      <UpdatePlayer name="Juan" score="10"></UpdatePlayer>
      Borrar
      <DeletePlayer name="Juan"></DeletePlayer> */}
      {/* Leer partido
      <ReadPlayer match name="Juan" score="10"></ReadPlayer> */}
    </Container>
  );
}

export default App;