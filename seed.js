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
    description:
      "UNO is a multi-player card game in which the objective is to be the first player to score 500 points. Each player is dealt 7 cards and tries to get rid of them all each round.",
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
    imgSrc: "https://i.imgur.com/JuhJS94.png",
    description: "Golf is a game in which players try to swap and cancel their cards for the lowest overall score.",
    rules: `
    Each player is dealt 6 cards face down from the deck. The remainder of the cards are placed face down, and the top card is turned up to start the discard pile beside it. Players arrange their 6 cards in 2 rows of 3 in front of them and turn 2 of these cards face up. The remaining cards stay face down and cannot be looked at.
    
    The Play
    The object is for players to have the lowest value of the cards in front of them by either swapping them for lesser value cards or by pairing them up with cards of equal rank.
    
    Beginning with the player to the dealer's left, players take turns drawing single cards from either the stock or discard piles. The drawn card may either be swapped for one of that player's 6 cards, or discarded. If the card is swapped for one of the face down cards, the card swapped in remains face up. The round ends when all of a player's cards are face-up.
    
    A game is nine "holes" (deals), and the player with the lowest total score is the winner.
    
    Scoring
    Each ace counts 1 point.
    Each 2 counts minus 2 points.
    Each numeral card from 3 to 10 scores face value.
    Each jack or queen scores 10 points.
    Each king scores zero points.
    A pair of equal cards in the same column scores zero points for the column (even if the equal cards are 2s).`,
  },
  {
    id: 3,
    name: "Beer Pong",
    imgSrc: "https://i.imgur.com/79a7TbC.jpeg",
    description: "Beer Pong is a drinking game in which players throw a ping pong ball across a table with the intent of landing the ball in a cup of beer on the other end.",
    rules: `
    1. Fill 20 16-oz plastic cups halfway with beer.
    2. Arrange the plastic cups into a 10-cup triangle at each end of the table. The point of each triangle should face the opposing team. There will be one cup in the first row, two in the second row, three in the third row, and the base of the triangle will have four cups.
    3. Play one-on-one or with teams of two. Teams of two will take turns throwing the ball each time they get a turn.
    4. Determine who goes first.
    5. Take turns throwing the balls into cups. Each team gets to throw one ball per turn. The goal is throw the ball into a cup of the opposing team. You can throw the ball directly into a cup or bounce a ball off of the table into a cup.
    6. When the ball lands in a cup, alternate drinking the beer between you and your partner—if you drink the first cup, let your partner drink the second. Set the cup aside once you drink it.
    7. Keep playing until one team has no cups remaining. The team who has no cups loses, and the other team has won.`
},
];

const seedDB = async () => {
  await Game.deleteMany({});
  await Game.insertMany(seedGames);
};

seedDB().then(() => {
  mongoose.connection.close();
});
