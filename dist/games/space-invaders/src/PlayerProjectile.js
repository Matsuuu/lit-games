import { __decorate } from "tslib";
import { css } from "lit";
import { AABBCollider } from "../../../lib/engine/collision/AABBCollider";
import { Name } from "../../../lib/engine/decorators/EntityDecorator";
import { Entity } from "../../../lib/engine/entity/Entity";
import { Position } from "../../../lib/engine/entity/Position";
import { getCurrentFrame } from "../../../lib/engine/Game";
import { findClosestEntityWithTag } from "../../../lib/engine/Util";
let PlayerProjectile = class PlayerProjectile extends Entity {
    constructor() {
        super(...arguments);
        this.speed = 400;
        this.timeToLive = 300;
    }
    start() {
        this.collider = new AABBCollider(this.position, 4, 10);
        console.log("Projectile created");
    }
    tick(deltaTime) {
        var _a;
        this.position.add(Position.up.multiply(deltaTime * this.speed));
        if (getCurrentFrame() > this.frameAdded + this.timeToLive) {
            this.remove();
        }
        const closestEnemy = findClosestEntityWithTag(this, "Enemy");
        if (closestEnemy && closestEnemy.collider) {
            const collides = (_a = this.collider) === null || _a === void 0 ? void 0 : _a.collides(closestEnemy.collider);
            if (collides) {
                closestEnemy.remove();
                this.remove();
            }
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
