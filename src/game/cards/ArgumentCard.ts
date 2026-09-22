import { Card } from "../model/Card";

abstract class ArgumentCard extends Card {
  abstract readonly persistent: boolean;

  canPlay(game: Game, player: Player): boolean {
    return (
      game.turnManager.isActivePlayer(player) &&
      game.turnManager.hasActionAvailable("argument", player)
    );
  }

  play(game: Game, player: Player): void {
    if (!this.canPlay(game, player)) {
      throw new InvalidPlayError();
    }

    game.stack.push(new CardEffect(this, player));
    game.turnManager.consumeAction("argument", player);
    player.hand.remove(this);
  }

  abstract resolve(game: Game, player: Player): void;
}