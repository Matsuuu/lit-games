import { css } from "lit";
import { Name } from "../../../lib/engine/decorators/EntityDecorator";
import { Entity } from "../../../lib/engine/entity/Entity";
import { Position } from "../../../lib/engine/entity/Position";
import { getCurrentFrame } from "../../../lib/engine/Game";

@Name("player-projectile")
export class PlayerProjectile extends Entity {

    speed: number = 250;
    timeToLive: number = 300;

    start(): void {
        console.log("Projectile created");
    }

    tick(deltaTime: number): void {
        this.position.add(Position.up.multiply(deltaTime * this.speed))
        if (getCurrentFrame() > this.frameAdded + this.timeToLive) {
            this.remove();
        }
    }

    static get styles() {
        return css`
      :host {
        display: block;
        width: 4px;
        height: 10px;
        background: blue;
      }
    `;
    }
}
