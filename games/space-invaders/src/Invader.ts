import { css, html } from "lit";
import { Name } from "../../../lib/engine/decorators/EntityDecorator";
import { Entity } from "../../../lib/engine/entity/Entity";
import { Position } from "../../../lib/engine/entity/Position";

@Name("space-invader")
export class Invader extends Entity {
    speed = 100;
    turnAroundTime = 6000 / this.speed; // Frames. Calculation with speed to allow modification
    timeSinceTurnAround = 0;
    approachSpeed = 20;

    start(): void { }

    tick(deltaTime: number): void {
        this.timeSinceTurnAround += 1;
        this.position.add(Position.right.multiply(deltaTime * this.speed));
        if (this.timeSinceTurnAround > this.turnAroundTime) {
            this.speed = this.speed * -1;
            this.timeSinceTurnAround = 0;
            this.position.add(Position.down.multiply(this.approachSpeed));
        }
    }

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
      transition: 100ms linear;
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
      animation: mouth-animation-left 1000ms infinite;
    }

    .mouth-right {
      width: 15px;
      height: 4px;
      transform: rotateZ(-30deg);
      animation: mouth-animation-right 1000ms infinite;
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
      animation: arm-animation-left 1000ms infinite;
    }

    .arm-right {
      width: 4px;
      height: 15px;
      transform: rotateZ(-20deg);
      position: absolute;
      top: 4px;
      right: -4px;
      animation: arm-animation-right 1000ms infinite;
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

    @keyframes arm-animation-left {
      0% {
        transform: rotateZ(30deg);
      }
      50% {
        transform: rotateZ(90deg);
      }
      100% {
        transform: rotateZ(30deg);
      }
    }

    @keyframes arm-animation-right {
      0% {
        transform: rotateZ(-30deg);
      }
      50% {
        transform: rotateZ(-90deg);
      }
      100% {
        transform: rotateZ(-30deg);
      }
    }

    @keyframes mouth-animation-left {
      0% {
        transform: rotateZ(30deg);
      }
      50% {
        transform: rotateZ(90deg);
      }
      100% {
        transform: rotateZ(30deg);
      }
    }
    @keyframes mouth-animation-right {
      0% {
        transform: rotateZ(-30deg);
      }
      50% {
        transform: rotateZ(-90deg);
      }
      100% {
        transform: rotateZ(-30deg);
      }
    }
  `;
}
