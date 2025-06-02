import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";


export class PlayersController {
  constructor() {
    console.log('Players Controller is loaded!');
  }

  drawPlayers() {
    const players = AppState.players;
    const playerCardsElm = document.getElementById('player-cards');
    let playersContent = '';
    players.forEach(player => playersContent += player.playerCardHTMLTemplate());
    playerCardsElm.innerHTML = playersContent;
  }

  raiseScore(playerName) {
    playersService.decreaseScore(playerName);
    this.drawPlayers();
  }

  lowerScore(playerName) {
    playersService.increaseScore(playerName);
    this.drawPlayers();
  }
}