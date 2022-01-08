import { Entity } from "../../../lib/engine/entity/Entity";
import { Position } from "../../../lib/engine/entity/Position";
export class Projectile extends Entity {
    constructor() {
        super(...arguments);
        this.speed = 50;
    }
    static get entityTagName() {
        return "player-projectile";
    }
    start() {
        console.log("Projectile created");
    }
    tick(deltaTime) {
        this.position.add(new Position(0, 1, 0, deltaTime * this.speed));
    }
}
