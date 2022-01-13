export class Position {
    constructor(x, y, z, multiplier = 1) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.x = x * multiplier;
        this.y = y * multiplier;
        this.z = z * multiplier;
    }
    add(otherPosition) {
        this.x += otherPosition.x;
        this.y += otherPosition.y;
        this.z += otherPosition.z;
        return this;
    }
    sub(otherPosition) {
        this.x -= otherPosition.x;
        this.y -= otherPosition.y;
        this.z -= otherPosition.z;
        return this;
    }
    multiply(multiplier) {
        this.x *= multiplier;
        this.y *= multiplier;
        this.z *= multiplier;
        return this;
    }
    get squareMagnitude() {
        return this.x * this.x + this.y * this.y;
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
