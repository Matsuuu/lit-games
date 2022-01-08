import { LitElement } from "lit";
import { addEntity, getGameContext, removeEntity } from "../Game";
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
        if (!this._entityTagName) {
            console.error("Entity tag name not defined for ", this);
            throw new Error("Define static getter 'entityTagName' to entity\n\nstatic get entityTagName()\n\n");
        }
        return this._entityTagName;
    }
    static set entityTagName(tagName) {
        this._entityTagName = tagName;
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
        removeEntity(this);
        super.remove();
    }
    static instantiate(opts) {
        const staticInstance = this;
        if (!customElements.get(this.entityTagName)) {
            customElements.define(this.entityTagName, staticInstance);
        }
        const context = getGameContext();
        const thisElem = document.createElement(this.entityTagName); // TODO
        thisElem.__staticInstance = staticInstance;
        if (opts === null || opts === void 0 ? void 0 : opts.position) {
            thisElem.position = opts.position;
        }
        context === null || context === void 0 ? void 0 : context.appendChild(thisElem);
    }
}
