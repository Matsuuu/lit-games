import { Position } from "../entity/Position";
import { getGameContext } from "../Game";
import { Collider } from "./Collider";
export class AABBCollider extends Collider {
    constructor(position, w, h) {
        super();
        this.pos = Position.zeroed;
        this.w = 0;
        this.h = 0;
        this.isColliding = false;
        this.pos = position;
        this.w = w;
        this.h = h;
    }
    collides(other) {
        this.isColliding = (other.pos.x < this.pos.x + this.w &&
            other.pos.x + other.w > this.pos.x &&
            other.pos.y < this.pos.y + this.h &&
            other.pos.y + other.w > this.pos.y);
        return this.isColliding;
    }
    debugRender() {
        var _a;
        if (!this.debugRect) {
            const svg = document.createElement("svg");
            const rect = document.createElement("rect");
            svg.appendChild(rect);
            (_a = getGameContext()) === null || _a === void 0 ? void 0 : _a.appendChild(svg);
            this.debugRect = rect;
            this.debugRect.style.position = "absolute";
            this.debugRect.style.border = "3px solid blue";
        }
        if (this.isColliding) {
            this.debugRect.style.border = "3px solid red";
        }
        this.debugRect.style.width = this.w + "px";
        this.debugRect.style.height = this.h + "px";
        this.debugRect.style.top = this.pos.y + "px";
        this.debugRect.style.left = this.pos.x + "px";
    }
}
