import { getCurrentFrame } from "./Game";

export interface KeydownEvent {
    key: string;
    pressFrame: number;
}

let KEYS_DOWN: KeydownEvent[] = [];

export function listenForInput() {
    window.addEventListener("keydown", onKeyDownListener);
    window.addEventListener("keyup", onKeyUpListener);
}

export function isKeyDown(key: string) {
    return KEYS_DOWN.some((k) => k.key === key);
}

export function isKeyPress(key: string) {
    const keyDownEvent = getKeyDown(key);
    return keyDownEvent && keyDownEvent.pressFrame === getCurrentFrame() - 1;
}

export function getKeyDown(key: string) {
    return KEYS_DOWN.find((k) => k.key === key);
}

function onKeyDownListener(e: KeyboardEvent) {
    if (isKeyDown(e.key)) return;

    KEYS_DOWN = [...KEYS_DOWN, { key: e.key, pressFrame: getCurrentFrame() }];
}

function onKeyUpListener(e: KeyboardEvent) {
    if (!isKeyDown(e.key)) return;

    KEYS_DOWN = KEYS_DOWN.filter((k) => e.key !== k.key);
}

export enum Arrow {
    DOWN = "ArrowDown",
    UP = "ArrowUp",
    LEFT = "ArrowLeft",
    RIGHT = "ArrowRight",
}
