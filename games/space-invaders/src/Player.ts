import { css, html } from "lit";
import { Name } from "../../../lib/engine/decorators/EntityDecorator";
import { Entity } from "../../../lib/engine/entity/Entity";
import { Position } from "../../../lib/engine/entity/Position";
import { Arrow, isKeyDown, isKeyPress } from "../../../lib/engine/Input";
import { PlayerProjectile } from "./PlayerProjectile";

@Name("player-one")
export class Player extends Entity {

    speed: number = 200;
    start() {
        // @ts-ignore
        console.log(Player.foobarbaz)
        console.log("Player created");
    }

    tick(deltaTime: number) {
        this.handleMovement(deltaTime);
    }

    handleMovement(deltaTime: number) {
        if (isKeyDown(Arrow.DOWN)) {
            this.position.add(Position.down.multiply(deltaTime * this.speed))
        }
        if (isKeyDown(Arrow.UP)) {
            this.position.add(Position.up.multiply(deltaTime * this.speed))
        }
        if (isKeyDown(Arrow.LEFT)) {
            this.position.add(Position.left.multiply(deltaTime * this.speed))
        }
        if (isKeyDown(Arrow.RIGHT)) {
            this.position.add(Position.right.multiply(deltaTime * this.speed))
        }
        if (isKeyPress(" ")) {
            PlayerProjectile.instantiate({ position: this.position.copy().add(new Position(10, 0, 0)) });
        }
    }

    render() {
        return html``;
    }

    static get styles() {
        return css`
      :host {
        display: block;
        width: 20px;
        height: 20px;
        background: green;
      }
    `;
    }
}
