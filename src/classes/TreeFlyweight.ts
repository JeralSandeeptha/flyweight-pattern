import type { ITreeFlyweight } from "./ITreeFlyweight.js";

export class TreeFlyweight implements ITreeFlyweight {

    constructor(private color: string, private name: string, private texture: string) {
        this.color = color;
        this.name = name;
        this.texture = texture;
    }

    render(xPosition: string, yPosition: string): void {
        console.log(`🌳 ${this.name} tree at (${xPosition}, ${yPosition}) | Color: ${this.color} | Texture: ${this.texture}`);
    }
};
