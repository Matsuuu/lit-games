import { __decorate } from "tslib";
import { css } from "lit";
import { Name } from "../../../lib/engine/decorators/EntityDecorator";
import { Entity } from "../../../lib/engine/entity/Entity";
import { Position } from "../../../lib/engine/entity/Position";
import { getCurrentFrame } from "../../../lib/engine/Game";
let PlayerProjectile = class PlayerProjectile extends Entity {
    constructor() {
        super(...arguments);
        this.speed = 400;
        this.timeToLive = 300;
    }
    start() {
        console.log("Projectile created");
    }
    tick(deltaTime) {
        this.position.add(Position.up.multiply(deltaTime * this.speed));
        if (getCurrentFrame() > this.frameAdded + this.timeToLive) {
            this.remove();
        }
    }
    static get styles() {
        return css `
      :host {
        display: block;
        width: 4px !important;
        height: 10px !important;
        background: #20ff20;
      }
    `;
    }
};
PlayerProjectile = __decorate([
    Name("player-projectile")
], PlayerProjectile);
export { PlayerProjectile };
