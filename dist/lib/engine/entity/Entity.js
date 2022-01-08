import { LitElement } from "lit";
import { addEntity, getGameContext } from "../Game";
import { Position } from "./Position";
export class Entity extends LitElement {
    constructor() {
        super();
        this.position = Position.zeroed;
        this.frameAdded = 0;
        this.entityId = 0;
        addEntity(this);
        this.__entity_init();
    }
    static get entityTagName() {
        console.error("Entity tag name not defined for ", this);
        throw new Error("Define static getter 'entityTagName' to entity");
    }
    get entityTagName() {
        var _a;
        return ((_a = this.__staticInstance) === null || _a === void 0 ? void 0 : _a.entityTagName) || '';
    }
    __entity_tick(deltaTime) {
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
            customElements.define(this.entityTagName, staticInstance);
        }
        const context = getGameContext();
        const thisElem = document.createElement(this.entityTagName);
        thisElem.__staticInstance = staticInstance;
        context === null || context === void 0 ? void 0 : context.appendChild(thisElem);
    }
}
