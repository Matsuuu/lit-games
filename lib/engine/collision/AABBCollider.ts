import { Entity } from "../entity/Entity";
import { Position } from "../entity/Position";
import { getGameContext } from "../Game";
import { Collider } from "./Collider";

export class AABBCollider extends Collider {
    pos: Position = Position.zeroed;
    w = 0;
    h = 0;

    debugRect: HTMLElement | undefined;
    isColliding = false;

    constructor(position: Position, w: number, h: number) {
        super();
        this.pos = position;
        this.w = w;
        this.h = h;
    }

    collides(other: AABBCollider): boolean {
        this.isColliding = (
            other.pos.x < this.pos.x + this.w &&
            other.pos.x + other.w > this.pos.x &&
            other.pos.y < this.pos.y + this.h &&
            other.pos.y + other.w > this.pos.y
        );
        return this.isColliding;
    }

    debugRender() {
        if (!this.debugRect) {
            const svg = document.createElement("svg");
            const rect = document.createElement("rect");
            svg.appendChild(rect);
            getGameContext()?.appendChild(svg)
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
