import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";
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

  addPlayer(event) {
    event.preventDefault();

    let form = event.target;
    let name = form.playerName.value;
    let picture = form.playerPicture.value;
    let color = form.playerColor.value

    if (name == undefined) return;

    const newPlayer = new Player(name, picture, color);
    AppState.players.push(newPlayer);

    this.drawPlayers();

    form.reset();
  }
  
  drawPlayers() {
    const playerCardElm = document.getElementById('player-cards');
    let playerCardContent = '';
    const players = AppState.players.sort((a, b) => b.score - a.score);
    players.forEach((player) => playerCardContent += player.playerCardHTMLTemplate);
    playerCardElm.innerHTML = playerCardContent;
  }
}