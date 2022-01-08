export class Position {
    constructor(x, y, z, multiplier = 1) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.x = x * multiplier;
        this.y = y * multiplier;
        this.z = z * multiplier;
    }
    static get zeroed() {
        return new Position(0, 0, 0);
    }
    add(otherPosition) {
        this.x += otherPosition.x;
        this.y += otherPosition.y;
        this.z += otherPosition.z;
    }
}
