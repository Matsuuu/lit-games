import { LitElement } from "lit";
import { addEntity, getGameContext } from "../Game";
import { Position } from "./Position";

export abstract class Entity extends LitElement {

    public position: Position = Position.zeroed;

    public frameAdded: number = 0;
    public entityId: number = 0;
    private __staticInstance: typeof Entity | undefined;

    abstract start(): void;
    abstract tick(deltaTime: number): void;

    static get entityTagName(): string {
        console.error("Entity tag name not defined for ", this);
        throw new Error("Define static getter 'entityTagName' to entity");
    }

    get entityTagName(): string {
        return this.__staticInstance?.entityTagName || '';
    }

    constructor() {
        super();
        addEntity(this);
        this.__entity_init();
    }

    __entity_tick(deltaTime: number) {
        this.updatePosition();
        this.tick(deltaTime);
    }

    updatePosition() {
        this.style.setProperty("--pos-x", this.position.x + "px");
        this.style.setProperty("--pos-y", this.position.y + "px");
        this.style.setProperty("--pos-z", this.position.z + "px");
    }

    firstUpdated() {
        this.start();
    }

    __entity_init() {
        if (this.entityTagName && !this.entityTagName.includes("-")) {
            console.error("Invalid tagname on entity ", {
                entity: this,
                tagName: this.entityTagName,
            });
            return;
        }
    }

    remove() {
        this.remove();
    }

    static instantiate() {

        const staticInstance = this;
        if (!customElements.get(this.entityTagName)) {
            customElements.define(this.entityTagName, staticInstance as unknown as CustomElementConstructor);
        }

        const context = getGameContext();
        const thisElem = document.createElement(this.entityTagName) as any;
        thisElem.__staticInstance = staticInstance;
        context?.appendChild(thisElem);
    }
}
