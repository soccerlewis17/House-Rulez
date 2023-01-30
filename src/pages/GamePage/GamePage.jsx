import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import GameDisplay from '../../components/GameDisplay/GameDisplay';
import AddCommentForm from '../../components/AddCommentForm/AddCommentForm';

import { Grid } from "semantic-ui-react";

function GamePage() {
    return ( 
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <GameDisplay />
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