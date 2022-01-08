var Player_1;
import { __decorate } from "tslib";
import { css, html } from "lit";
import { Name } from "../../../lib/engine/decorators/EntityDecorator";
import { Entity } from "../../../lib/engine/entity/Entity";
import { Position } from "../../../lib/engine/entity/Position";
import { Arrow, isKeyDown, isKeyPress } from "../../../lib/engine/Input";
import { PlayerProjectile } from "./PlayerProjectile";
let Player = Player_1 = class Player extends Entity {
    constructor() {
        super(...arguments);
        this.speed = 200;
    }
    start() {
        // @ts-ignore
        console.log(Player_1.foobarbaz);
        console.log("Player created");
    }
    tick(deltaTime) {
        this.handleMovement(deltaTime);
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
Player = Player_1 = __decorate([
    Name("player-one")
], Player);
export { Player };
