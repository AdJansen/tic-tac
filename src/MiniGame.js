import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function MiniGame() {
    const [tile, setTile] = useState(" ");
    const [turn, setTurn] = useState(true); //true=X, fale=O

    function tileClick() {
        if (turn) {
            setTile("X");
        } else {
            setTile("O")
        }

        setTurn(!turn);
    }

    return (
      <div>
        <Grid container spacing={1}>
        <Grid item xs={4}>
          <Button variant="outlined"
                  onClick={() => tileClick()}>
              <b>{tile}</b>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined"
                  onClick={() => tileClick()}>
              <b>{tile}</b>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined"
                  onClick={() => tileClick()}>
              <b>{tile}</b>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined"
                  onClick={() => tileClick()}>
              <b>{tile}</b>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined"
                  onClick={() => tileClick()}>
              <b>{tile}</b>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined"
                  onClick={() => tileClick()}>
              <b>{tile}</b>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined"
                  onClick={() => tileClick()}>
              <b>{tile}</b>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined"
                  onClick={() => tileClick()}>
              <b>{tile}</b>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined"
                  onClick={() => tileClick()}>
              <b>{tile}</b>
          </Button>
        </Grid>
      </Grid>

        
        <p>The turn is: {turn.toString()}</p>
      </div>
    );
  }
