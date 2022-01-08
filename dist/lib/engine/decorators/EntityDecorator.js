export function Name(name) {
    return function (ctr) {
        ctr.entityTagName = name;
    };
}
