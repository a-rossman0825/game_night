import { AppState } from "../AppState.js";


class PlayersService {

  decreaseScore(name) {
    const players = AppState.players;
    const foundPlayer = players.find(player => player.name == name);
    foundPlayer.score--;
    console.log('decreasing score', foundPlayer.score);
    if (foundPlayer.score <= 0) {
      foundPlayer.score = 0;
    }
  }

  increaseScore(name) {
    const players = AppState.players;
    const foundPlayer = players.find(player => player.name == name);
    foundPlayer.score++;
    console.log('increasing score', foundPlayer.score);
  }
}

export const playersService = new PlayersService();