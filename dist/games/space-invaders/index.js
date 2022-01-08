import { Position } from "../../lib/engine/entity/Position";
import { Game } from "../../lib/engine/Game";
import { Player } from "./src/Player";
const gameScreen = document.querySelector(".game-screen");
const game = new Game(gameScreen);
game.start();
Player.instantiate({ position: new Position(250, 400, 0) });
