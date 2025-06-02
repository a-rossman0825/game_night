

export class Player{
  constructor(playerName, playerPicture) {

    this.name = playerName;
    this.picture = playerPicture;
  }
  name = '';
  picture = '';
  score = 0;

  playerCardHTMLTemplate() {
    return `
      <div class="mt-5 row d-flex justify-content-around">
        <img class="col-2" src="${this.picture}" alt="image of ${this.name}">
        <p class="col-5">${this.name}</p>
        <button class="col-1" type="button" onclick="decreaseUserScore('${this.name}')">-</button>
        <p class="col-2">${this.score}</p>
        <button class="col-1" type="button" onclick="increaseUserScore('${this.name}')">+</button>
      </div>
    `
  }
}