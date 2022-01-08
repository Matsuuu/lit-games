import { getCurrentFrame } from "./Game";
let KEYS_DOWN = [];
export function listenForInput() {
    window.addEventListener("keydown", onKeyDownListener);
    window.addEventListener("keyup", onKeyUpListener);
}
export function isKeyDown(key) {
    return KEYS_DOWN.some((k) => k.key === key);
}
export function isKeyPress(key) {
    const keyDownEvent = getKeyDown(key);
    return keyDownEvent && keyDownEvent.pressFrame === getCurrentFrame() - 1;
}
export function getKeyDown(key) {
    return KEYS_DOWN.find((k) => k.key === key);
}
function onKeyDownListener(e) {
    if (isKeyDown(e.key))
        return;
    KEYS_DOWN = [...KEYS_DOWN, { key: e.key, pressFrame: getCurrentFrame() }];
}
function onKeyUpListener(e) {
    if (!isKeyDown(e.key))
        return;
    KEYS_DOWN = KEYS_DOWN.filter((k) => e.key !== k.key);
}
export var Arrow;
(function (Arrow) {
    Arrow["DOWN"] = "ArrowDown";
    Arrow["UP"] = "ArrowUp";
    Arrow["LEFT"] = "ArrowLeft";
    Arrow["RIGHT"] = "ArrowRight";
})(Arrow || (Arrow = {}));
