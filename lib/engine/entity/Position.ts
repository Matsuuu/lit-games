export class Position {
    constructor(public x: number, public y: number, public z: number, multiplier: number = 1) {
        this.x = x * multiplier;
        this.y = y * multiplier;
        this.z = z * multiplier;
    }

    add(otherPosition: Position) {
        this.x += otherPosition.x;
        this.y += otherPosition.y;
        this.z += otherPosition.z;
        return this;
    }

    multiply(multiplier: number) {
        this.x = this.x * multiplier;
        this.y = this.y * multiplier;
        this.z = this.z * multiplier;
        return this;
    }

    copy() {
        return new Position(this.x, this.y, this.z);
    }

    static get down() {
        return new Position(0, 1, 0);
    }

    static get up() {
        return new Position(0, -1, 0);
    }

    static get left() {
        return new Position(-1, 0, 0);
    }

    static get right() {
        return new Position(1, 0, 0);
    }

    static get zeroed() {
        return new Position(0, 0, 0);
    }
}
