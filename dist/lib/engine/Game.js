import { isKeyPress, listenForInput } from "./Input";
import { getFrame } from "./Util";
export class Game {
    constructor(context) {
        this.currentFrame = 0;
        this.totalFrames = 0;
        this.fps = 0;
        this.timeStart = 0;
        this.__previousFrameTiming = 0;
        this.entityPool = new Map();
        this.context = context || document.body;
        this.context.classList.add("game-engine-play-area");
        Game._instance = this;
        const styles = document.createElement("style");
        styles.innerHTML = `
        .game-engine-play-area {
            position: relative;
            overflow: hidden;
        }

        .game-engine-play-area * {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            transform: translate3d(
            var(--pos-x, 0px),
            var(--pos-y, 0px),
            var(--pos-z, 0px)
            );

            will-change: transform;
        }
        `;
        this.context.prepend(styles);
    }
    start() {
        this.timeStart = Date.now();
        listenForInput();
        return new Promise(async (resolve, reject) => {
            while (true) {
                this.currentFrame += 1;
                this.performGameLoop();
                this.calculateFps();
                if (isKeyPress("escape")) {
                    reject("Exit through escape key");
                    break;
                }
                await getFrame();
                this.totalFrames += 1;
            }
        });
    }
    performGameLoop() {
        const delta = this.deltaTime;
        for (const entity of this.entityPool.values()) {
            entity.__entity_tick(delta);
        }
    }
    get deltaTime() {
        const current = Date.now();
        const delta = (current - this.__previousFrameTiming) / 1000;
        this.__previousFrameTiming = current;
        return delta;
    }
    addEntity(ent) {
        let uniqueId = Math.floor(Math.random() * 1000000);
        while (this.entityPool.has(uniqueId)) {
            uniqueId = Math.floor(Math.random() * 1000000);
        }
        ent.entityId = uniqueId;
        ent.frameAdded = this.currentFrame;
        this.entityPool.set(uniqueId, ent);
    }
    removeEntity(ent) {
        const entityInPool = this.entityPool.get(ent.entityId);
        if (!entityInPool)
            return;
        entityInPool.remove();
        this.entityPool.delete(ent.entityId);
    }
    calculateFps() {
        this.fps = this.totalFrames / ((Date.now() / 1000) - (this.timeStart / 1000));
        //console.log(this.fps);
    }
}
export function getCurrentFrame() {
    return Game._instance.currentFrame;
}
export function getGameInstance() {
    return Game._instance;
}
export function addEntity(ent) {
    getGameInstance().addEntity(ent);
}
export function removeEntity(ent) {
    getGameInstance().removeEntity(ent);
}
export function getGameContext() {
    return getGameInstance().context;
}
