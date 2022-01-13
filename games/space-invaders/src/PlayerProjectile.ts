import { css } from "lit";
import { AABBCollider } from "../../../lib/engine/collision/AABBCollider";
import { Name } from "../../../lib/engine/decorators/EntityDecorator";
import { Entity } from "../../../lib/engine/entity/Entity";
import { Position } from "../../../lib/engine/entity/Position";
import { getCurrentFrame } from "../../../lib/engine/Game";
import { findClosestEntityWithTag } from "../../../lib/engine/Util";
import { Invader } from "./Invader";

@Name("player-projectile")
export class PlayerProjectile extends Entity {

    collider: AABBCollider | undefined;
    speed: number = 400;
    timeToLive: number = 300;

    start(): void {
        this.collider = new AABBCollider(this.position, 4, 10);
        console.log("Projectile created");
    }

    tick(deltaTime: number): void {
        this.position.add(Position.up.multiply(deltaTime * this.speed))
        if (getCurrentFrame() > this.frameAdded + this.timeToLive) {
            this.remove();
        }

        const closestEnemy = findClosestEntityWithTag<Invader>(this, "Enemy");
        if (closestEnemy && closestEnemy.collider) {
            const collides = this.collider?.collides(closestEnemy.collider);
            if (collides) {
                closestEnemy.remove();
                this.remove();
            }
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
