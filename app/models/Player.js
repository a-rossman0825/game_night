import { PlayersController } from "../controllers/PlayersController.js";


export class Player {
  constructor(name, picture) {
    this.name = name;
    if (picture == undefined) {
      this.picture = 'https://emojipedia.org/_next/image?url=https%3A%2F%2Fis.zobj.net%2Fimage-server%2Fv1%2Fimages%3Fr%3DEdjr8mhZrWJTKr-3-ljib46JGz2l4tFAZH-1U77BMYRureHifWiO2wZs4Si6pSIH57HDWkonwiA8pWrVEIMVtrjqwSgb02FImUhm_24ZMzIBITz2vmSn250jPF6X3HzrLGIPNFcEmqm7V0PrXmyHTrNh7-p43aTY7sFf57bqpOTEazA9txWwl9j_jxSbF90VcyqJoXckSdJusKdXjzC3rz9DA0ZmbsbdW8o6_ylTAmSDGjdKGxkNCo3Vd0U&w=640&q=75';
    } else {
      this.picture = picture;
    }
    this.score = 0;
  }
  greeting() {
    console.log(`hello my name is ${this.name}`);
  }

  playerCardHTMLTemplate() {
    return `
      <div class="card col-md-9 col-lg-5">
          <div class="row card-body justify-content-between align-items-center">
            <img class="col-2 rounded-circle" style="height: 65px" src="${this.picture}"  alt="picture of ${this.name}"/>
            <div class="col-6 card-text">${this.name}</div>
            <button class="col-1 buttons rounded-circle" onclick="app.PlayersController.lowerScore('${this.name}')">-</button>
            <div class="col-2 text-center fs-3">${this.score}</div>
            <button class="col-1 buttons rounded-circle" onclick="app.PlayersController.raiseScore('${this.name}')">+</button>
          </div>
        </div>
    `
  }

}