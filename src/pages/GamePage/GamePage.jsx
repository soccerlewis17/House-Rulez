import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import GameDisplay from '../../components/GameDisplay/GameDisplay';
import AddCommentForm from '../../components/AddCommentForm/AddCommentForm';

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { Grid } from "semantic-ui-react";

import * as gameAPI from '../../utils/gameApi';
import * as commentAPI from '../../utils/commentApi';

function GamePage({handleLogout}) {
    const [game, setGame] = useState([]);
    const [comments, setComments] = useState([]);

    const { gameId } = useParams();

    async function getAGame() {
        try {
          const response = await gameAPI.getOneGame(gameId);
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

    async function handleAddComment(comment){
        try {
            const response = await commentAPI.create(comment, gameId); // need gameId???
            console.log(response, " handle add comment");
            setComments([response.comments, ...comments]);
        } catch(err) {
            console.log(err.message, "error in addComment");
        }
    }


    return ( 
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader handleLogout={handleLogout}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign='center'>
                    <h1>{game.name}</h1>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign='center'>
                    <img src={game.imgSrc}></img>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign='center'>
                    <h3>Rules</h3>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign='center'>
                    <p>{game.rules}</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign='center'>
                    <h3>House Rulez</h3>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign='center'>
                    {game.comments?.map((comment) => {
                        return (
                            <div className='card' key={comment._id}>
                                <h5>{comment.userName}</h5>
                                <p>{comment.content}</p>
                            </div>
                        )
                    })}
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }} textAlign='center'>
                    <AddCommentForm handleAddComment={handleAddComment}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
     );
}

export default GamePage;