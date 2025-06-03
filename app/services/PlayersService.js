import { AppState } from "../AppState.js";
import { PlayersController } from "../controllers/PlayersController.js";



class PlayersService {
  lowerScore(name){
    console.log('service', name);
    const targetPlayer = AppState.players.find(player => player.name == name);
    if (targetPlayer.score <= 0) {
      targetPlayer.score = 0;
    } else {
      targetPlayer.score--;
    }
    console.log(targetPlayer.name, targetPlayer.score);
  }
  raiseScore(name){
    console.log('service', name);
    const targetPlayer = AppState.players.find(player => player.name == name);
    targetPlayer.score++;
    console.log(targetPlayer.name, targetPlayer.score);
  }
}


export const playersService = new PlayersService();