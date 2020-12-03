import React from 'react';
import { Input, Grid, Button } from '@material-ui/core';
import './common/common-player.css'

export default function ReadPlayer(props) {
  
  if (props.match) {
    return (
      <Grid container className="container" spacing={1}>
        <Grid item xs={7}>
          <Input value={props.name} disabled></Input>
        </Grid>
        <Grid item xs={2}>
          <Input type="number" value={props.score} disabled></Input>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary">+</Button>
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