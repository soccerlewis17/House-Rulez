import React from 'react';
import { Card, Dimmer, Segment, Image  } from 'semantic-ui-react'
import GameCard from "../GameCard/GameCard";



function GameDisplay({games, game, isHome}) {
    return ( 
        <>
            {isHome ? (
                <Card.Group itemsPerRow={3} stackable>
                    {games.map((game) => {
                        return (
                            <GameCard
                            game={game}
                            key={game._id}
                            />
                        );
                    })}
                </Card.Group> 
            ) : (
                <>
                    <h1>{game.name}</h1>
                    <img src={game.imgSrc}></img>
                    <h5>{game.description}</h5>
                    <br></br>
                    <h3>Rules</h3>
                    <p>{game.rules}</p>
                    <h3>House Rulez</h3>
                </>
            )}
        </>
     );
}

export default GameDisplay;