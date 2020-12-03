import React, { useState } from 'react';
import { Input, Grid, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './common/common-player.css'

export default function ReadPlayer(props) {
  const [buttonVariant, setButtonVariant] = useState("contained");
  const [matched, setMatched] = useState(false);
  
  if (props.match) {
    const onMatchClick = () => {
      const newMatched = !matched;
      setMatched(newMatched);
      const newVariant = newMatched ? "outlined" : "contained";
      setButtonVariant(newVariant);
    }

    return (
      <Grid container className="container">
        <Grid item xs={7}>
          <Input value={props.name} disabled></Input>
        </Grid>
        <Grid item xs={2}>
          <Input type="number" value={props.score} disabled></Input>
        </Grid>
        <Grid item xs={2}>
          <Button variant={buttonVariant} color="primary" onClick={onMatchClick}>
            {matched ? <RemoveIcon/> : <AddIcon/>}
          </Button>
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid container className="container">
      <Grid item xs={9}>
        <Input value={props.name} disabled></Input>
      </Grid>
      <Grid item xs={3}>
        <Input type="number" value={props.score} disabled></Input>
      </Grid>
    </Grid>
  )
}