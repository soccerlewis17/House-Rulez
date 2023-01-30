import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import GameDisplay from '../../components/GameDisplay/GameDisplay';
import AppDescription from '../../components/AppDescription/AppDescription';

import { Grid } from "semantic-ui-react";

export default function HomePage(props){
   

    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <AppDescription />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <GameDisplay />
                </Grid.Column>
            </Grid.Row>
        </Grid>
      );
}