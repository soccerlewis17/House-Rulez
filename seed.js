import mongoose from "mongoose";
import Game from "./models/game.js";

mongoose.connect('mongodb+srv://soccerlewis17:Smartblondie17@cluster1.cyg9aej.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedGames = [
  {
    id: 1,
    name: "UNO",
    imgSrc: "https://i.imgur.com/aBsKCXH.png",
    decsription:
      "UNO is a multi-player card game in which the objective is to be the first player to get rid of all the cards in their hand. Each player is dealt 7 cards and players take turn drawing cards from the deck.",
    rules: `The objective of the game is to be the first player to score 500 points. The objective of each round is to be the first person to play all the cards in your hand.
    Special Cards
    SKIP - As the name says, it causes the next person to skip their chance. If you are playing in 2 then immediately it will be your chance again. You can throw skip only on skip cards or similar colors.
    REVERSE - This card reverses the order/direction of the game. You can use this card either on the reverse card or on matching colored face-up cards.
    DRAW 2 - When you use this card then the next player to play has to draw 2 more cards and also skip his turn. You can play this card either on the matching colored face-up cards or +2 cards. If this card is turned up at the beginning of the game then also the first player has to draw the cards.
    WILD CARD- It can be used on any card to change the current color to any color. If this card is turned up at the beginning of the game then the first player has the right to choose any color to begin this game with or you can put this back in the draw pile at the back or shuffle the deck.
    WILD DRAW 4 CARD - This card allows you to call out the color to be played next and also causes next player to draw four more cards. Like ‘+2’ draw rules, the next player has to skip his chance also. You can use this card on any number or color.
    SWAP HANDS - If a player plays this card then he/she can swap his/her hands with anyone in the game and the player who played this card will choose the color to be played.
    
    HOW TO PLAY UNO
    First distribute 7 cards to each player, take one card from the draw pile and place it in the center of everyone. Also, you have to choose the first player randomly and then the game will continue clockwise, the left player will play the next.
    At the beginning of the turn, the player can choose his/her card by matching the number or color from the center-placed card. If the card is matched then the game continues to the next player.
    If none of the cards matched (face cards or special cards) then the player has to pick the top card from the draw pile. If the drawn card cannot be played then the player has to pass their chance to the next player.
    The player who finishes their cards earliest will automatically win the match but to win the game you have to check the scoring points section.
    
    *Important Note*
    There is a rule of saying ‘UNO’ after playing the second to last card. If the person has played his second last chance and someone caught him for not saying ‘UNO’ before another player plays his/her turn then he/she has to draw two cards from the draw pile.
    If the other player takes their turn and no one caught the player for not saying UNO then there is no need to draw the cards from the draw pile.
    
    SCORING
    The player who gets rid of all of their cards wins the match and all of their opponents' points will be theirs. Whoever reaches 500 points first will win the game.
    
    All number cards (1-9)	Face Value
    Draw 2	20 Points
    Reverse	20 Points
    Skip	20 Points
    Wild Draw 4	50 Points
    Wild	50 Points`,
  },
  {
    id: 2,
    name: "Golf",
    imgSrc: "https://i.imgur.com/bUgSIB1.png",
    decsription: "Game description here",
    rules: "Game rules here",
  },
  {
    id: 3,
    name: "Beer Pong",
    imgSrc: "https://i.imgur.com/bUgSIB1.png",
    decsription: "Game description here",
    rules: "Game rules here",
  },
  {
    id: 4,
    name: "Uno",
    imgSrc: "https://i.imgur.com/bUgSIB1.png",
    decsription: "Game description here",
    rules: "Game rules here",
  },
];

const seedDB = async () => {
  await Game.deleteMany({});
  await Game.insertMany(seedGames);
};

seedDB().then(() => {
  mongoose.connection.close();
});
