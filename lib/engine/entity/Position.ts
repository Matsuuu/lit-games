export class Position {
    constructor(public x: number, public y: number, public z: number, multiplier: number = 1) {
        this.x = x * multiplier;
        this.y = y * multiplier;
        this.z = z * multiplier;
    }

    static get zeroed() {
        return new Position(0, 0, 0);
    }

    add(otherPosition: Position) {
        this.x += otherPosition.x;
        this.y += otherPosition.y;
        this.z += otherPosition.z;
    }
}
