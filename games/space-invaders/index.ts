import { Position } from "../../lib/engine/entity/Position";
import { Game } from "../../lib/engine/Game";
import { Player } from "./src/Player";

const gameScreen = document.querySelector(".game-screen") as HTMLElement;
const game = new Game(gameScreen);
game.start();


Player.instantiate({ position: new Position(250, 450, 0) });

