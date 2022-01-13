import { __decorate } from "tslib";
import { css, html } from "lit";
import { AABBCollider } from "../../../lib/engine/collision/AABBCollider";
import { Name } from "../../../lib/engine/decorators/EntityDecorator";
import { Entity } from "../../../lib/engine/entity/Entity";
import { Position } from "../../../lib/engine/entity/Position";
import { endGame } from "../../../lib/engine/Game";
import { Arrow, isKeyDown, isKeyPress } from "../../../lib/engine/Input";
import { findClosestEntityWithTag } from "../../../lib/engine/Util";
import { PlayerProjectile } from "./PlayerProjectile";
let Player = class Player extends Entity {
    constructor() {
        super(...arguments);
        this.speed = 200;
        this.tags = ["Player"];
    }
    start() {
        this.collider = new AABBCollider(this.position, 35, 28);
    }
    tick(deltaTime) {
        var _a;
        this.handleMovement(deltaTime);
        const closestEnemy = findClosestEntityWithTag(this, "Enemy");
        if (closestEnemy && closestEnemy.collider) {
            const collides = (_a = this.collider) === null || _a === void 0 ? void 0 : _a.collides(closestEnemy.collider);
            if (collides) {
                endGame();
            }
        }
    }
    handleMovement(deltaTime) {
        if (isKeyDown(Arrow.LEFT)) {
            this.position.add(Position.left.multiply(deltaTime * this.speed));
        }
        if (isKeyDown(Arrow.RIGHT)) {
            this.position.add(Position.right.multiply(deltaTime * this.speed));
        }
        if (isKeyPress(" ")) {
            PlayerProjectile.instantiate({
                position: this.position.copy().add(new Position(17.5, 0, 0)),
            });
        }
    }
    render() {
        return html `
      <div class="gun"></div>
      <div class="hull"></div>
    `;
    }
    static get styles() {
        return css `
      :host {
        display: block;
      }

      :host * {
        background: #20ff20;
      }

      .hull {
        width: 40px;
        height: 20px;
        border-radius: 7px 7px 0 0;
      }

      .gun {
        width: 10px;
        height: 10px;
        transform: translate(15px, 0);
        border-radius: 4px 4px 0 0;
      }
    `;
    }
};
Player = __decorate([
    Name("player-one")
], Player);
export { Player };
