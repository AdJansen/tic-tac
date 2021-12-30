import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

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
        <p>The turn is: {turn.toString()}</p>
        <Button variant="text"
                onClick={() => tileClick()}>
            <b>{tile}</b>
        </Button>
      </div>
    );
  }
