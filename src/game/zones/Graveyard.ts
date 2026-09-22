import type { Card } from "../model/Card";

class Graveyard {
  private cards: Card[] = [];

  add(card: Card): void {
    this.cards.push(card); 
  }

  count(): number {
    return this.cards.length;
  }

  getPublicView(): Card[] {
    return [...this.cards];
  }

  findByName(name: string): Card | undefined {
    return this.cards.find((c) => c.name === name);
  }
}