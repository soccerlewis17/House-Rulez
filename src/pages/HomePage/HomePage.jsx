import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import GameDisplay from '../../components/GameDisplay/GameDisplay';
import AppDescription from '../../components/AppDescription/AppDescription';

import { useState, useEffect } from "react";

import { Grid } from "semantic-ui-react";

import * as gameAPI from '../../utils/gameApi';

export default function HomePage(props){
    const [games, setGames] = useState([]);


    async function getGames() {
        try {
          const response = await gameAPI.getAllGames();
          console.log(response, " data");
          setGames(response.data);
        // could add loading stuff
        } catch (err) {
          console.log(err.message, " this is the error in getGames");
          // change set loading to flase
        }
      }

      useEffect(() => {
        getGames();
      }, []);




    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign='center'>
                    <AppDescription />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <GameDisplay games={games}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
      );
}