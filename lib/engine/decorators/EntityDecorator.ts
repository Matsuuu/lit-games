import { Entity } from "../entity/Entity";

export function Name(name: string) {
    return function(ctr: typeof Entity) {
        ctr.entityTagName = name;
    }
}
