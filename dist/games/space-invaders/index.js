import { Position } from "../../lib/engine/entity/Position";
import { Game } from "../../lib/engine/Game";
import { Invader } from "./src/Invader";
import { Player } from "./src/Player";
const gameScreen = document.querySelector(".game-screen");
const game = new Game(gameScreen);
game.start();
Player.instantiate({ position: new Position(250, 450, 0) });
for (let i = 25; i < 475; i += 75) {
    Invader.instantiate({ position: new Position(i, 20, 0) });
}
for (let i = 60; i < 475; i += 75) {
    Invader.instantiate({ position: new Position(i, 80, 0) });
}
for (let i = 25; i < 475; i += 75) {
    Invader.instantiate({ position: new Position(i, 140, 0) });
}
for (let i = 60; i < 475; i += 75) {
    Invader.instantiate({ position: new Position(i, 200, 0) });
}
