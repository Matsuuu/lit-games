import { css } from "lit";
import { Name } from "../../../lib/engine/decorators/EntityDecorator";
import { Entity } from "../../../lib/engine/entity/Entity";
import { Position } from "../../../lib/engine/entity/Position";
import { getCurrentFrame } from "../../../lib/engine/Game";

@Name("player-projectile")
export class PlayerProjectile extends Entity {

    speed: number = 400;
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
        width: 4px !important;
        height: 10px !important;
        background: #20ff20;
      }
    `;
    }
}
