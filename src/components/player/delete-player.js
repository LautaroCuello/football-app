import React, { useState } from 'react';
import { Input, Grid, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './common/common-player.css'

export default function DeletePlayer(props) {
  const [buttonVariant, setButtonVariant] = useState("contained");
  const [remove, setRemove] = useState(false);

  const onRemoveClick = () => {
    const newRemove = !remove;
    setRemove(newRemove);
    const newVariant = newRemove ? "outlined" : "contained";
    setButtonVariant(newVariant);
  }

  return (
    <Grid container className="container">
      <Grid item xs={9}>
        <Input value={props.name} disabled></Input>
      </Grid>
      <Grid item xs={3}>
        <Button variant={buttonVariant} color="secondary" onClick={onRemoveClick}>
          {remove ? <DeleteForeverIcon/> : <DeleteIcon/>}
        </Button>
      </Grid>
    </Grid>
  )
}