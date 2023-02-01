import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import GameDisplay from '../../components/GameDisplay/GameDisplay';
import AddCommentForm from '../../components/AddCommentForm/AddCommentForm';

import { useState, useEffect } from "react";

import { Grid } from "semantic-ui-react";

import * as gameAPI from '../../utils/gameApi';

function GamePage() {
    const [game, setGame] = useState([]);


    async function getAGame() {
        try {
          const response = await gameAPI.getOneGame();
          console.log(response, " data");
          setGame(response.data);
        // could add loading stuff
        } catch (err) {
          console.log(err.message, " this is the error in getOneGame");
          // change set loading to flase
        }
      }

      useEffect(() => {
        getAGame();
      }, []);


    return ( 
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <GameDisplay games={game}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <AddCommentForm />
                </Grid.Column>
            </Grid.Row>
        </Grid>
     );
}

export default GamePage;