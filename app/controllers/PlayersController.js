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
  }

  raiseScore(name) {
    console.log(`raising score ${name}`);
    playersService.raiseScore(name);
  }
  
  drawPlayers() {
    const playerCardElm = document.getElementById('player-cards');
    let playerCardContent = '';
    const players = AppState.players;
    players.forEach((player) => playerCardContent += player.playerCardHTMLTemplate());
    playerCardElm.innerHTML = playerCardContent;
  }
}