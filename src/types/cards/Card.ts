
type CardType = "hero" | "speel" | "structure" | "minion";

abstract class Card {
    constructor (
        public readonly id: string, 
        public readonly name : string,
        public readonly type : CardType,
        public readonly description : string,
    ) {}
    
    
}