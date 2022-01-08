export function getFrame() {
    return new Promise((resolve) => window.requestAnimationFrame(resolve));
}
