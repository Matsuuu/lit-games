import { getGameInstance } from "./Game";
export function getFrame() {
    return new Promise((resolve) => window.requestAnimationFrame(resolve));
}
export function findClosestEntityWithTag(self, tag) {
    const instance = getGameInstance();
    const matchingEntities = Array.from(instance.entityPool.values()).filter(ent => ent.tags.includes(tag));
    const closest = matchingEntities
        .map(e => ({ distance: getDistance(self.position, e.position), elem: e }))
        .sort((a, b) => a.distance - b.distance)
        .map(obj => obj.elem)
        .shift();
    // Hacky shit
    return closest;
}
export function getDistance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
}
