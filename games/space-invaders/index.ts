import { Position } from "../../lib/engine/entity/Position";
import { Game } from "../../lib/engine/Game";
import { Invader } from "./src/Invader";
import { Player } from "./src/Player";

const gameScreen = document.querySelector(".game-screen") as HTMLElement;
const game = new Game(gameScreen);
const runningGame = game.start();

runningGame.catch(() => {
    alert("You lost!");
    window.location.reload();
})

Player.instantiate({ position: new Position(250, 450, 0) });

for (let i = 25; i < 400; i += 75) {
    Invader.instantiate({ position: new Position(i, 20, 0) })
}
for (let i = 60; i < 400; i += 75) {
    Invader.instantiate({ position: new Position(i, 80, 0) })
}
for (let i = 25; i < 400; i += 75) {
    Invader.instantiate({ position: new Position(i, 140, 0) })
}
for (let i = 60; i < 400; i += 75) {
    Invader.instantiate({ position: new Position(i, 200, 0) })
}

