import { css, html } from "lit";
import { Entity } from "../../../lib/engine/entity/Entity";
import { Position } from "../../../lib/engine/entity/Position";
import { Arrow, isKeyDown } from "../../../lib/engine/Input";

export class Player extends Entity {

    speed: number = 200;

    static get entityTagName(): string {
        return "player-one";
    }

    start() {
        console.log("Player created");

    }

    tick(deltaTime: number) {
        this.handleMovement(deltaTime);
    }

    handleMovement(deltaTime: number) {
        if (isKeyDown(Arrow.DOWN)) {
            this.position.add(new Position(0, 1, 0, deltaTime * this.speed))
        }
        if (isKeyDown(Arrow.UP)) {
            this.position.add(new Position(0, -1, 0, deltaTime * this.speed))
        }
        if (isKeyDown(Arrow.LEFT)) {
            this.position.add(new Position(-1, 0, 0, deltaTime * this.speed))
        }
        if (isKeyDown(Arrow.RIGHT)) {
            this.position.add(new Position(1, 0, 0, deltaTime * this.speed))
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
