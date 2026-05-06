import type { ITreeFlyweight } from "./ITreeFlyweight.js";
import { TreeFlyweight } from "./TreeFlyweight.js";

export class TreeFactory {
  private static trees: Map<string, ITreeFlyweight> = new Map();

  static getTreeType(name: string, color: string, texture: string): ITreeFlyweight {
    const key = `${name}-${color}-${texture}`;

    if (!this.trees.has(key)) {
      console.log(`✨ Creating new TreeType: ${key}`);
      this.trees.set(key, new TreeFlyweight(name, color, texture));
    }

    return this.trees.get(key)!;
  }

  static getCount(): number {
    return this.trees.size;
  }
}
