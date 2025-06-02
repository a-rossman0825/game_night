import { ExampleController } from './controllers/ExampleController.js';
import { PlayersController } from './controllers/PlayersController.js';

class App {

  ExampleController = new ExampleController() // ☑️ you can remove this - example only
  playersController = new PlayersController();
}

window['app'] = new App()


