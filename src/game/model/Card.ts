import type { KnowledgeArea } from "./KnowledgeArea.";

export type CardKind = "argument" | "structure" | "replica" | "speciality"

export abstract class Card {
    abstract readonly kind : CardKind;

    constructor (
        public readonly id : string,
        public readonly name : string,
        public readonly area : KnowledgeArea,
        public readonly effect : string, 
        public readonly description : string, 
    ) {}

    // abstract canPlay (context : PlayContext) : boolean;

    // abstract play (context : PlayContext) : GameCommand[];

    // onEvent?(
    //     event : GameEvent, 
    //     context : EventContext,
    // ) : GameCommand[];
}