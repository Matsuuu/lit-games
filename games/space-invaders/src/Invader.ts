import { css, html } from "lit";
import { Name } from "../../../lib/engine/decorators/EntityDecorator";
import { Entity } from "../../../lib/engine/entity/Entity";

@Name("space-invader")
export class Invader extends Entity {
    start(): void { }

    tick(deltaTime: number): void { }

    render() {
        return html`
      <div class="antenna-left"></div>
      <div class="antenna-right"></div>
      <div class="body">
        <div class="eye"></div>
        <div class="eye"></div>
      </div>
      <div class="arm-left"></div>
      <div class="arm-right"></div>
      <div class="mouth">
        <div class="mouth-left"></div>
        <div class="mouth-right"></div>
      </div>
    `;
    }

    static styles = css`
    :host {
      position: relative;
    }

    :host * {
      background: #fff;
    }

    .body {
      width: 30px;
      height: 20px;
      display: flex;
    }

    .eye {
      background: #000;
      width: 3px;
      height: 4px;
    }
    .eye:first-child {
      transform: translate(8px, 6px);
    }
    .eye:last-child {
      transform: translate(16px, 6px);
    }

    .mouth-left {
      width: 15px;
      height: 4px;
      transform: rotateZ(30deg);
    }

    .mouth-right {
      width: 15px;
      height: 4px;
      transform: rotateZ(-30deg);
    }

    .mouth {
      display: flex;
      background: none;
    }

    .arm-left {
      width: 4px;
      height: 15px;
      transform: rotateZ(20deg);
      position: absolute;
      top: 4px;
      left: -4px;
    }

    .arm-right {
      width: 4px;
      height: 15px;
      transform: rotateZ(-20deg);
      position: absolute;
      top: 4px;
      right: -4px;
    }

    .antenna-left {
      height: 14px;
      width: 4px;
      transform: rotateZ(-20deg);
      left: 4px;
      position: absolute;
      top: -12px;
    }

    .antenna-right {
      height: 14px;
      width: 4px;
      transform: rotateZ(20deg);
      right: 4px;
      position: absolute;
      top: -12px;
    }
  `;
}
