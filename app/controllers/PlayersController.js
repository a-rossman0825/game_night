import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";

export class PlayersController {
  constructor() {
    console.log('Players Loaded!', AppState.players);
    this.drawPlayers();
  }

  lowerScore(name) {
    console.log(`decreasing score ${name}`);
    playersService.lowerScore(name);
    this.drawPlayers();
  }

  raiseScore(name) {
    console.log(`raising score ${name}`);
    playersService.raiseScore(name);
    this.drawPlayers();
  }
  
  drawPlayers() {
    const playerCardElm = document.getElementById('player-cards');
    let playerCardContent = '';
    const players = AppState.players.sort((a, b) => b.score - a.score);
    players.forEach((player) => playerCardContent += player.playerCardHTMLTemplate());
    playerCardElm.innerHTML = playerCardContent;
  }
}